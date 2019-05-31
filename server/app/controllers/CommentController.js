import express from 'express'
import CommentService from '../services/CommentService';

let _service = new CommentService()
let _repo = _service.repository

export default class CommentController {
  constructor() {
    this.router = express.Router()
      .get('/movieId/:id', this.getAllCommentsByMovie)
      .get('', this.getAllComments)
      .post('', this.createComment)
      .use('*', this.defaultRoute)
  }
  async getAllComments(req, res, next) {
    try {
      let comments = await _repo.find({})
      return res.send(comments)
    } catch (error) { next(error) }
  }
  async  getAllCommentsByMovie(req, res, next) {
    try {
      let comment = await _repo.find({ movieId: req.params.id })
      return res.send(comment)
    } catch (error) { next(error) }
  }
  async createComment(req, res, next) {
    try {
      let comment = await _repo.create(req.body)
      return res.status(201).send(comment)
    } catch (error) {
    }
  }

  defaultRoute(req, res, next) {
    res.status(404).send('No Such Route')
  }

}
