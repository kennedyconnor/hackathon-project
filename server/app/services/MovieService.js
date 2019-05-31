import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({

  title: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String },
  year: { type: Number },
  boxOffice: { type: Number },
  budget: { type: Number },
  votes: { type: Number, required: true, default: 0 },
  userId: { type: ObjectId, required: true }

}, { timestamps: true })

export default class MovieService {
  get repository() {
    return mongoose.model('movie', _schema)
  }
}