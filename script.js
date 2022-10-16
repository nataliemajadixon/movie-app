
let movieContainerEl = document.querySelector("#movie-container");



function getMovies(){

let inputVal = document.querySelector('#input-text').value

let API_URL = "https://api.themoviedb.org/3/search/movie?api_key=1cb8a2207e718162b37eb36283a1e3b4&page=1&query=" + inputVal

fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
        console.log(data.results)




        data.results.forEach(element => {
            console.log(element.title)
          

        })
            // console.log(data.results.title)


            // let movieName = document.createElement("p")
            // movieName.textContent = data.results.title

            // movieContainerEl.appendChild(movieName)
            
            
    })
}

function showmovies(movies){
    movies.forEach(() => {
        let {title} = movies
        let movieElement = document.createElement("div")
        movieElement.innerHTML = `<h2>${title}</h2>`
    })
}



getMovies()