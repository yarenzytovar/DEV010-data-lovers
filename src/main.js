//import ordenar from './data.js';
import breakingbad from "./data/breakingbad/breakingbad.js";
import { filtroCategoriaSerie, funcionDeOrdenarDatos,promedioBreakingBad} from "./data.js";
//import { filtradoSerie } from './data.js';
const datosPersonajes = breakingbad;

//CONSTANTES PARA ELEMENTOS DEL HTML
const personajesGeneral = document.getElementById("cartasDePersonajes");
const informacionPersonaje = document.getElementById("cuadroPersonaje");
const ordenAlfabetoeAsc = document.getElementById("orden");
const selectSerie = document.getElementById("serie");
const btnPromedio = document.getElementById("promedioboton");

//FUNCION PARA MOSTRAR LAS IMAGENES Y PERSONAJES DE LOS PERSONAJES EN EL HTML
function mostrarTarjeta(personajes) {
  const tarjeta = document.createElement("div"); //CONSTANTE PARA CREAR DIVS Y GUARDARLO BAJO EL NOMBRE TARJETA
  tarjeta.classList.add("personajes-tarjeta"); //AGREGAR CLASS A LOS DIVS CREADOS, CLASS='personajes-tarjetas'
  tarjeta.innerHTML = `
    <img src="${personajes.img}" alt="${personajes.name}" />
    <p>${personajes.name}</p>
  `; //MOSTRAR TARJETA EN HTML CON INTERPOLACION DE CADENAS. ALT POR SI NO SE VE LA IMAGEN SE PUEDA VER EL NOMBRE
  tarjeta.addEventListener("click", () => mostrarInfo(personajes)); //DESPUES DEL EVENTO SE REALIZA LA FUNCIÓN mostrarInfo
  return tarjeta;
}

//FUNCION PARA MOSTRAR LA INFORMACION DEL PERSONAJE
function mostrarInfo(personajes) {
  const informacion = document.createElement("div"); //CONSTANTE PARA CREAR DIVS Y GUARDARLO BAJO EL NOMBRE informacion
  informacion.classList.add("divInfoPersonaje"); //AGREGAR CLASS A LOS DIVS CREADOS, CLASS= 'divInfoPersonaje'
  informacion.innerHTML = `
    <h2>${personajes.name}</h2>
    <p><strong>Birthday:</strong> ${personajes.birthday}</p>
    <p><strong>Occupation:</strong> ${personajes.occupation.join(", ")}</p>
    <p><strong>Nickname:</strong> ${personajes.nickname}</p>
    <p><strong>Portrayed:</strong> ${personajes.portrayed}</p>  
    <p><strong>Status:</strong> ${personajes.status}</p> 
    <p><strong>Appearance:</strong> ${personajes.appearance.join(", ")}</p>
    <p><strong>Category:</strong> ${personajes.category}</p>
    <p><strong>Better Call Saul appearance:</strong> ${personajes.better_call_saul_appearance.join(
    ", "
  )}</p>
  `; //MOSTRAR TARJETA EN HTML CON INTERPOLACION DE CADENAS. ALT POR SI NO SE VE LA IMAGEN SE PUEDA VER EL NOMBRE

  informacionPersonaje.innerHTML = "";
  informacionPersonaje.append(informacion);
  informacionPersonaje.classList.add("claseInfoPersonaje");
}

//FOR OF PARA RECORRER LOS VALORES DE LA PROPIEDAD
for (const personajes of datosPersonajes.breaking_bad) {
  //ITERAR POR CADA ELEMENTO DE datosPersonajes. CONST personajes PARA REPRESENTAR CADA ITERACION
  const tarjeta = mostrarTarjeta(personajes); // POR CADA BUBLE SE LLAMA A LA FUNCION mostrarTarjeta
  personajesGeneral.append(tarjeta); //LA TARJETA CREADA SE AGREGA A personajesGeneral QUE CONTIENE EL ID DEL DIV EN EL HTML
}

//EVENTO DE CLICK PARA REMOVER LA CLASE Y LA INFORMACION
informacionPersonaje.addEventListener("click", () => {
  informacionPersonaje.classList.remove("claseInfoPersonaje");
});

//EVENTO PARA LA FUNCIÓN DE ORDENAR EN EL DATA.JS
ordenAlfabetoeAsc.addEventListener("change", (event) => {
  //CHANGE SE USA PARA SELECT
  //console.log(event.target.value);
  const orden = event.target.value;
  const dataOrdenada = funcionDeOrdenarDatos(
    orden,
    datosPersonajes.breaking_bad
  );

  personajesGeneral.innerHTML = "";
  for (const personajes of dataOrdenada) {
    const tarjeta = mostrarTarjeta(personajes);
    personajesGeneral.append(tarjeta);
  }
});

selectSerie.addEventListener("change", (event) => {
  const serie = event.target.value;
  const serieSeleccionada = filtroCategoriaSerie(serie,datosPersonajes.breaking_bad);
  personajesGeneral.innerHTML = "";
  for (const personajes of serieSeleccionada) {
    const tarjeta = mostrarTarjeta(personajes);
    personajesGeneral.append(tarjeta);
    
  }
});

btnPromedio.addEventListener("click", ()=> {
  const promedioPersonajesBreakingBad = promedioBreakingBad(datosPersonajes.breaking_bad);

  personajesGeneral.innerHTML = "";
 
  for (const personaje of promedioPersonajesBreakingBad){
    const promedioSerie = document.createElement("div");
    promedioSerie.classList.add("promedioLista");
    promedioSerie.innerHTML = `
     <h2>${personaje.name}</h2>
     <p>Percentage appearance in Breaking Bad:
     <h2><strong>${personaje.promedio}%</strong></h2></p>
     `;
    personajesGeneral.appendChild(promedioSerie)
  }
});




//   const promedioApariciones = listaPromedios(datosPersonajes.breaking_bad);
  
//   personajesGeneral.innerHTML = "";

//   for (const prom of promedioApariciones) {
//     const promedioSerie = document.createElement("div");
//     promedioSerie.classList.add("promedioLista");
//     promedioSerie.innerHTML = `
//     <h2>${prom.personaje}</h2>
//     <p>Average appearance in Breaking Bad:
//     <h2><strong>${prom.promedio}</strong></h2></p>
//     `;

//     personajesGeneral.append(promedioSerie);


//   }
// }
// );























// const promediosPersonajes = document.createElement("div"); //CONSTANTE PARA CREAR DIVS Y GUARDARLO BAJO EL NOMBRE informacion
// promediosPersonajes.classList.add("divPromPersonaje"); //AGREGAR CLASS A LOS DIVS CREADOS, CLASS= 'divInfoPersonaje'
// promediosPersonajes.innerHTML = `
// <h2>${personaje.name}</h2>
// <p><strong>Promedio:</strong> ${promedio}</p>`;
// console.log(promediosPersonajes)

// for (const personajes of promedio) {
//   const tarjeta = mostrarTarjeta(personajes);
//   personajesGeneral.append(tarjeta);
// }

//let precios = [100, 200, 500];
//for (let valor of precios) {
//const length= precios.length
//console.log(length);
//const promedio= valor/length;
//console.log(promedio);


//console.log(`1.array de los personajes ${arrayNumero}`);
//console.log(`suma del array de los personajes ${suma}`);
//console.log(`nombre ${personaje.name} promedio ${promedio}`);
//personajesGeneral.innerHTML = "";