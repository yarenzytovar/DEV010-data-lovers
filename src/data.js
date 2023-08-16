// FUNCIONES DE ORDENAR Y FILTRAR

import breakingbad from "./data/breakingbad/breakingbad"

//export const example = () => {
//return 'example';
//};
export default ordenar 
  //return 'OMG';
//};
//FUNCION DE ORDENAR
//sortData(data, sortby, sortOrder)

//sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

breakingbad.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
  
});
