// ══════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════

const CATEGORIES = [
  { id: 'respiracion', icon: '🌬️', name: 'Respiración', sub: 'Base de la voz' },
  { id: 'vocales',    icon: '🔤', name: 'Vocales',     sub: 'Articulación clara' },
  { id: 'consonantes',icon: '💬', name: 'Consonantes', sub: 'Nitidez fonética' },
  { id: 'trabalenguas',icon:'🌀', name: 'Trabalenguas',sub: 'Agilidad vocal' },
  { id: 'prosodia',   icon: '🎵', name: 'Prosodia',    sub: 'Ritmo e inflexión' },
  { id: 'vocabulario',icon: '📚', name: 'Vocabulario', sub: 'Lenguaje culto' },
];

const EXERCISES = {
  respiracion: [
    {
      title: 'Respiración Diafragmática',
      content: 'Inhala 4 s → Sostén 4 s → Exhala 8 s',
      desc: 'Pon una mano sobre el abdomen. Al inhalar, el abdomen debe expandirse hacia afuera, NO el pecho. Repite 5 veces.',
      tip: 'Esta respiración amplía tu capacidad vocal y reduce la tensión en la garganta.',
      type: 'timer', duration: 60,
    },
    {
      title: 'Soplido Sostenido',
      content: 'Inhala profundo y pronuncia: "Sssssssssss" sin parar',
      desc: 'Controla el aire mientras mantienes la "S" durante el mayor tiempo posible. Intenta superar 15 segundos.',
      tip: 'Fortalece el control del diafragma y mejora la proyección de voz.',
      type: 'timer', duration: 30,
    },
    {
      title: 'Respiración Rítmica',
      content: 'Inhala 3 s → Exhala contando en voz alta: "uno, dos, tres, cuatro, cinco"',
      desc: 'El número de palabras que puedas pronunciar en una sola exhalación indica tu capacidad pulmonar activa.',
      tip: 'Practica hasta poder decir 10 palabras en una sola exhalación con voz clara.',
      type: 'repeat', reps: 6,
    },
  ],
  vocales: [
    {
      title: 'Vocales Abiertas',
      content: 'A — E — I — O — U',
      desc: 'Pronuncia cada vocal exagerando la apertura de la boca. Mantén cada una 3 segundos. Siente la vibración en diferentes puntos.',
      tip: 'La "A" vibra en el pecho, la "I" en la cabeza. Experimenta las diferencias.',
      type: 'speak',
    },
    {
      title: 'Escala de Vocales',
      content: '"Aaa" (grave) → "Eee" (medio) → "Iii" (agudo)',
      desc: 'Cambia el tono mientras pronuncias cada vocal. Pasa de grave a agudo sin cortar el sonido.',
      tip: 'Ejercita tu rango vocal completo. Cuanto más amplio, más expresivo serás.',
      type: 'speak',
    },
    {
      title: 'Combinaciones Vocálicas',
      content: 'AE · AI · AO · AU · EA · EI · EO · EU',
      desc: 'Pronuncia cada combinación de forma clara y distinta. No fusiones las vocales: cada una debe escucharse por separado.',
      tip: 'Estas transiciones mejoran la fluidez y evitan el habla "comida".',
      type: 'speak',
    },
    {
      title: 'Frases Solo con Vocales',
      content: '"A-E-I-O-U — U-O-I-E-A"',
      desc: 'Repite la secuencia 10 veces de forma progresivamente más rápida, sin perder la claridad de cada vocal.',
      tip: 'Si alguna vocal se "come", ve más despacio hasta perfeccionarla.',
      type: 'repeat', reps: 10,
    },
  ],
  consonantes: [
    {
      title: 'Labiales: B, P, M',
      content: '"Ba-be-bi-bo-bu · Pa-pe-pi-po-pu · Ma-me-mi-mo-mu"',
      desc: 'Siente cómo los labios forman completamente cada consonante antes de abrirse para la vocal. No dejes que el sonido sea sibilante.',
      tip: 'La "P" y la "B" requieren un sello perfecto de los labios. Practica ante el espejo.',
      type: 'speak',
    },
    {
      title: 'Dentales: D, T, N',
      content: '"Da-de-di-do-du · Ta-te-ti-to-tu · Na-ne-ni-no-nu"',
      desc: 'La lengua debe tocar los dientes superiores limpiamente. Evita pronunciar "Da" como "Tha" o "Ra".',
      tip: 'Hablar correctamente la "D" es uno de los signos más claros de dicción cuidada.',
      type: 'speak',
    },
    {
      title: 'La R y RR',
      content: '"Ra-re-ri-ro-ru · Rra-rre-rri-rro-rru"',
      desc: 'La "R" simple: la lengua roza suavemente el paladar. La "RR" vibrante: la lengua vibra repetidamente. Son sonidos completamente diferentes.',
      tip: 'Di "d-d-d-d-r" muy rápido para encontrar la vibración de la RR.',
      type: 'speak',
    },
    {
      title: 'S y Z / La Ch y Ll',
      content: '"Sa-se-si-so-su · Cha-che-chi-cho-chu · Lla-lle-lli-llo-llu"',
      desc: 'La "S" debe ser limpia, sin silbar. La "Ch" es oclusiva. La "Ll" se pronuncia con la lengua pegada al paladar.',
      tip: 'Muchos defectos de habla están en la S (exceso de sibilancia). Practica que sea suave.',
      type: 'speak',
    },
  ],
  trabalenguas: [
    {
      title: 'Trabalenguas 1 – Nivel Básico',
      content: '"Tres tristes tigres tragaban trigo en un trigal"',
      desc: 'Empieza muy despacio, articulando cada sílaba. Luego acelera gradualmente. La clave es no sacrificar la claridad por la velocidad.',
      tip: 'Primero lento y perfecto, luego rápido. El orden importa.',
      type: 'repeat', reps: 5,
    },
    {
      title: 'Trabalenguas 2 – P y B',
      content: '"Pedro Pica pica pimientos, ¿cuántos pimientos pica Pedro Pica?"',
      desc: 'Trabaja la alternancia entre bilabiales oclusivas. Mantén la "P" explosiva y la "B" suave.',
      tip: 'Coloca la mano frente a la boca: debes sentir pequeñas ráfagas de aire en las "P".',
      type: 'repeat', reps: 5,
    },
    {
      title: 'Trabalenguas 3 – R y L',
      content: '"El loro Loló habló con Lola, la lora. La lora con Loló, el loro, habló."',
      desc: 'Distingue entre la R y la L. Son los sonidos que más se confunden. La L lleva la lengua al frente; la R, al paladar.',
      tip: 'Di "la-ra-la-ra" varias veces para notar la diferencia de posición lingual.',
      type: 'repeat', reps: 5,
    },
    {
      title: 'Trabalenguas 4 – Nivel Avanzado',
      content: '"Pablito clavó un clavito. ¿Qué clavito clavó Pablito?"',
      desc: 'Ejercita la V/B, la L y la combinación de sonidos labiales con dentales.',
      tip: 'Grábate y escucha. Detecta qué sonido pierdes primero al acelerar.',
      type: 'repeat', reps: 8,
    },
    {
      title: 'Trabalenguas 5 – Experto',
      content: '"Parangaricutirimícuaro es un cerro ¿quién lo desparangaricutirimicuarizará? El que lo desparangaricutirimicuarizare, buen desparangaricutirimicuarizador será."',
      desc: 'Uno de los más complejos del español. Divídelo en grupos silábicos y ve uniéndolos poco a poco.',
      tip: 'Pa-ran-ga-ri-cu-ti-ri-mí-cua-ro. Márcate el ritmo con los dedos.',
      type: 'repeat', reps: 3,
    },
  ],
  prosodia: [
    {
      title: 'Énfasis y Significado',
      content: '"YO no dije que él robó el dinero" (6 significados distintos)',
      desc: 'Pronuncia la frase 6 veces, cada vez cargando el énfasis en una palabra diferente. Observa cómo cambia el significado: "Yo NO dije", "Yo no DIJE", "yo no dije ÉL", etc.',
      tip: 'El énfasis es la puntuación oral. Úsalo para comunicar exactamente lo que piensas.',
      type: 'speak',
    },
    {
      title: 'Pausas Dramáticas',
      content: '"El secreto del éxito… [pausa 2s] …es la constancia."',
      desc: 'Practica insertar pausas deliberadas antes de las ideas importantes. La pausa genera anticipación y autoridad.',
      tip: 'Los grandes oradores no temen el silencio. La pausa comunica tanto como las palabras.',
      type: 'speak',
    },
    {
      title: 'Velocidad Variable',
      content: 'Lee este párrafo: cambia de velocidad según las emociones',
      desc: '"Era una tarde tranquila, serena, apacible... [lento] De repente, sin previo aviso, todo cambió de golpe! [rápido] Y el silencio volvió." [lento]',
      tip: 'Variar la velocidad es la diferencia entre un lector y un narrador.',
      type: 'speak',
    },
    {
      title: 'Tonos Interrogativo y Afirmativo',
      content: '"¿Vendrás mañana?" vs. "Vendrás mañana."',
      desc: 'La pregunta sube el tono al final. La afirmación lo baja. La exclamación pica en la sílaba tónica. Practica las 3 variantes con distintas frases.',
      tip: 'En español, la entonación es la puntuación de la voz. Dominarla es dominar el idioma.',
      type: 'speak',
    },
  ],
};

