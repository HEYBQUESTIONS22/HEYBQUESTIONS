const cards = [
  "¿Qué fue lo primero que te atrajo de mí?",
  "¿Qué parte de mi cuerpo te gusta más?",
  "¿Qué momento nuestro te ha marcado más?",
  "¿Cuál ha sido nuestra mejor noche juntos?",
  "¿Hay algo que nunca te he dicho y debería saber?",
  "¿Qué fantasía te gustaría cumplir conmigo?",
  "¿Cómo te sientes cuando estamos separados?",
  "¿Qué te hace sentir más amado(a) por mí?",
  "¿Qué promesa me harías hoy mismo?",
  "¿Cómo imaginas nuestra vida dentro de 5 años?"
];

let currentIndex = 0;
const root = document.getElementById("root");

function showCard(index) {
  const card = document.createElement("div");
  card.className = "card animate";
  card.innerText = cards[index];
  card.onclick = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    root.innerHTML = '';
    showCard(currentIndex);
  };
  const container = document.createElement("div");
  container.className = "card-container";
  container.appendChild(card);
  root.appendChild(container);
}

showCard(currentIndex);