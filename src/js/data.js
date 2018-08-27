window.getMovies = (search) => {
  fetch(`https://www.omdbapi.com/?apikey=3fff6717&s=${search}&page=1`)
    .then(response => response.json())
    .then(data => {
      paintMovies(data.Search);
    })
    .catch(error => {
      console.log('error de Esve', error);
    });
};