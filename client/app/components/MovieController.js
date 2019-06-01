import MovieService from "./MovieService.js";

const _movieService = new MovieService()

function _drawMovies() {
  let movies = _movieService.TopTenMovies
  console.log(movies)
  let template = ''
  movies.forEach(movie => {
    template += movie.TopTenTemplate
  })
  document.getElementById('topten').innerHTML = template
}


export default class MovieController {
  constructor() {
    _movieService.addSubscriber("movies", _drawMovies)
    _movieService.getAllMovies()

    // console.log(movies)
  }

  voteUpMovie(movieId) {
    _movieService.voteUpMovie(movieId)
  }
  voteDownMovie(movieId) {
    _movieService.voteDownMovie(movieId)
  }
}