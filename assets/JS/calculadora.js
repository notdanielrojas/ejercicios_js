// Selección de elementos del DOM
const input1 = document.getElementById("input-1"); // Selecciona el primer campo de entrada
const operador = document.getElementById("operador"); // Selecciona el select de operadores
const input2 = document.getElementById("input-2"); // Selecciona el segundo campo de entrada

// Agregar un event listener al botón de calcular
btnCalcular.addEventListener("click", calcular);

// Función para realizar el cálculo
function calcular() {
  // Obtener la operación y los operandos
  const operacion = operador.value; // Obtiene el valor seleccionado en el select de operadores
  const op1 = parseInt(input1.value); // Obtiene el valor del primer campo de entrada y lo convierte a entero
  const op2 = parseInt(input2.value); // Obtiene el valor del segundo campo de entrada y lo convierte a entero

  // Realizar la operación según el operador seleccionado
  if (
    operacion === "+" || // Si la operación es suma
    operacion === "-" || // Si la operación es resta
    operacion === "x" || // Si la operación es multiplicación
    operacion === "/" // Si la operación es división
  ) {
    let resultadoOperacion; // Declara una variable para almacenar el resultado de la operación
    switch (
      operacion // Evalúa el valor del operador
    ) {
      case "+": // Si el operador es suma
        resultadoOperacion = op1 + op2; // Realiza la suma de los operandos
        break; // Sale del switch
      case "-": // Si el operador es resta
        resultadoOperacion = op1 - op2; // Realiza la resta de los operandos
        break; // Sale del switch
      case "x": // Si el operador es multiplicación
        resultadoOperacion = op1 * op2; // Realiza la multiplicación de los operandos
        break; // Sale del switch
      case "/": // Si el operador es división
        resultadoOperacion = op1 / op2; // Realiza la división de los operandos
        break; // Sale del switch
    }

    // Mostrar el resultado en la interfaz
    resultado.textContent = resultadoOperacion; // Muestra el resultado en el elemento de resultado
  } else {
    // Mostrar un mensaje de error si la operación no es válida
    resultado.textContent = "Operación no válida"; // Muestra un mensaje de error en el elemento de resultado
  }
}
