// toda la logica

export function ordenado(laData, tipodeOrdenado){ // obtenemos dos argumentos el primero es la data y el segundo el etipo, (tipo = A->Z oooo Z->A)
  
    // Sort release
    if(tipodeOrdenado=="first"){
      return laData.sort(function(a, b) {
        const dateA = a.release_date.toUpperCase();
        const dateB = b.release_date.toUpperCase();
        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
      
        return 0;
      });
    }else if(tipodeOrdenado=="last") {
      return laData.sort(function(a, b) {
        const dateA = a.release_date.toUpperCase();
        const dateB = b.release_date.toUpperCase();
        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
      
        return 0;
      });
    }

  // Ordenado por orden alfabético
  if(tipodeOrdenado=="primero"){ // validamos si es de la A->Z
  return laData.sort(function(a, b) {
    var nameA = a.title.toUpperCase(); // Esto es clave porque accedemos al titulo de las peliculas y las pasamos a minusculas
    var nameB = b.title.toUpperCase(); // esto tambien es lo mismo que arriba
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
}else if(tipodeOrdenado=="ultimo") {  // Validamos que sea de la Z->A
  return laData.sort(function(a, b) {
    var nameA = a.title.toUpperCase(); // Lo mismo 
    var nameB = b.title.toUpperCase(); // Igual
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
}

}