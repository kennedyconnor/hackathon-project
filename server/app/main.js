import cors from 'cors'
import express from 'express'
import './db/dbconfig'
let port = 3000
let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//ABOVE THIS LINE DOES NOT CHANGE


//Register routes
import UserController from './controllers/UserController';
import MovieController from './controllers/MovieController';
import CommentController from './controllers/CommentController';

server.use(cors())
server.use('/api/users', new UserController().router)
server.use('/api/movies', new MovieController().router)
server.use('/api/comments', new CommentController().router)

//Below this line stays the same

//DEFAULT ERROR HANDLER
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

server.listen(port, () => {
  console.log('Server running on port: ' + port)
})
