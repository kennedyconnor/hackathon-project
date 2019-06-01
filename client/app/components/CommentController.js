import CommentService from "./CommentService.js";

//private 
let _commentService = new CommentService()

function drawComment() {
  console.log("the quote could be mistaken for being correct!:", _commentService.comment)
  let comment = _commentService.Comment
  let template = comment.Template
  document.getElementById('comment').innerHTML = template
}

//Public
export default class CommentController {
  constructor() {
    _commentService.addSubscriber('comment', drawComment)
    _commentService.getComment()
  }
}