const VOCABULARY = [
  { word: 'Elocuente', type: 'adj.', def: 'Que se expresa de manera clara, fluida y persuasiva.', ex: '"Su discurso fue tan elocuente que nadie pudo refutar sus argumentos."' },
  { word: 'Perspicaz', type: 'adj.', def: 'Que tiene agudeza mental para comprender o percibir las cosas con rapidez.', ex: '"Su mente perspicaz detectó el error que todos habían pasado por alto."' },
  { word: 'Ínclito', type: 'adj.', def: 'Ilustre, egregio, célebre y distinguido.', ex: '"El ínclito poeta fue homenajeado en su tierra natal."' },
  { word: 'Acérrimo', type: 'adj.', def: 'Muy fuerte, tenaz o ardiente en sus posiciones o creencias.', ex: '"Es un acérrimo defensor de los derechos humanos."' },
  { word: 'Perorar', type: 'v.', def: 'Pronunciar un discurso largo, especialmente con afectación o pedantería.', ex: '"El orador peroraba sin descanso ante un público cada vez menos atento."' },
  { word: 'Diáfano', type: 'adj.', def: 'Claro, transparente, sin ambigüedades.', ex: '"Su explicación fue diáfana: nadie tuvo dudas al terminar."' },
  { word: 'Cavilar', type: 'v.', def: 'Pensar con mucha atención y detenimiento sobre algo.', ex: '"Caviló durante horas antes de tomar la decisión."' },
  { word: 'Magnánimo', type: 'adj.', def: 'Generoso, noble de espíritu, capaz de perdonar.', ex: '"Fue magnánimo con sus rivales al reconocer su valentía."' },
  { word: 'Preclaro', type: 'adj.', def: 'Esclarecido, ilustre, que sobresale por sus virtudes.', ex: '"Un preclaro ejemplo de dedicación y talento."' },
  { word: 'Sempiterno', type: 'adj.', def: 'Eterno, que dura o ha de durar siempre.', ex: '"El sempiterno debate entre razón y corazón nunca tendrá un vencedor."' },
  { word: 'Escrutinio', type: 'm.', def: 'Examen atento y riguroso de algo.', ex: '"La propuesta superó el escrutinio del comité científico."' },
  { word: 'Prosaico', type: 'adj.', def: 'Ordinario, sin elevación ni idealismo; vulgar.', ex: '"Prefería los grandes ideales a las preocupaciones más prosaicas."' },
  { word: 'Vehemente', type: 'adj.', def: 'Que actúa con gran pasión, fuerza e intensidad.', ex: '"Defendió su postura con tanta vehemencia que convenció a todos."' },
  { word: 'Inequívoco', type: 'adj.', def: 'Claro, que no da lugar a dudas o malentendidos.', ex: '"Su rechazo fue inequívoco: no había margen para la negociación."' },
  { word: 'Preponderante', type: 'adj.', def: 'Superior, que tiene mayor peso, fuerza o importancia.', ex: '"Jugó un papel preponderante en el éxito del proyecto."' },
  { word: 'Inefable', type: 'adj.', def: 'Que no puede expresarse con palabras.', ex: '"Sintió una alegría inefable al ver a su familia reunida."' },
  { word: 'Disquisición', type: 'f.', def: 'Análisis o examen riguroso y detallado de un tema.', ex: '"Nos ofreció una extensa disquisición sobre la naturaleza del tiempo."' },
  { word: 'Ponderar', type: 'v.', def: 'Considerar con cuidado algo antes de opinar o decidir.', ex: '"Ponderó cada opción antes de pronunciarse."' },
  { word: 'Concomitante', type: 'adj.', def: 'Que acompaña o va junto a otra cosa.', ex: '"El deterioro económico y sus efectos concomitantes en la sociedad."' },
  { word: 'Aseveración', type: 'f.', def: 'Afirmación hecha con seguridad y convicción.', ex: '"Su aseveración fue tajante: no existía otra solución posible."' },
  { word: 'Exégesis', type: 'f.', def: 'Interpretación o explicación detallada de un texto.', ex: '"El profesor hizo una profunda exégesis del Quijote."' },
  { word: 'Dilucidación', type: 'f.', def: 'Acción de aclarar o explicar algo con detalle.', ex: '"La dilucidación del misterio llevó décadas de investigación."' },
  { word: 'Apostrofar', type: 'v.', def: 'Dirigirse con vehemencia a alguien, reprochándole algo.', ex: '"El abogado apostrofó al testigo con dureza."' },
  { word: 'Pérfido', type: 'adj.', def: 'Desleal, traidor, que falta a la fe y confianza debidas.', ex: '"Nunca confió de nuevo en aquel pérfido consejero."' },
  { word: 'Laudatorio', type: 'adj.', def: 'Que contiene o expresa alabanza.', ex: '"Recibió un discurso laudatorio de sus compañeros al jubilarse."' },
  { word: 'Prosopopeya', type: 'f.', def: 'Afectación de gravedad o pompa en el modo de hablar.', ex: '"Hablaba con tanta prosopopeya que resultaba difícil seguirlo."' },
  { word: 'Acucioso', type: 'adj.', def: 'Diligente, cuidadoso, que actúa con rapidez y eficacia.', ex: '"El periodista acucioso no dejaba pasar ningún detalle."' },
  { word: 'Meridiano', type: 'adj.', def: 'Muy claro y evidente, sin lugar a dudas.', ex: '"Su superioridad quedó de forma meridiana para todos."' },
  { word: 'Recóndito', type: 'adj.', def: 'Muy escondido, reservado, alejado.', ex: '"Guardaba en un lugar recóndito de su memoria ese secreto."' },
  { word: 'Parsimonia', type: 'f.', def: 'Calma, lentitud y tranquilidad en el modo de actuar.', ex: '"Respondió a las acusaciones con una parsimonia desconcertante."' },
];

