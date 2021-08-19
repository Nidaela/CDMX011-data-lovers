import data from './data/ghibli/ghibli.js';

const myDOM = document.getElementById('root');

data.films.forEach(eachfilm => {
    const div = document.createElement("div")
    div.innerHTML = myHTML(eachfilm);
    myDOM.appendChild(div);
})

function myHTML (movie) {
    let html = `
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
    `
    return html
}