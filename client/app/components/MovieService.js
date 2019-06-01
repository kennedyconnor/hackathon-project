import Movie from '../models/Movie.js'
//Private
const movieApi = axios.create({
  baseURL: "//localhost:3000/api/movies"
});

let _state = {
  movies: [],
  errors: {}
}

let _subscribers = {
  movies: [],
  errors: {}
}


function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//Public
export default class MovieService {

  get Movies() {
    return _state.movies.map(el => new Movie(el))

  }

  get TopTenMovies() {

    let topTen = _state.movies.sort((a, b) => {
      return b.votes - a.votes
    })
    return topTen

  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
  getAllMovies() {
    movieApi.get('')
      .then(res => {
        let data = res.data.map(m => new Movie(m))
        _setState('movies', data)
      })
  }

  voteUpMovie(id) {
    movieApi.put(id + '/up')
      .then(res => {
        console.log('voted up', res)
      })
      .catch(err => {
        console.log(err)
      })
    this.getAllMovies()
  }

  voteDownMovie(id) {
    movieApi.put(id + '/down')
      .then(res => {
        console.log('voted down', res)
      })
      .catch(err => {
        console.log(err)
      })
    this.getAllMovies()
  }


  // addMovie(movie) {
  //   movieApi.post('', movie)
  //     .then(res => {
  //       console.log(res)
  //       this.getMovies()
  //     })
  //     .catch(err => _setState('error', err.response.data))
  // }
  // removeMovie(movieId) {
  //   console.log(movieId)
  //   movieApi.delete(movieId)
  //     .then(res => {
  //       this.getMovies
  //     })
  // }


}