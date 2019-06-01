import Movie from '../models/Movie'
//Private
const movieApi = axios.create({
  baseURL: "//localhost:3000/api/whateverYourDestinationIs"
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
  get MovieError() {
    return _state.error
  }
  get Movie() {
    return _state.error
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
  getMovies() {
    console.log("not sure what to say yet")
    movieApi.get()
      .then(res => {
        console.log(res)
        let data = res.data.data.map(m => new Movie(m))
        _setState('movies', data)
      })
  }
  addMovie(movie) {
    movieApi.post('', movie)
      .then(res => {
        console.log(res)
        this.getMovies()
      })
      .catch(err => _setState('error', err.response.data))
  }
  removeMovie(movieId) {
    console.log(movieId)
    movieApi.delete(movieId)
      .then(res => {
        this.getMovies
      })
  }


}