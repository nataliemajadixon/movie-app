
let movieContainerEl = document.querySelector("#movie-container");

let formContainerEl = document.querySelector("#searchButton");

let icon = "https://image.tmdb.org/t/p/w500"

let searchAPI = 'https://api.themoviedb.org/3/search/movie?api_key=1cb8a2207e718162b37eb36283a1e3b4&page=1&query="';

function getMovies(url){

let inputVal = document.querySelector("#inputText").value

let API_URL = "https://api.themoviedb.org/3/search/movie?api_key=1cb8a2207e718162b37eb36283a1e3b4&page=1&query=" + inputVal


fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        
        // data.results.forEach(element => {
        //     console.log(element.title)
          

    //     })
    //         // console.log(data.results.title)


    //         // let movieName = document.createElement("p")
    //         // movieName.textContent = data.results.title

    //         // movieContainerEl.appendChild(movieName)

        let movies = data.results.map(mov => {

            let title = document.createElement("h1");
            let overview = document.createElement("h3")
            let releasedate = document.createElement("h3")
            let voteAverage = document.createElement("h3")
            let poster = document.createElement("img")
            let imagepath =  icon + mov.poster_path
            
           
          
            poster.setAttribute('src', icon + mov.poster_path)

            title.textContent = mov.title
            overview.textContent = mov.overview
            releasedate.textContent = `Realease Date: ${mov.release_date}`
            voteAverage.textContent = `${mov.vote_average}/10`
           
           

            movieContainerEl.append(title)
            movieContainerEl.append(overview)
            movieContainerEl.append(releasedate)
            movieContainerEl.append(voteAverage)
            movieContainerEl.append(poster)
            console.log(imagepath)

          

        })



            
            
    })
}

// let clear = ""

formContainerEl.addEventListener("onClick", (e) => {
    e.preventDefault()
   let searchitem = inputVal
   if (searchitem && searchitem !== ""){
    getMovies(search_api + searchitem) 
    inputVal = "" 
   } 
   else {
    window.location.reload()
   }
// clear = "" 
   
})

console.log(formContainerEl, "hello")
// getMovies()
