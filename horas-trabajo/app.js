// ══════════════════════════════════════════════
//  CONSTANTS
// ══════════════════════════════════════════════

const HOUR_PRESETS = [4, 6, 7, 7.5, 8, 9, 10];
const WEEKDAYS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const WEEKDAYS_LONG = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// ══════════════════════════════════════════════
//  DATE HELPERS (all local time, no UTC drift)
// ══════════════════════════════════════════════

function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function fromISODate(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function todayISO() {
  return toISODate(new Date());
}

function getMonday(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

// ══════════════════════════════════════════════
//  STATE / STORAGE
// ══════════════════════════════════════════════

const STORAGE_KEY = 'horasTrabajoData';

function loadData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

function saveData(d) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
}

function getData() {
  const d = loadData();
  if (!d.entries) d.entries = {};
  if (!d.target) d.target = 8;
  return d;
}

let state = {
  currentScreen: 'hoy',
  editingDate: null,
};

// ══════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════

function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screen + '-screen').classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-nav="${screen}"]`);
  if (btn) btn.classList.add('active');
  state.currentScreen = screen;
  if (screen === 'hoy') renderHoy();
  if (screen === 'historial') renderHistorial();
  if (screen === 'resumen') renderResumen();
}

// ══════════════════════════════════════════════
//  HOY (entry form)
// ══════════════════════════════════════════════

function renderHoy() {
  const dateInput = document.getElementById('input-date');
  if (!dateInput.value) dateInput.value = todayISO();

  document.getElementById('preset-chips').innerHTML = HOUR_PRESETS.map(h =>
    `<button type="button" class="chip" onclick="setHours(${h})">${h}h</button>`
  ).join('');

  loadFormForDate(dateInput.value);
  renderTodayStatus();
}

function loadFormForDate(iso) {
  const d = getData();
  const entry = d.entries[iso];
  document.getElementById('input-hours').value = entry ? entry.hours : '';
  document.getElementById('input-note').value = entry ? (entry.note || '') : '';
}

function renderTodayStatus() {
  const d = getData();
  const iso = todayISO();
  const entry = d.entries[iso];
  const box = document.getElementById('today-status');
  const dateObj = new Date();
  const label = `${WEEKDAYS_LONG[dateObj.getDay()]}, ${dateObj.getDate()} de ${MONTHS[dateObj.getMonth()]}`;

  if (entry) {
    box.innerHTML = `
      <div class="status-row">
        <div class="status-icon">✅</div>
        <div style="flex:1">
          <div style="font-weight:600;text-transform:capitalize">${label}</div>
          <div style="color:var(--text2);font-size:13px">Ya registraste hoy</div>
        </div>
        <div class="status-hours">${entry.hours}h</div>
      </div>`;
  } else {
    box.innerHTML = `
      <div class="status-row">
        <div class="status-icon">⏳</div>
        <div style="flex:1">
          <div style="font-weight:600;text-transform:capitalize">${label}</div>
          <div style="color:var(--text2);font-size:13px">Aún no has registrado hoy</div>
        </div>
      </div>`;
  }
}

function stepHours(delta) {
  const input = document.getElementById('input-hours');
  let v = parseFloat(input.value) || 0;
  v = Math.min(24, Math.max(0, v + delta));
  input.value = Number.isInteger(v) ? v : v.toFixed(2).replace(/0$/, '').replace(/\.$/, '');
  document.activeElement.blur();
}

function setHours(h) {
  document.getElementById('input-hours').value = h;
  document.activeElement.blur();
}

function saveEntry() {
  const iso = document.getElementById('input-date').value;
  const hoursRaw = document.getElementById('input-hours').value;
  const note = document.getElementById('input-note').value.trim();

  if (!iso) { alert('Elige una fecha.'); return; }
  const hours = parseFloat(hoursRaw);
  if (isNaN(hours) || hours < 0 || hours > 24) { alert('Introduce un número de horas válido (0-24).'); return; }

  const d = getData();
  d.entries[iso] = { hours, note };
  saveData(d);

  state.editingDate = null;
  document.getElementById('cancel-edit-btn').style.display = 'none';
  renderTodayStatus();
  renderHoy();
}

function resetForm() {
  state.editingDate = null;
  document.getElementById('input-date').value = todayISO();
  document.getElementById('cancel-edit-btn').style.display = 'none';
  renderHoy();
}

function editEntry(iso) {
  navigate('hoy');
  document.getElementById('input-date').value = iso;
  loadFormForDate(iso);
  state.editingDate = iso;
  document.getElementById('cancel-edit-btn').style.display = 'block';
}

function deleteEntry(iso) {
  if (!confirm('¿Borrar el registro de este día?')) return;
  const d = getData();
  delete d.entries[iso];
  saveData(d);
  renderHistorial();
  if (state.currentScreen === 'hoy') renderHoy();
}

// ══════════════════════════════════════════════
//  HISTORIAL
// ══════════════════════════════════════════════

function renderHistorial() {
  const d = getData();
  const dates = Object.keys(d.entries).sort((a, b) => b.localeCompare(a));
  const body = document.getElementById('historial-body');

  if (dates.length === 0) {
    body.innerHTML = `
      <div class="empty-state">
        <div class="icon">🗂️</div>
        <div>Todavía no has registrado ningún día.</div>
      </div>`;
    return;
  }

  const groups = {};
  dates.forEach(iso => {
    const key = iso.slice(0, 7); // YYYY-MM
    if (!groups[key]) groups[key] = [];
    groups[key].push(iso);
  });

  body.innerHTML = Object.keys(groups).sort((a, b) => b.localeCompare(a)).map(key => {
    const [y, m] = key.split('-').map(Number);
    const monthTotal = groups[key].reduce((sum, iso) => sum + d.entries[iso].hours, 0);
    const rows = groups[key].map(iso => {
      const entry = d.entries[iso];
      const dateObj = fromISODate(iso);
      return `
        <div class="day-item fade-in" onclick="editEntry('${iso}')">
          <div class="day-date">
            <div class="day-weekday">${WEEKDAYS[dateObj.getDay()]}</div>
            <div class="day-num">${dateObj.getDate()}</div>
          </div>
          <div class="day-info">
            ${entry.note ? `<div class="day-note">${escapeHtml(entry.note)}</div>` : `<div class="day-note">&nbsp;</div>`}
          </div>
          <div class="day-hours">${entry.hours}h</div>
          <button class="day-del" onclick="event.stopPropagation();deleteEntry('${iso}')">🗑️</button>
        </div>`;
    }).join('');

    return `
      <div class="month-group">
        <div class="month-title"><span style="text-transform:capitalize">${MONTHS[m - 1]} ${y}</span><span>${monthTotal}h</span></div>
        ${rows}
      </div>`;
  }).join('');
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

// ══════════════════════════════════════════════
//  RESUMEN
// ══════════════════════════════════════════════

function renderResumen() {
  const d = getData();
  const entries = d.entries;
  const isoList = Object.keys(entries);
  const totalHours = isoList.reduce((s, k) => s + entries[k].hours, 0);
  const daysLogged = isoList.length;
  const avg = daysLogged ? (totalHours / daysLogged).toFixed(1) : '0';

  const now = new Date();
  const monday = getMonday(now);
  let weekTotal = 0;
  const last7 = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    const iso = toISODate(day);
    const h = entries[iso] ? entries[iso].hours : 0;
    weekTotal += h;
    last7.push({ iso, day, hours: h });
  }

  const monthKey = toISODate(now).slice(0, 7);
  const monthTotal = isoList.filter(k => k.startsWith(monthKey)).reduce((s, k) => s + entries[k].hours, 0);

  const maxBar = Math.max(...last7.map(x => x.hours), d.target, 1);

  document.getElementById('resumen-body').innerHTML = `
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-val">${weekTotal}h</div>
        <div class="stat-lbl">Esta semana</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${monthTotal}h</div>
        <div class="stat-lbl">Este mes</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${totalHours}h</div>
        <div class="stat-lbl">Total registrado</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${avg}h</div>
        <div class="stat-lbl">Media diaria</div>
      </div>
    </div>

    <div class="card">
      <div style="font-weight:600;margin-bottom:8px">Últimos 7 días</div>
      <div class="bar-chart">
        ${last7.map(x => `
          <div class="bar-col">
            <div class="bar-val">${x.hours || ''}</div>
            <div class="bar-fill ${x.hours >= d.target ? 'over' : ''}" style="height:${(x.hours / maxBar) * 100}%"></div>
            <div class="bar-lbl">${WEEKDAYS[x.day.getDay()]}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card">
      <div class="field-label">Objetivo diario de horas</div>
      <div class="hours-row">
        <input type="number" id="target-input" class="input hours-input" step="0.5" min="0" max="24" value="${d.target}">
        <button class="btn btn-primary" style="width:auto;padding:12px 18px" onclick="saveTarget()">Guardar</button>
      </div>
    </div>

    <button class="btn btn-secondary" onclick="exportCSV()">⬇️ Exportar CSV</button>
    <button class="btn btn-secondary" style="margin-top:10px" onclick="resetAll()">Borrar todos los datos</button>
  `;
}

function saveTarget() {
  const v = parseFloat(document.getElementById('target-input').value);
  if (isNaN(v) || v < 0) return;
  const d = getData();
  d.target = v;
  saveData(d);
  renderResumen();
}

function resetAll() {
  if (!confirm('¿Borrar TODOS los registros de horas? Esta acción no se puede deshacer.')) return;
  localStorage.removeItem(STORAGE_KEY);
  renderResumen();
  renderHoy();
}

function exportCSV() {
  const d = getData();
  const dates = Object.keys(d.entries).sort();
  if (dates.length === 0) { alert('No hay datos para exportar.'); return; }
  let csv = 'Fecha,Horas,Nota\n';
  dates.forEach(iso => {
    const e = d.entries[iso];
    const note = (e.note || '').replace(/"/g, '""');
    csv += `${iso},${e.hours},"${note}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'horas-trabajo.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════

window.addEventListener('load', () => {
  document.getElementById('input-date').value = todayISO();
  document.getElementById('input-date').addEventListener('change', (e) => loadFormForDate(e.target.value));
  navigate('hoy');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

// Expose to HTML
window.navigate = navigate;
window.stepHours = stepHours;
window.setHours = setHours;
window.saveEntry = saveEntry;
window.resetForm = resetForm;
window.editEntry = editEntry;
window.deleteEntry = deleteEntry;
window.saveTarget = saveTarget;
window.resetAll = resetAll;
window.exportCSV = exportCSV;
