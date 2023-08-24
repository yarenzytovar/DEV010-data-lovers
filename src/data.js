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
