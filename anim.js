// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si tuviera la oportunidad", time: 14 },
  { text: "La tomaría más rápido de lo que late un corazon", time: 18 },
  { text: "Si tan solo te viera", time: 22 },
  { text: "Correría hacia ti como si nadie estuviera mirando", time: 28 },
  { text: "Pero es muy difícil llegar hacia Ti", time: 32 },
  { text: "Porque cuando tu ves el sol, yo veo la luna", time: 36 },
  { text: "Masas de agua, millones de nubes", time: 41 },
  { text: "Kilometros de distancia solo para llegar a donde tú estas", time: 45 },
  { text: "Desearía, que no estuvieras tan lejos", time: 49 },
  { text: "Miles de dólares sólo para estar cerca", time: 58 },
  { text: "Pensamientos incontables imaginandote aqui", time: 63 },
  { text: "Desearía que esto no fuera tan difícil", time: 66 },
  { text: "Pero tal vez algún dia podamos romper la distancia", time: 74 },
  { text: "Sé que es difícil,", time: 96 },
  { text: "Para todos entenderlo", time: 100 },
  { text: "Pero tu estas en mi corazón", time: 106 },
  { text: "Aunque parezca que estamos varados", time: 110 },
  { text: "Y desearía poder llegar a tí", time: 114 },
  { text: "Poder vernos cara a cara sin que una pantalla se interponga", time: 118 },
  { text: "Masas de agua, millones de nubes", time: 123 },
  { text: "Kilometros de distancia solo para llegar a donde tú estas", time: 127 },
  { text: "Desearía, que no estuvieras tan lejos", time: 132 },
  { text: "Miles de dólares sólo para estar cerca", time: 140 },
  { text: "Pensamientos incontables imaginandote aqui", time: 144 },
  { text: "Desearía que esto no fuera tan difícil", time: 149 },
  { text: "Pero tal vez algún dia podamos romper la distancia", time: 157 },
  { text: "Nubes, ¿podrian por favor ayudarme?", time: 178 },
  { text: "Necesito ir a verle ahora", time: 183 },
  { text: "Levantenme del suelo", time: 188 },
  { text: "Se que es una locura", time: 190 },
  { text: "Pero tengo lista la maleta a mi lado", time: 192 },
  { text: "Nubes, ¿podrian por favor ayudarme?", time: 196 },
  { text: "Necesito ir a verle ahora", time: 199 },
  { text: "Levantenme del suelo", time: 205 },
  { text: "Se que es una locura", time: 207 },
  { text: "Pero tengo lista la maleta a mi lado", time: 208 },
  { text: "Masas de agua, millones de nubes", time: 216 },
  { text: "Kilometros de distancia solo para llegar a donde tú estas", time: 220 },
  { text: "Desearía, que no estuvieras tan lejos", time: 224 },
  { text: "Miles de dólares sólo para estar cerca", time: 233 },
  { text: "Pensamientos incontables imaginandote aqui", time: 237 },
  { text: "Desearía que esto no fuera tan difícil", time: 241 },
  { text: "Pero tal vez algún dia podamos romper la distancia", time: 249 },
]; 
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 265000);