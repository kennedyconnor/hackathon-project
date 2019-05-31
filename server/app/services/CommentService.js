import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  text: { type: String, required: true },
  votes: { type: Number, required: true },
  userId: { type: ObjectId, required: true },
  movieId: { type: ObjectId, required: true }
}, { timestamps: true })

export default class CommentService {
  get repository() {
    return mongoose.model('comment', _schema)
  }
}