import data from './data/ghibli/ghibli.js';

const myDOM = document.getElementById('root');

data.films.forEach(eachfilm => {
    const div = document.createElement("div")
    div.innerHTML = myHTML(eachfilm);
    myDOM.appendChild(div);
})

function myHTML (movie) {
    let html = `
    <image src "${movie.poster}" height = "200px"; width = "150px";/>
    <p>${movie.title}/<p>
    `
    return html
}