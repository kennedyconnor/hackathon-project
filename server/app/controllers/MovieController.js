import express from 'express'
import MovieService from '../services/MovieService';

let _service = new MovieService()
let _repo = _service.repository

export default class MovieController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllMovies)
      .get('/:id', this.getMovieById)
      .post('', this.createMovie)
      .use('*', this.defaultRoute)
  }

  async getAllMovies(req, res, next) {
    try {
      let movies = await _repo.find({})
      return res.send(movies)
    } catch (error) { next(error) }
  }

  async  getMovieById(req, res, next) {
    try {
      let movie = await _repo.findById(req.params.id)
      return res.send(movie)
    } catch (error) { next(error) }
  }
  async createMovie(req, res, next) {
    try {
      let movie = await _repo.create(req.body)
      return res.status(201).send(movie)
    } catch (error) {
    }
  }

  defaultRoute(req, res, next) {
    res.status(404).send('No Such Route')
  }

}
