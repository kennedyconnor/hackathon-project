import MovieService from "./MovieService.js";

const _movieService = new MovieService()

function _drawMovies() {
  let movie = _movieService.Movie
  let template = ''
  movie.forEach(movie => {
    template += movie.Template
  })
  document.getElementById('movie').innerHTML = template
}

function -drawTopTenMovies() {
  let movies = -serviceTopTenMovies;
  movies.forEach(m => {
    let movie = newMovie(m)
    template += movie.template

  })
}


export default class MovieController {
  constructor() {
    _movieService.addSubscriber("movie", _drawMovies)
    _movieService.getMovies()
  }
}