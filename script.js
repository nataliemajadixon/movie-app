
let movieContainerEl = document.querySelector("#movie-container");



function getMovies(movies){

let API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cb8a2207e718162b37eb36283a1e3b4&page=1"

fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
        console.log(data.results)



        // data.results.for(element => {
        //     // console.log(element)
        //     // console.log(data.results)

        // })
            // console.log(data.results.title)


            // let movieName = document.createElement("p")
            // movieName.textContent = data.results.title

            // movieContainerEl.appendChild(movieName)
            console.log(showmovies(data.results))
            
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