import express from 'express'
import UserService from '../services/UserService';

let _service = new UserService()
let _repo = _service.repository

export default class UserController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllUsers)
      .get('/:id', this.getUserById)
      .get('/:name/name', this.getUserByName)
      .post('', this.createUser)
      .use('*', this.defaultRoute)
  }

  async getAllUsers(req, res, next) {
    try {
      let users = await _repo.find({})
      return res.send(users)
    } catch (error) { next(error) }
  }

  async  getUserById(req, res, next) {
    try {
      let user = await _repo.findById(req.params.id)
      return res.send(user)
    } catch (error) { next(error) }
  }

  async  getUserByName(req, res, next) {
    try {
      let user = await _repo.findOne({ name: req.params.name })
      return res.send(user)
    } catch (error) { next(error) }
  }

  async createUser(req, res, next) {
    try {
      let user = await _repo.create(req.body)
      return res.status(201).send(user)
    } catch (error) {
    }
  }

  defaultRoute(req, res, next) {
    res.status(404).send('No Such Route')
  }

}
