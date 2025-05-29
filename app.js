let categories = {
  romantic: ["Dile lo que más te enamora de su forma de ser", "Escríbele un mini poema en menos de 1 minuto"],
  spicy: ["Desliza lentamente tu mano por su pierna", "Susúrrale lo que te gustaría hacerle"],
  foreplay: ["Masajea su cuello por 1 minuto", "Ponle música sensual y baila para él/ella"],
  positions: [
    { name: "Vaquera Invertida", image: "images/vaquera_invertida.png" },
    { name: "La Carretilla", image: "images/carretilla.png" }
  ]
};
let currentCategory = null;

function selectCategory(cat) {
  currentCategory = cat;
  document.getElementById('menu').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  showCard();
}

document.getElementById('backButton').onclick = () => {
  document.getElementById('menu').style.display = 'flex';
  document.getElementById('game').style.display = 'none';
};

function showCard() {
  const container = document.getElementById('cardContainer');
  container.innerHTML = '';
  if (currentCategory === 'positions') {
    let item = categories.positions[Math.floor(Math.random() * categories.positions.length)];
    const img = document.createElement('img');
    img.src = item.image;
    img.style.width = "200px";
    const title = document.createElement('h2');
    title.innerText = item.name;
    container.appendChild(title);
    container.appendChild(img);
  } else {
    let msg = categories[currentCategory][Math.floor(Math.random() * categories[currentCategory].length)];
    container.innerText = msg;
  }
}

document.getElementById('musicToggle').onclick = () => {
  let audio = document.getElementById('backgroundMusic');
  if (audio.paused) {
    audio.play();
    document.getElementById('musicToggle').innerText = '🔇';
  } else {
    audio.pause();
    document.getElementById('musicToggle').innerText = '🔊';
  }
};