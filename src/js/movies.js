document.getElementById('star-wars').addEventListener('click', event=>{
  event.preventDefault(); 
  getMovies('wars');
});

document.getElementById('marvel').addEventListener('click', event=>{
  event.preventDefault(); 
  getMovies('marvel'); 
});

document.getElementById('korean-drama').addEventListener('click', event=>{
  event.preventDefault(); 
  getMovies('korean'); 
});

document.getElementById('anime').addEventListener('click', event=>{
  event.preventDefault(); 
  getMovies('anime'); 
});


window.paintMovies = (movies) => {
  let result = '';
  let moviePoster = '';
  movies.forEach(movie => {   
    if (movie.Poster === 'N/A') {
      moviePoster = ('../assets/images/imgposter.jpg');
    } else {
      moviePoster = movie.Poster;
    }
    result +=
                `<div class="card" style="width: 18rem;">
                <a type="button" class="btn btn-dark" data-toggle="modal" data-target="#${movie.imdbID}">          
                <img class="card-img-top" src="${moviePoster}  alt="Card image cap">
    </a>
  <div class="card-body">
   
    <h5 class="card-title">${movie.Title}</h5>
   
    <div class="modal fade" id="${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Movie</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div  class="modal-body">
                        <p class="card-text">${movie.Title}</p>
                        <p class="card-text">${movie.Year}</p>
                        <p class="card-text">${movie.Type}</p>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>`;
  });
  document.getElementById('movies-content').innerHTML = result;
};