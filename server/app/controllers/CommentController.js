import express from 'express'
import CommentService from '../services/CommentService';

let _service = new CommentService()
let _repo = _service.repository

export default class CommentController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllComments)
      .get('/:id', this.getCommentById)
      .post('', this.createComment)
      .use('*', this.defaultRoute)
  }

  async getAllComments(req, res, next) {
    try {
      let comments = await _repo.find({})
      return res.send(comments)
    } catch (error) { next(error) }
  }

  async  getCommentById(req, res, next) {
    try {
      let comment = await _repo.findById(req.params.id)
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
