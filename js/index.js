// Archivo principal de JavaScript para la ejercitación de Consumo de APIs

/* -------------------------------- CONSIGNA 1 -------------------------------- */
// Función encargada de dibujar los datos en el HTML
function renderizarDatosUsuario(datos) {
  // 1. Obtenemos el primer usuario del arreglo 'results'
  const usuario = datos.results[0];

  // 2. Seleccionamos el contenedor HTML donde vamos a insertar los datos
  const tarjeta = document.querySelector('.tarjeta');

  // 3. Extraemos las propiedades que necesitamos
  const fotoPerfil = usuario.picture.large;
  const nombreCompleto = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
  const correo = usuario.email;

  // 4. Insertamos los elementos en la tarjeta usando innerHTML
  tarjeta.innerHTML = `
    <img src="${fotoPerfil}" alt="Foto de ${nombreCompleto}">
    <h2>${nombreCompleto}</h2>
    <p>${correo}</p>
  `;
}


/* -------------------------------- CONSIGNA 2 -------------------------------- */
// Función encargada de pedir los datos a la API
async function cargarUsuario() {
  try {
    // 1. Petición a la API
    const response = await fetch('http://localhost:3000/api/user');
    
    // 2. Respuesta a JSON
    const datos = await response.json();
    
    // 3. Pasamos los datos a la función que los renderiza
    renderizarDatosUsuario(datos);
    
  } catch (error) {
    console.error("Error al obtener los datos de la API:", error);
  }
}


/* -------------------------------- EVENTOS E INICIALIZACIÓN -------------------------------- */
// Seleccionamos el botón por su ID y le agregamos el evento clic
const botonRandom = document.querySelector('#random');
if (botonRandom) {
  botonRandom.addEventListener('click', cargarUsuario);
}

// Llamamos a la función para que se ejecute apenas carga la página
cargarUsuario();