const EXAM_BANK = [
  { q: '¿Qué significa "elocuente"?', opts: ['Que habla mucho sin decir nada','Que se expresa con claridad y persuasión','Que tiene voz grave y potente','Que usa palabras difíciles'], ans: 1 },
  { q: 'Una persona "perspicaz" es alguien que…', opts: ['Habla sin parar','Tiene agudeza mental para percibir cosas rápido','Es muy callada y reservada','Pronuncia con acento extranjero'], ans: 1 },
  { q: '"Peroraba ante el auditorio." ¿Qué hacía?', opts: ['Cantaba','Dormía','Pronunciaba un discurso largo','Escribía'], ans: 2 },
  { q: '¿Cuál es el sinónimo más exacto de "diáfano"?', opts: ['Opaco','Claro y transparente','Oscuro','Complicado'], ans: 1 },
  { q: '"Magnánimo" describe a alguien que es…', opts: ['Avaro y egoísta','Grande de estatura','Generoso y noble de espíritu','Muy inteligente'], ans: 2 },
  { q: 'En prosodia, ¿para qué sirve la PAUSA en un discurso?', opts: ['Para recuperar el aliento únicamente','Para generar anticipación y dar peso a las ideas','Para que el público tome notas','No tiene ninguna función'], ans: 1 },
  { q: '¿Qué significa "sempiterno"?', opts: ['Que ocurrió hace mucho tiempo','Eterno, que dura siempre','Que se repite cada semana','Muy antiguo pero ya extinto'], ans: 1 },
  { q: '"Vehemente" implica…', opts: ['Actuar con pasión e intensidad','Hablar muy despacio','Usar vocabulario técnico','Ser indiferente'], ans: 0 },
  { q: '¿Cuál es la clave al practicar un trabalenguas?', opts: ['Empezar rápido para ganar confianza','Ir despacio primero hasta lograr claridad, luego acelerar','Gritar para articular mejor','Praticarlo solo una vez al día'], ans: 1 },
  { q: '"Inequívoco" significa…', opts: ['Que puede interpretarse de varias formas','Ambiguo y confuso','Claro, que no da lugar a dudas','Que nadie entiende'], ans: 2 },
  { q: '¿Qué parte del cuerpo debe moverse al respirar diafragmáticamente?', opts: ['El pecho','Los hombros','El abdomen','La garganta'], ans: 2 },
  { q: '"Escrutinio" es…', opts: ['Un tipo de discurso','Un examen atento y riguroso','Una figura retórica','Una forma de respiración'], ans: 1 },
  { q: '¿Qué hace variar el significado de la frase "YO no dije que él robó el dinero"?', opts: ['El vocabulario empleado','La velocidad al pronunciarla','La palabra en la que se carga el énfasis','El tono de voz grave o agudo'], ans: 2 },
  { q: '"Inefable" describe algo que…', opts: ['Es muy fácil de explicar','No puede expresarse con palabras','Es ineficiente','Es muy largo y tedioso'], ans: 1 },
  { q: '¿Cuál de estos es un trabalenguas?', opts: ['"El cielo es azul y hermoso"','"Tres tristes tigres tragaban trigo en un trigal"','"Respira profundo y exhala lentamente"','"Buenos días, ¿cómo está usted?"'], ans: 1 },
];

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════

