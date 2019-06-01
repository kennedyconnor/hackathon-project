import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  text: { type: String, required: true },
  votes: { type: Number, required: true, default: 0 },
  userId: { type: ObjectId, required: true },
  movieId: { type: ObjectId, required: true }
}, { timestamps: true })

export default class CommentService {
  get repository() {
    return mongoose.model('comment', _schema)
  }

  async voteUpComment(updatedCommentId) {
    let comment = await this.repository.findById(updatedCommentId)

    if (!comment) { throw new Error("No Comment to UpVoate!!!!") }
    comment['votes']++
    await comment.save()
    return comment
  }
  async voteDownComment(updatedComment) {
    let comment = await this.repository.findById(updatedComment)
    if (!comment) { throw new Error("No Comment to UpVoate!!!!") }
    comment['votes']--
    await comment.save()
    return comment
  }
}