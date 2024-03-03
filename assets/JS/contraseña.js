// Selección de elementos del DOM
const inputContraseña = document.getElementById("input-1");
const resultado = document.querySelector(".resultado p");

// Agregar un event listener al campo de contraseña
inputContraseña.addEventListener(verificarContraseña);

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
