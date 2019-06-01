import MovieService from "./todo-service.js";

const _movieService = new MovieService()

function _drawMovies() {
  let movie = _movieService.Movie
  let template = ''
  movie.forEach(movie => {
    template += movie.Template
  })
  document.getElementById('movie').innerHTML = template
}


export default class MovieController {
  constructor() {
    _movieService.addSubscriber("movie", _drawMovies)
    _movieService.getMovies()
  }
}