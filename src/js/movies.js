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