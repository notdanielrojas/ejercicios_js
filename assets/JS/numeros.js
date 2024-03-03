// Obtener referencia a los elementos del DOM
const input1 = document.getElementById("input-1");
const btnChequear = document.getElementById("chequear");
const resultado = document.getElementById("valor");

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
