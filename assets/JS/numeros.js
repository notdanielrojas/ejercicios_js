// Obtener referencia a los elementos del DOM
const input1 = document.getElementById("input-1");
const btnChequear = document.getElementById("chequear");
const resultado = document.getElementById("valor");
const btnCalculadora = document.getElementById("btn-calculadora"); // Selecciona el botón para mostrar la calculadora
const btnOtraPagina = document.getElementById("btn-otra-pagina"); // Selecciona el botón para mostrar otra página
const calculadora = document.querySelector(".calculadora"); // Selecciona el contenedor de la calculadora
const otraPagina = document.querySelector(".otra-pagina"); // Selecciona el contenedor de la otra página

// Agregar un event listener al botón "chequear" para ejecutar la función chequear cuando se haga clic en él
btnChequear.addEventListener("click", chequear);

// Definir la función chequear
function chequear() {
  // Obtener el valor ingresado en el input y convertirlo a un número entero
  const operacion = parseInt(input1.value);

  // Verificar si el número ingresado es par o impar y mostrar el resultado en el elemento con id "valor"
  if (operacion % 2 === 0) {
    resultado.innerHTML = "Es un número par.";
  } else {
    resultado.innerHTML = "Es un número impar.";
  }

  // No está claro para qué se está utilizando la variable "html" aquí, por lo que la he dejado como está.
}

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
