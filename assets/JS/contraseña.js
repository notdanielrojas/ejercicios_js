// Selección de elementos del DOM
const inputContraseña = document.getElementById("input-1");
const resultado = document.querySelector(".resultado p");
const btnCalculadora = document.getElementById("btn-calculadora"); // Selecciona el botón para mostrar la calculadora
const btnOtraPagina = document.getElementById("btn-otra-pagina"); // Selecciona el botón para mostrar otra página
const calculadora = document.querySelector(".calculadora"); // Selecciona el contenedor de la calculadora
const otraPagina = document.querySelector(".otra-pagina"); // Selecciona el contenedor de la otra página

// Agregar un event listener al campo de contraseña
inputContraseña.addEventListener("blur", verificarContraseña);

// Función para verificar la contraseña
function verificarContraseña() {
  const contraseña = inputContraseña.value;

  // Criterios para una contraseña válida
  const longitudMinima = 8;
  const tieneCaracterEspecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
    contraseña
  );
  const tieneMayuscula = /[A-Z]/.test(contraseña);
  const tieneMinuscula = /[a-z]/.test(contraseña);
  const tieneNumero = /[0-9]/.test(contraseña);

  // Verificar cada criterio
  if (contraseña.length < longitudMinima) {
    mostrarMensaje("La contraseña debe tener al menos 8 caracteres.");
  } else if (!tieneCaracterEspecial) {
    mostrarMensaje(
      "La contraseña debe contener al menos un carácter especial."
    );
  } else if (!tieneMayuscula) {
    mostrarMensaje("La contraseña debe contener al menos una letra mayúscula.");
  } else if (!tieneMinuscula) {
    mostrarMensaje("La contraseña debe contener al menos una letra minúscula.");
  } else if (!tieneNumero) {
    mostrarMensaje("La contraseña debe contener al menos un número.");
  } else {
    mostrarMensaje("La contraseña es válida.");
  }
}

// Función para mostrar el mensaje de resultado
function mostrarMensaje(mensaje) {
  resultado.textContent = mensaje;
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
