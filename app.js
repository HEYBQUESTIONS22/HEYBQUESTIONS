const questions = {
  romanticas: [
    "¿Qué es lo que más te gusta de mí físicamente?",
    "Descríbeme tu cita romántica ideal conmigo.",
    "¿Qué recuerdo romántico te gustaría crear conmigo?"
  ],
  picantes: [
    "¿Qué parte de tu cuerpo te gusta que bese más?",
    "Mencióname un lugar donde te gustaría hacerlo conmigo.",
    "¿Te atreverías a usar juguetes? ¿Cuál?"
  ],
  laPrevia: [
    "Hazle un masaje con aceite durante 2 minutos.",
    "Hazle un striptease lento y provocador.",
    "Lame algo dulce en su cuello o abdomen.",
    "Usa una venda y juega con sus sentidos.",
    "Hazle cosquillas suaves con una pluma o tela."
  ]
};

const poses = [
  { name: "Vaquera Invertida", image: "images/vaquera-invertida.jpg" },
  { name: "La Carretilla", image: "images/carretilla.jpg" },
  { name: "Piernas en V", image: "images/piernas-v.jpg" },
  { name: "El Tornado", image: "images/tornado.jpg" },
  { name: "El Trapecio", image: "images/trapecio.jpg" }
];

let currentCategory = "";
let card = document.getElementById("card");
let music = document.getElementById("background-music");

document.getElementById("toggle-music").onclick = () => {
  if (music.paused) {
    music.play();
    document.getElementById("toggle-music").textContent = "🔇";
  } else {
    music.pause();
    document.getElementById("toggle-music").textContent = "🔊";
  }
};

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const diceSection = document.getElementById("dice-container");
const poseImage = document.getElementById("pose-image");
const poseName = document.getElementById("pose-name");
const diceAnim = document.getElementById("dice-animation");

document.getElementById("back-button").onclick = () => {
  game.style.display = "none";
  menu.style.display = "block";
};

document.getElementById("back-to-menu").onclick = () => {
  diceSection.style.display = "none";
  menu.style.display = "block";
};

document.getElementById("categories").innerHTML = `
  <li onclick="selectCategory('romanticas')">💖 Románticas</li>
  <li onclick="selectCategory('picantes')">🔥 Picantes</li>
  <li onclick="selectCategory('laPrevia')">🎬 La Previa</li>
  <li onclick="startDice()">🎲 Dados (Poses)</li>
`;

function selectCategory(category) {
  currentCategory = category;
  menu.style.display = "none";
  game.style.display = "block";
  showRandomQuestion();
}

function showRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions[currentCategory].length);
  card.classList.remove("folio");
  void card.offsetWidth; // reinicia animación
  card.textContent = questions[currentCategory][randomIndex];
  card.classList.add("folio");
}

card.onclick = showRandomQuestion;

function startDice() {
  menu.style.display = "none";
  diceSection.style.display = "block";
  rollDice();
}

function rollDice() {
  poseImage.classList.add("hidden");
  poseName.textContent = "";
  diceAnim.classList.remove("hidden");
  const diceSound = new Audio("sounds/dice.mp3");
  diceSound.play();

  setTimeout(() => {
    const random = poses[Math.floor(Math.random() * poses.length)];
    diceAnim.classList.add("hidden");
    poseImage.src = random.image;
    poseImage.classList.remove("hidden");
    poseName.textContent = random.name;
  }, 2000);
}
