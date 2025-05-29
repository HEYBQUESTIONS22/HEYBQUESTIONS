
const categories = {
  'La Previa': [
    'Hazle un striptease lento y sensual',
    'Besa su cuello durante 10 segundos',
    'Susurra lo que quieres hacerle al oído',
    'Mírala fijamente mientras te muerdes el labio',
    'Hazle un masaje con aceite por todo el cuerpo'
  ],
  'Poses': [
    'Vaquera Invertida', 'La Carretilla', 'Piernas en V',
    'Perrito de Lado', 'De Pie Contra la Pared',
    'Flor Abierta', '69 Lateral', 'El Columpio',
    'La Montaña', 'Silla Ardiente', 'El Ángel', 'La Ola',
    'Misionero Profundo', 'La Sorpresa', 'Cucharita Sexy',
    'La Amazona', 'Espalda Curva', 'Cruz de Fuego',
    'Trono del Placer', 'Péndulo Ardiente'
  ],
  'Románticas': ['Dile tres cosas que amas de ella', 'Bésala durante 1 minuto sin parar'],
  'Picantes': ['Lame su oreja', 'Haz un reto sin ropa']
};

let currentCategory = [];
let currentIndex = 0;

function startCategory(cat) {
  currentCategory = categories[cat];
  currentIndex = 0;
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("game-container").classList.remove("hidden");
  document.getElementById("card").innerText = "Presiona para comenzar";
}

function goBack() {
  document.getElementById("game-container").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}

document.getElementById("card").addEventListener("click", () => {
  if (currentCategory.length > 0) {
    const randomIndex = Math.floor(Math.random() * currentCategory.length);
    document.getElementById("card").innerText = currentCategory[randomIndex];
  }
});
