const preguntas = {
  romanticas: [
    "¿Qué fue lo primero que te atrajo de mí?",
    "¿Qué parte de mi cuerpo te gusta más?",
    "¿Qué momento nuestro te ha marcado más?",
    "¿Qué promesa me harías hoy?",
    "¿Qué canción te recuerda a mí?",
  ],
  hot: [
    "¿Te gustaría experimentar algo nuevo en la cama?",
    "¿Qué prenda mía te parece más sexy?",
    "¿Dónde te gustaría que te besara ahora mismo?",
    "¿Cuál es tu fantasía pendiente conmigo?",
    "¿Prefieres dulce o intenso en la cama?",
  ],
  reflexivas: [
    "¿Qué has aprendido de nuestra relación?",
    "¿Qué te da miedo perder?",
    "¿Cómo manejas el enojo en pareja?",
    "¿Qué te gustaría cambiar de ti para mejorar juntos?",
    "¿Qué sueñas lograr conmigo a largo plazo?",
  ]
};

let currentCategory = 'romanticas';
let currentIndex = 0;
const root = document.getElementById("root");

function setCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  renderCard();
}

function renderCard() {
  root.innerHTML = '';
  const card = document.createElement("div");
  card.className = "card animate";
  const question = preguntas[currentCategory][currentIndex];
  card.innerHTML = `<span>${question}</span>`;
  card.onclick = () => {
    currentIndex = (currentIndex + 1) % preguntas[currentCategory].length;
    renderCard();
  };
  const container = document.createElement("div");
  container.className = "card-container";
  container.appendChild(card);
  root.appendChild(container);
}

renderCard();
