// ------------ Taller 3 ---------------
//    Variables
const titloSitioWeb = "formulatv"
const nombreSerie = "Loki"
let temporadas = 2
var criticasPositivas = true
const numeroEpisodios = 6

//    Strings
let nombreArticulo ="Capítulos"
console.log(`Estás viendo la sección de ${nombreArticulo} de la serie ${nombreSerie}.`)


//    Funciones

// Función que simula que se cambia de pestaña
function cambiarTab(nuevoTab) {
    console.log(`Cambiando a la pestaña... ${nuevoTab}`)
}
cambiarTab("Reparto");

// Función que simula el buscador
function buscarInf(query){
  if(query.length > 0){
    return `Buscando los resultados de "${query}"...`;
  }else {
    return `No se ha ingresado ninguna búsqueda.`
  }
}