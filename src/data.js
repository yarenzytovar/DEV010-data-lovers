// FUNCIONES DE ORDENAR Y FILTRAR

import breakingbad from "./data/breakingbad/breakingbad.js"
const datosPersonajes = breakingbad;

export const funcionDeOrdenarDatos = (orden) => {
  const dataOrdenada = datosPersonajes.breaking_bad.sort((a, b) => {
    if(orden === 'A-Z'){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    }
      
    
    if (orden === 'Z-A') {
      if(a.name > b.name) { return -1; }
      if(a.name < b.name) { return 1; }
      return 0;
    }
  });
  return dataOrdenada;
}
 
