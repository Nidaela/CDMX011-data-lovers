// Es el punto de salida del dom
import data from './data/ghibli/ghibli.js';
import {ordenado} from './data.js';

const myDOM = document.getElementById('root');
const elOrdenado = document.getElementById('orderBy'); // aqui  accedemos al nodo select del archivo index.html

function render(films) {
    let html = ''
    films.forEach(eachfilm => {
        html += myHTML(eachfilm);    
    })
    myDOM.innerHTML = html
}

elOrdenado.addEventListener('change', function (e){ // añadimos un evento al select donde establecemos una funcion anonima que ejecuta de inmedito al hacer un cambio en el nodo del select
    let dataOrdenada=ordenado(data.films, e.target.value); //creamos una variable que ejecuta unafuncion llamada ordenado que envia dos parametros, el primero es ladata y el segundo es el tipo de ordenado mediate e.target.value accedemos al valor
    console.log(dataOrdenada) //¿que hacemos con la data ordenada :D ? R= Imprimirla :D OMG
    render(dataOrdenada)
})

render(data.films)

function myHTML (movie) {
    let html = `
    <div class= "container">
       <div class= "movie-card">
           <div class= "poster"> <img src= "${movie.poster}" height = "200px" width = "150px" style="width:100%"> </div>
           <div class= "details"> 
           <h2>${movie.title} (${movie.release_date}) <br> <span>Directed by ${movie.director}</span> <br> <span>Produced by ${movie.producer}</span></h2>
           <div class= "tag">  
           <span class= "rating">Rating: ${movie.rt_score}</span>
           </div>
           <div class= "info">  
           <p>${movie.description}</p>
           </div>
       </div>
    </div>
    `
    return html
}