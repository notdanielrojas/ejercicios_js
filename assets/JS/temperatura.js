// Selecciona los elementos de entrada para Celsius y Fahrenheit
const inputCelsius = document.getElementById("input-1");
const inputFahrenheit = document.getElementById("input-2");
const btnCalculadora = document.getElementById("btn-calculadora"); // Selecciona el botón para mostrar la calculadora
const btnOtraPagina = document.getElementById("btn-otra-pagina"); // Selecciona el botón para mostrar otra página
const calculadora = document.querySelector(".calculadora"); // Selecciona el contenedor de la calculadora
const otraPagina = document.querySelector(".otra-pagina"); // Selecciona el contenedor de la otra página

// Agrega un event listener al campo de entrada Celsius
inputCelsius.addEventListener("input", () => {
  // Convierte el valor del campo de entrada a un número de punto flotante
  const celsius = parseFloat(inputCelsius.value);
  // Convierte Celsius a Fahrenheit utilizando la función definida
  const fahrenheit = celsiusToFahrenheit(celsius);
  // Muestra el valor convertido en el campo de entrada Fahrenheit, redondeado a 0 decimales
  inputFahrenheit.value = fahrenheit.toFixed(0);
});

// Agrega un event listener al campo de entrada Fahrenheit
inputFahrenheit.addEventListener("input", () => {
  // Convierte el valor del campo de entrada a un número de punto flotante
  const fahrenheit = parseFloat(inputFahrenheit.value);
  // Convierte Fahrenheit a Celsius utilizando la función definida
  const celsius = fahrenheitToCelsius(fahrenheit);
  // Muestra el valor convertido en el campo de entrada Celsius, redondeado a 0 decimales
  inputCelsius.value = celsius.toFixed(0);
});

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Función para convertir Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
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