let state = {
  currentScreen: 'home',
  currentCategory: null,
  currentExerciseIdx: 0,
  vocabIdx: 0,
  examActive: false,
  examQuestions: [],
  examIdx: 0,
  examAnswers: [],
  examAnswered: false,
  timerInterval: null,
  timerLeft: 0,
};

function loadData() {
  return JSON.parse(localStorage.getItem('vozData') || '{}');
}

function saveData(d) {
  localStorage.setItem('vozData', JSON.stringify(d));
}

function getData() {
  const d = loadData();
  if (!d.streak) d.streak = 0;
  if (!d.lastDate) d.lastDate = '';
  if (!d.completedToday) d.completedToday = [];
  if (!d.examHistory) d.examHistory = [];
  if (!d.totalExercises) d.totalExercises = 0;
  if (!d.vocabIdx) d.vocabIdx = 0;
  return d;
}

function updateStreak() {
  const d = getData();
  const today = new Date().toDateString();
  if (d.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (d.lastDate === yesterday) d.streak += 1;
    else if (d.lastDate !== today) d.streak = 1;
    d.lastDate = today;
    d.completedToday = [];
    saveData(d);
  }
  return d;
}

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
  if (screen === 'home') renderHome();
  if (screen === 'exercises') renderExercises();
  if (screen === 'vocab') renderVocab();
  if (screen === 'exam') renderExamHome();
  if (screen === 'progress') renderProgress();
}

