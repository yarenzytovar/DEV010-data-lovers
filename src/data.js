// FUNCIONES DE ORDENAR Y FILTRAR

export const funcionDeOrdenarDatos = (orden, data) => {
  if(orden === ''){return false}
  const dataOrdenada = data.sort((a, b) => {
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

export const filtroCategoriaSerie = (serie, datos) => {
  if(serie === ''){return false}
  const serieFiltro = datos.filter((personaje) => 
    personaje.category.includes(serie));
  return serieFiltro;
};

  
export const promedioBreakingBad = (personajes) => {
  if(personajes === " "){return false}
  const promedios = personajes.map(personaje => {const suma = personaje.appearance.reduce((total, temporada) => total + temporada, 0);
    const promedio = ((suma/ 5)*100/3).toFixed();
    return {...personaje, promedio};
  });
  return promedios};
