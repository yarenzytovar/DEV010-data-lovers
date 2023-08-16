import breakingbad from './data/breakingbad/breakingbad.js';

//CONSTANTE PARA GUARDAR TODA LA DATA
const datosPersonajes = breakingbad

//CONSTANTES PARA ELEMENTOS DEL HTML
const personajesGeneral = document.getElementById('cartasDePersonajes');
const informacionPersonaje = document.getElementById('cuadroPersonaje');


//FUNCION PARA MOSTRAR LAS IMAGENES Y PERSONAJES DE LOS PERSONAJES EN EL HTML
function mostrarTarjeta(personajes) {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('personajes-tarjeta');
  tarjeta.innerHTML = `
    <img src="${personajes.img}" alt="${personajes.name}" />
    <p>${personajes.name}</p>
  `;
  tarjeta.addEventListener('click', () => mostrarInfo(personajes));
  return tarjeta;
}

//FUNCION PARA MOSTRAR LA INFORMACION DEL PERSONAJE
function mostrarInfo(personajes) {
  const informacion = document.createElement('div');
  informacion.classList.add('divInfoPersonaje');
  informacion.innerHTML = `
    <h2>${personajes.name}</h2>
    <p><strong>Birthday:</strong> ${personajes.birthday}</p>
    <p><strong>Occupation:</strong> ${personajes.occupation.join(', ')}</p>
    <p><strong>Nickname:</strong> ${personajes.nickname}</p>
    <p><strong>Portrayed:</strong> ${personajes.portrayed}</p>   
  `; 

  informacionPersonaje.innerHTML = '';
  informacionPersonaje.append(informacion);
  informacionPersonaje.classList.add('claseInfoPersonaje');
}

//FOR OF PARA RECORRER LOS VALORES DE LA PROPIEDAD
for (const personajes of datosPersonajes.breaking_bad) {
  const tarjeta = mostrarTarjeta(personajes);
  personajesGeneral.append(tarjeta);
}

//EVENTO DE CLICK PARA REMOVER LA CLASE Y LA INFORMACION
informacionPersonaje.addEventListener('click', () => {
  informacionPersonaje.classList.remove('claseInfoPersonaje');
  informacionPersonaje.innerHTML = '';
});