// ══════════════════════════════════════════════
//  HOME
// ══════════════════════════════════════════════

function renderHome() {
  const d = getData();
  const today = new Date().toDateString();
  if (d.lastDate !== today) { d.completedToday = []; }

  document.getElementById('streak-num').textContent = d.streak;
  const done = d.completedToday.length;
  const total = CATEGORIES.length;
  const pct = Math.round((done / total) * 100);
  document.getElementById('home-progress-ring').setAttribute('stroke-dashoffset', 157 - (157 * pct / 100));
  document.getElementById('home-progress-pct').textContent = pct + '%';
  document.getElementById('home-done').textContent = `${done}/${total} categorías hoy`;

  const next = CATEGORIES.find(c => !d.completedToday.includes(c.id));
  const nextEl = document.getElementById('next-exercise');
  if (next) {
    nextEl.innerHTML = `
      <div class="card-row" style="cursor:pointer" onclick="openCategory('${next.id}')">
        <div style="font-size:36px">${next.icon}</div>
        <div style="flex:1">
          <div style="font-weight:600">${next.name}</div>
          <div style="color:var(--text2);font-size:13px">${next.sub}</div>
        </div>
        <div style="color:var(--accent2);font-size:20px">›</div>
      </div>`;
  } else {
    nextEl.innerHTML = `<div style="text-align:center;padding:8px;color:var(--green);font-weight:600">🎉 ¡Completaste todos los ejercicios de hoy!</div>`;
  }

  const examEl = document.getElementById('home-exam-tip');
  const dayOfWeek = new Date().getDay();
  const daysLeft = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  if (daysLeft === 0) {
    examEl.innerHTML = `<div style="color:var(--yellow);font-weight:600">📝 ¡Hoy es día de examen semanal!</div>`;
  } else {
    examEl.innerHTML = `<div style="color:var(--text2);font-size:13px">Examen semanal en ${daysLeft} día${daysLeft !== 1 ? 's' : ''}</div>`;
  }
}

// ══════════════════════════════════════════════
//  EXERCISES LIST
// ══════════════════════════════════════════════

