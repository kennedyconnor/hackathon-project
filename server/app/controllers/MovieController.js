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
      .put('/:id/up', this.voteUpMovie)
      .put('/:id/down', this.voteDownMovie)
      .delete('/:id', this.deleteMovieById)
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
    } catch (error) { next(error) }
  }

  async voteUpMovie(req, res, next) {
    try {
      let m = await _service.voteUpMovie(req.params.id)
      res.send(m)
    } catch (error) { next(error) }
  }

  async voteDownMovie(req, res, next) {
    try {
      let m = await _service.voteDownMovie(req.params.id)
      res.send(m)
    } catch (error) { next(error) }
  }

  async deleteMovieById(req, res, next) {
    try {
      await _repo.findByIdAndRemove(req.params.id)
      res.send('Movie deleted successfully')
    } catch (error) {
      next(error)
    }
  }
  defaultRoute(req, res, next) {
    res.status(404).send('No Such Route')
  }

}
