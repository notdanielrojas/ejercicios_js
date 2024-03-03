const btnCalculadora = document.getElementById("btn-calculadora"); // Selecciona el botón para mostrar la calculadora
const btnOtraPagina = document.getElementById("btn-otra-pagina"); // Selecciona el botón para mostrar otra página
const calculadora = document.querySelector(".calculadora"); // Selecciona el contenedor de la calculadora
const otraPagina = document.querySelector(".otra-pagina"); // Selecciona el contenedor de la otra página

// Genera un número aleatorio entre 1 y 999 para que el usuario adivine
const numeroAleatorio = Math.floor(Math.random() * 999) + 1;

// Función para verificar la suposición del usuario
function verificarAdivinanza() {
  // Obtiene el valor seleccionado por el usuario
  const valor1 = parseInt(document.getElementById("value-1").value);
  const valor2 = parseInt(document.getElementById("value-2").value);
  const valor3 = parseInt(document.getElementById("value-3").value);
  const suposicionUsuario = valor1 * 100 + valor2 * 10 + valor3;

  // Compara la suposición del usuario con el número aleatorio
  if (suposicionUsuario === numeroAleatorio) {
    document.getElementById("resultado").textContent =
      "¡Felicidades! ¡Has adivinado el número!";
  } else if (suposicionUsuario < numeroAleatorio) {
    document.getElementById("resultado").textContent =
      "El número es mayor. ¡Inténtalo de nuevo!";
  } else {
    document.getElementById("resultado").textContent =
      "El número es menor. ¡Inténtalo de nuevo!";
  }
}

// Agrega un event listener al botón de verificar
document
  .getElementById("verificar")
  .addEventListener("click", verificarAdivinanza);

// Agrega un event listener al botón de verificar
document
  .getElementById("verificar")
  .addEventListener("click", verificarAdivinanza);

// Agregar un event listener al botón de la calculadora
btnCalculadora.addEventListener("click", () => {
  // Mostrar la calculadora y ocultar la otra página
  calculadora.style.display = "block"; // Muestra la calculadora
  otraPagina.style.display = "none"; // Oculta la otra página
});

// Agregar un event listener al botón de la otra página
btnOtraPagina.addEventListener("click", () => {
  // Mostrar la otra página y ocultar la calculadora
  calculadora.style.display = "none"; // Oculta la calculadora
  otraPagina.style.display = "block"; // Muestra la otra página
});
