
const preguntas = {
  romanticas: [
    "¿Qué fue lo primero que te atrajo de mí?",
    "¿Qué parte de mi cuerpo te gusta más?",
    "¿Qué momento nuestro te ha marcado más?",
    "¿Qué promesa me harías hoy?",
    "¿Qué canción te recuerda a mí?"
  ],
  hot: [
    "¿Te gustaría experimentar algo nuevo en la cama?",
    "¿Qué prenda mía te parece más sexy?",
    "¿Dónde te gustaría que te besara ahora mismo?",
    "¿Cuál es tu fantasía pendiente conmigo?",
    "¿Prefieres dulce o intenso en la cama?"
  ],
  reflexivas: [
    "¿Qué has aprendido de nuestra relación?",
    "¿Qué te da miedo perder?",
    "¿Cómo manejas el enojo en pareja?",
    "¿Qué te gustaría cambiar de ti para mejorar juntos?",
    "¿Qué sueñas lograr conmigo a largo plazo?"
  ],
  la_previa: [
    "Hazme un striptease de 30 segundos.",
    "Mándame un mensaje provocador como si estuviéramos lejos.",
    "Lámeme una parte del cuerpo que no esperaría.",
    "Susúrrame al oído una fantasía tuya.",
    "Hazme un masaje lento, sin hablar.",
    "Dime tres cosas que te gustaría que te haga esta noche.",
    "Mírame a los ojos durante 30 segundos sin hablar y bésame.",
    "Pon tu canción favorita para el momento y báilala conmigo.",
    "Juguemos a no tocarnos durante 2 minutos... si perdemos, castigo.",
    "Hazme una pregunta que nunca te has atrevido a hacer en la cama."
  ],
  dados: [
    "📌 Misionero 🔥",
    "📌 Perrito 🔥",
    "📌 Vaquera 🔥",
    "📌 Vaquera invertida 🔥",
    "📌 Cucharita 🔥",
    "📌 Sentados frente a frente 🔥",
    "📌 De pie en la ducha 🔥",
    "📌 En la mesa 🔥",
    "📌 Silla caliente 🔥",
    "📌 El puente 🔥",
    "📌 La carretilla 🔥",
    "📌 Pierna al hombro 🔥",
    "📌 Sentado tú arriba 🔥",
    "📌 Flor de loto 🔥",
    "📌 Lateral profundo 🔥",
    "📌 Contra la pared 🔥",
    "📌 Piernas en V 🔥",
    "📌 Reversa sensual 🔥",
    "📌 Giro loco 🔥",
    "📌 Control total 🔥"
  ]
};

let currentCategory = null;
let currentIndex = 0;
const root = document.getElementById("root");

function showMenu() {
  root.innerHTML = `
    <div class="menu-buttons">
      <button onclick="setCategory('romanticas')">Románticas</button>
      <button onclick="setCategory('hot')">Hot</button>
      <button onclick="setCategory('reflexivas')">Reflexivas</button>
      <button onclick="setCategory('la_previa')">🔥 La Previa 🔥</button>
      <button onclick="setCategory('dados')">🎲 Poses 🔥</button>
    </div>
  `;
}

function setCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  renderCard();
}

function goBackToMenu() {
  currentCategory = null;
  showMenu();
}

function renderCard() {
  const question = preguntas[currentCategory][currentIndex];
  root.innerHTML = `
    <div class="card-container">
      <div class="card animate" onclick="nextCard()">
        <span>${question}</span>
      </div>
      <button class="back-button" onclick="goBackToMenu()">← Volver</button>
    </div>
  `;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % preguntas[currentCategory].length;
  renderCard();
}

// Inicializa mostrando el menú
showMenu();