function renderExercises() {
  const d = getData();
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card ${d.completedToday.includes(c.id) ? 'done' : ''}" onclick="openCategory('${c.id}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${EXERCISES[c.id]?.length || 0} ejercicios</div>
      ${d.completedToday.includes(c.id) ? '<div style="margin-top:6px"><span class="badge green">✓ Hecho</span></div>' : ''}
    </div>
  `).join('');
}

// ══════════════════════════════════════════════
//  EXERCISE DETAIL
// ══════════════════════════════════════════════

function openCategory(catId) {
  state.currentCategory = catId;
  state.currentExerciseIdx = 0;
  clearTimer();
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('exercise-screen').classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  renderExerciseDetail();
}

function renderExerciseDetail() {
  const cat = CATEGORIES.find(c => c.id === state.currentCategory);
  const exercises = EXERCISES[state.currentCategory] || [];
  const ex = exercises[state.currentExerciseIdx];
  const isLast = state.currentExerciseIdx === exercises.length - 1;

  document.getElementById('ex-title').textContent = cat.icon + ' ' + cat.name;
  document.getElementById('ex-subtitle').textContent = `Ejercicio ${state.currentExerciseIdx + 1} de ${exercises.length}`;

  // Step dots
  document.getElementById('step-dots').innerHTML = exercises.map((_, i) => `
    <div class="step-dot ${i < state.currentExerciseIdx ? 'done' : i === state.currentExerciseIdx ? 'active' : ''}"></div>
  `).join('');

  // Exercise content
  let extraHTML = '';
  if (ex.type === 'timer') {
    extraHTML = `
      <div class="timer-ring" id="timer-ring">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle class="ring-bg" cx="60" cy="60" r="50"/>
          <circle class="ring-fg" id="timer-fg" cx="60" cy="60" r="50" stroke-dasharray="314" stroke-dashoffset="314"/>
        </svg>
        <div class="timer-num" id="timer-display">${ex.duration}s</div>
      </div>
      <button class="btn btn-primary" id="timer-btn" onclick="toggleTimer(${ex.duration})">▶ Iniciar</button>`;
  } else if (ex.type === 'repeat') {
    extraHTML = `
      <div style="text-align:center;margin:12px 0">
        <div style="font-size:48px;font-weight:800;color:var(--accent2)" id="rep-counter">0</div>
        <div style="color:var(--text2);font-size:13px">de ${ex.reps} repeticiones</div>
      </div>
      <button class="btn btn-primary" onclick="addRep(${ex.reps})" style="margin-bottom:10px">+1 Repetición</button>`;
  } else {
    extraHTML = `<button class="btn btn-speak" onclick="speak('${ex.content.replace(/'/g, "\\'")}')">🔊 Escuchar pronunciación</button>`;
  }

  document.getElementById('exercise-body').innerHTML = `
    <div class="exercise-card fade-in">
      <div class="label">Ejercicio</div>
      <div class="content">${ex.content}</div>
      <div class="desc">${ex.desc}</div>
      ${ex.tip ? `<div class="tip-box">💡 ${ex.tip}</div>` : ''}
    </div>
    ${extraHTML}
    <div style="height:12px"></div>
    <button class="btn btn-green" onclick="${isLast ? 'finishCategory()' : 'nextExercise()'}" id="next-btn" ${ex.type === 'repeat' ? 'style="opacity:0.4" disabled id="next-rep-btn"' : ''}>
      ${isLast ? '✅ Completar categoría' : 'Siguiente →'}
    </button>
    <button class="btn btn-secondary" style="margin-top:10px" onclick="navigate('exercises')">← Volver</button>
  `;

  if (ex.type === 'repeat') {
    window._repCount = 0;
    window._repTarget = ex.reps;
  }
}

function addRep(target) {
  window._repCount = (window._repCount || 0) + 1;
  document.getElementById('rep-counter').textContent = window._repCount;
  if (window._repCount >= target) {
    const btn = document.getElementById('next-rep-btn');
    if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
  }
}

let timerRunning = false;
let timerDuration = 0;

function toggleTimer(duration) {
  if (timerRunning) {
    clearTimer();
    document.getElementById('timer-btn').textContent = '▶ Reiniciar';
    timerRunning = false;
  } else {
    timerDuration = duration;
    timerRunning = true;
    state.timerLeft = duration;
    document.getElementById('timer-btn').textContent = '⏸ Pausar';
    state.timerInterval = setInterval(() => {
      state.timerLeft--;
      const disp = document.getElementById('timer-display');
      const fg = document.getElementById('timer-fg');
      if (disp) disp.textContent = state.timerLeft + 's';
      if (fg) fg.setAttribute('stroke-dashoffset', 314 - (314 * (timerDuration - state.timerLeft) / timerDuration));
      if (state.timerLeft <= 0) {
        clearTimer();
        timerRunning = false;
        if (disp) disp.textContent = '✓';
        const btn = document.getElementById('timer-btn');
        if (btn) { btn.textContent = '✓ Completado'; btn.style.background = 'var(--green)'; }
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; }
      }
    }, 1000);
  }
}

function clearTimer() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
}

function nextExercise() {
  clearTimer();
  state.currentExerciseIdx++;
  renderExerciseDetail();
}

function finishCategory() {
  clearTimer();
  const d = getData();
  if (!d.completedToday.includes(state.currentCategory)) {
    d.completedToday.push(state.currentCategory);
    d.totalExercises += EXERCISES[state.currentCategory].length;
    updateStreak();
    saveData(getData());
    const fresh = getData();
    fresh.completedToday = d.completedToday;
    fresh.totalExercises = d.totalExercises;
    saveData(fresh);
  }
  navigate('exercises');
}

// ══════════════════════════════════════════════
//  VOCABULARY
// ══════════════════════════════════════════════

function renderVocab() {
  const d = getData();
  const idx = d.vocabIdx % VOCABULARY.length;
  const v = VOCABULARY[idx];

  document.getElementById('vocab-body').innerHTML = `
    <div class="vocab-card fade-in">
      <div class="vocab-word">${v.word}</div>
      <div class="vocab-type">${v.type}</div>
      <div class="vocab-def">${v.def}</div>
      <div class="vocab-example">${v.ex}</div>
    </div>
    <button class="btn btn-speak" onclick="speak('${v.word}. ${v.def.replace(/'/g, "\\'")}')">🔊 Escuchar</button>
    <div class="vocab-nav">
      <button class="btn btn-secondary" onclick="prevVocab()">← Anterior</button>
      <button class="btn btn-primary" onclick="nextVocab()">Siguiente →</button>
    </div>
    <div style="text-align:center;color:var(--text2);font-size:13px">${idx + 1} / ${VOCABULARY.length} palabras</div>
    <div class="divider"></div>
    <div class="card">
      <div style="font-weight:600;margin-bottom:8px">Practica en voz alta:</div>
      <div style="color:var(--text2);font-size:14px;line-height:1.7">
        1. Di la palabra tres veces despacio.<br>
        2. Úsala en una frase propia.<br>
        3. Explícale la definición a alguien imaginario.
      </div>
    </div>
  `;
}

