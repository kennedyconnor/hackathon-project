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

  async voteUpMovie(updatedMovieId) {
    let movie = await this.repository.findById(updatedMovieId)

    if (!movie) { throw new Error("No Movie to UpVoate!!!!") }
    movie['votes']++
    await movie.save()
    return movie
  }
  async voteDownMovie(updatedMovie) {
    let movie = await this.repository.findById(updatedMovie)
    if (!movie) { throw new Error("No Movie to UpVoate!!!!") }
    movie['votes']--
    await movie.save()
    return movie
  }
}