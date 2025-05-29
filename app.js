
const categories = {
  previa: [
    "Hazle un masaje con aceite sensual",
    "Susurra lo que quieres hacerle al oído",
    "Besa lentamente desde su cuello hasta el ombligo",
    "Usa una venda en los ojos y guía el placer",
    "Muerde suavemente sus labios sin avisar"
  ],
  romanticas: [
    "Describe tu cita romántica ideal con esta persona",
    "Di 3 cosas que amas de quien tienes enfrente",
    "Recuerda tu primer beso con detalles",
    "Hazle una promesa sexy",
    "Baila lento abrazándola sin música"
  ],
  picantes: [
    "Envía una nota de voz caliente",
    "Describe tu fantasía más salvaje",
    "Haz un striptease improvisado",
    "Recrea una escena de película caliente",
    "Dilo sin decirlo con gestos: lo que quieres hacerle ahora"
  ],
  poses: [
    { name: "Vaquera Invertida", image: "🔥" },
    { name: "La Carretilla", image: "💥" },
    { name: "Piernas en V", image: "💫" },
    { name: "De Lado Profundo", image: "🌀" },
    { name: "El Delfín", image: "🌊" }
  ]
};

let currentCategory = "";

function showMenu() {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("game").classList.add("hidden");
  document.getElementById("roll-dice").classList.add("hidden");
}

function startCategory(category) {
  currentCategory = category;
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  const card = document.getElementById("card");
  card.innerHTML = category === "poses" ? "Presiona 🎲 para tirar el dado" : getRandomItem(categories[category]);
  document.getElementById("roll-dice").classList.toggle("hidden", category !== "poses");
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function rollDice() {
  const card = document.getElementById("card");
  card.innerHTML = "🎲 Tirando dados...";
  setTimeout(() => {
    const pose = getRandomItem(categories.poses);
    card.innerHTML = `<h2>${pose.name}</h2><div style="font-size:5rem;">${pose.image}</div>`;
  }, 1500);
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");
  if (music.paused) {
    music.play();
    toggle.textContent = "🔊";
  } else {
    music.pause();
    toggle.textContent = "🔇";
  }
}