function nextVocab() {
  const d = getData();
  d.vocabIdx = (d.vocabIdx || 0) + 1;
  saveData(d);
  renderVocab();
}

function prevVocab() {
  const d = getData();
  d.vocabIdx = Math.max(0, (d.vocabIdx || 0) - 1);
  saveData(d);
  renderVocab();
}

// ══════════════════════════════════════════════
//  EXAM
// ══════════════════════════════════════════════

function renderExamHome() {
  const d = getData();
  const lastExam = d.examHistory[d.examHistory.length - 1];
  document.getElementById('exam-body').innerHTML = `
    <div class="exam-hero">
      <div style="font-size:48px;margin-bottom:12px">📝</div>
      <h2>Examen Semanal</h2>
      <p>10 preguntas · Vocabulario y conocimientos</p>
    </div>
    ${lastExam ? `
      <div class="card" style="margin-bottom:16px">
        <div style="font-size:13px;color:var(--text2);margin-bottom:4px">Último examen</div>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div style="font-weight:600">${lastExam.date}</div>
          <div style="font-size:22px;font-weight:800;color:${lastExam.score >= 7 ? 'var(--green)' : lastExam.score >= 5 ? 'var(--yellow)' : 'var(--red)'}">
            ${lastExam.score}/10
          </div>
        </div>
      </div>` : ''}
    <div class="card" style="margin-bottom:16px">
      <div style="font-size:13px;color:var(--text2);margin-bottom:8px">¿Qué incluye el examen?</div>
      <div style="font-size:14px;line-height:1.8;color:var(--text)">
        • Definiciones de vocabulario culto<br>
        • Técnicas de vocalización<br>
        • Conceptos de prosodia<br>
        • Reglas de articulación
      </div>
    </div>
    <button class="btn btn-primary" onclick="startExam()" style="margin-bottom:10px">Comenzar examen</button>
  `;
}

function startExam() {
  const shuffled = [...EXAM_BANK].sort(() => Math.random() - 0.5).slice(0, 10);
  state.examQuestions = shuffled;
  state.examIdx = 0;
  state.examAnswers = [];
  state.examAnswered = false;
  renderExamQuestion();
}

