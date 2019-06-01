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

function -drawTopTenMovies() {
  let movies = -serviceTopTenMovies;
  movies.forEach(m => {
    let movie = newMovie(m)
    template += movie.template

  })
}


export default class MovieController {
  constructor() {
    _movieService.addSubscriber("movies", _drawMovies)
    _movieService.getAllMovies()

    // console.log(movies)
  }
}