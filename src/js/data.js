const urlMovies = 'http://www.omdbapi.com/?i=tt3896198&apikey=3fff6717';

window.onload = () => {
    fetch(urlMovies)
    .then(response => response.json())
    .then(data =>{
        console.log(data);

    })
}