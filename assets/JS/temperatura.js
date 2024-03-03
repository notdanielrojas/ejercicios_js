// Selecciona los elementos de entrada para Celsius y Fahrenheit
const inputCelsius = document.getElementById("input-1");
const inputFahrenheit = document.getElementById("input-2");

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