function renderExamQuestion() {
  const q = state.examQuestions[state.examIdx];
  const total = state.examQuestions.length;
  document.getElementById('exam-body').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <span class="badge">${state.examIdx + 1} / ${total}</span>
      <button class="btn btn-secondary" style="width:auto;padding:8px 16px;font-size:13px" onclick="renderExamHome()">Cancelar</button>
    </div>
    <div style="background:var(--bg3);border-radius:8px;height:4px;margin-bottom:20px">
      <div style="background:var(--accent);height:4px;border-radius:8px;width:${((state.examIdx+1)/total)*100}%;transition:width 0.3s"></div>
    </div>
    <div class="question-card fade-in">
      <div class="question-num">Pregunta ${state.examIdx + 1}</div>
      <div class="question-text">${q.q}</div>
      <div class="options" id="options">
        ${q.opts.map((o, i) => `<div class="option" id="opt-${i}" onclick="selectOption(${i})">${o}</div>`).join('')}
      </div>
    </div>
    <button class="btn btn-primary" id="confirm-btn" onclick="confirmAnswer()" style="opacity:0.4" disabled>Confirmar</button>
  `;
  state._selectedOpt = null;
  state.examAnswered = false;
}

function selectOption(idx) {
  if (state.examAnswered) return;
  document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  document.getElementById('opt-' + idx).classList.add('selected');
  state._selectedOpt = idx;
  const btn = document.getElementById('confirm-btn');
  btn.disabled = false; btn.style.opacity = '1';
}

function confirmAnswer() {
  if (state._selectedOpt == null || state.examAnswered) return;
  state.examAnswered = true;
  const q = state.examQuestions[state.examIdx];
  const correct = q.ans === state._selectedOpt;
  state.examAnswers.push(correct);

  document.querySelectorAll('.option').forEach((o, i) => {
    if (i === q.ans) o.classList.add('correct');
    else if (i === state._selectedOpt && !correct) o.classList.add('wrong');
  });

  const btn = document.getElementById('confirm-btn');
  const isLast = state.examIdx === state.examQuestions.length - 1;
  btn.textContent = isLast ? '📊 Ver resultados' : 'Siguiente →';
  btn.onclick = isLast ? showExamResults : () => {
    state.examIdx++;
    state.examAnswered = false;
    renderExamQuestion();
  };
}

function showExamResults() {
  const score = state.examAnswers.filter(Boolean).length;
  const total = state.examAnswers.length;
  const pct = Math.round((score / total) * 100);
  const msg = score >= 9 ? '🏆 ¡Excelente!' : score >= 7 ? '👏 ¡Muy bien!' : score >= 5 ? '💪 Bien, sigue practicando' : '📖 Necesitas repasar más';
  const sub = score >= 9 ? 'Dominas el vocabulario culto.' : score >= 7 ? 'Estás en el camino correcto.' : score >= 5 ? 'Revisa el vocabulario y vuelve a intentarlo.' : 'Dedica más tiempo a los ejercicios diarios.';

  const d = getData();
  d.examHistory.push({ date: new Date().toLocaleDateString('es-ES'), score, total });
  saveData(d);

  document.getElementById('exam-body').innerHTML = `
    <div class="score-display fade-in">
      <div class="score-circle">${score}/${total}</div>
      <div class="score-msg">${msg}</div>
      <div class="score-sub">${sub}</div>
      <div style="margin-top:16px;font-size:14px;color:var(--text2)">${pct}% de respuestas correctas</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
      <div class="stat-card">
        <div class="stat-val" style="color:var(--green)">${score}</div>
        <div class="stat-lbl">Correctas</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" style="color:var(--red)">${total - score}</div>
        <div class="stat-lbl">Incorrectas</div>
      </div>
    </div>
    <button class="btn btn-primary" onclick="startExam()" style="margin-bottom:10px">Repetir examen</button>
    <button class="btn btn-secondary" onclick="renderExamHome()">← Volver</button>
  `;
}

// ══════════════════════════════════════════════
//  PROGRESS
// ══════════════════════════════════════════════

function renderProgress() {
  const d = getData();
  const examCount = d.examHistory.length;
  const bestScore = examCount ? Math.max(...d.examHistory.map(e => e.score)) : '-';
  const avgScore = examCount ? (d.examHistory.reduce((a, e) => a + e.score, 0) / examCount).toFixed(1) : '-';

  document.getElementById('progress-body').innerHTML = `
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-val">${d.streak}</div>
        <div class="stat-lbl">Días seguidos</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${d.totalExercises || 0}</div>
        <div class="stat-lbl">Ejercicios hechos</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${examCount}</div>
        <div class="stat-lbl">Exámenes hechos</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${bestScore !== '-' ? bestScore + '/10' : '-'}</div>
        <div class="stat-lbl">Mejor nota</div>
      </div>
    </div>
    <div class="card">
      <div style="font-weight:600;margin-bottom:12px">Historial de exámenes</div>
      ${examCount === 0
        ? '<div style="color:var(--text2);font-size:14px">Aún no has realizado ningún examen.</div>'
        : d.examHistory.slice().reverse().map(e => `
          <div class="history-item">
            <div class="history-date">${e.date}</div>
            <div class="history-score" style="color:${e.score >= 7 ? 'var(--green)' : e.score >= 5 ? 'var(--yellow)' : 'var(--red)'}">
              ${e.score}/${e.total}
            </div>
          </div>`).join('')
      }
    </div>
    ${examCount > 0 ? `<div class="card"><div style="font-weight:600;margin-bottom:4px">Promedio general</div><div style="font-size:28px;font-weight:800;color:var(--accent2)">${avgScore}/10</div></div>` : ''}
    <button class="btn btn-secondary" onclick="if(confirm('¿Borrar todo el progreso?')){localStorage.removeItem('vozData');renderProgress();}">Reiniciar progreso</button>
  `;
}

// ══════════════════════════════════════════════
//  SPEECH
// ══════════════════════════════════════════════

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/['"\\]/g, ''));
  u.lang = 'es-ES';
  u.rate = 0.85;
  u.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith('es'));
  if (esVoice) u.voice = esVoice;
  window.speechSynthesis.speak(u);
}

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════

window.addEventListener('load', () => {
  updateStreak();
  navigate('home');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  // Pre-load voices
  window.speechSynthesis && window.speechSynthesis.getVoices();
});

// Expose to HTML
window.navigate = navigate;
window.openCategory = openCategory;
window.nextExercise = nextExercise;
window.finishCategory = finishCategory;
window.toggleTimer = toggleTimer;
window.addRep = addRep;
window.speak = speak;
window.nextVocab = nextVocab;
window.prevVocab = prevVocab;
window.startExam = startExam;
window.selectOption = selectOption;
window.confirmAnswer = confirmAnswer;
window.showExamResults = showExamResults;
window.renderExamHome = renderExamHome;
window.renderProgress = renderProgress;
