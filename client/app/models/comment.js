export default class comment {
  constructor(data) {
    this.comment = data.comment
    this.author = data.comment.author
    this.votes = data.comment.votes
  }

  get CommentTemplate() {
    return `
   <div class="card card-body">
                  ${this.comment}
                  <div class="comment-voting-counter row">
                    <div class="btn-group-vertical col-2 d-flex flex-column align-items-center">
                      <button class="btn text-center p-0 btn-primary"><i class="fas fa-hand-point-up"></i></button>
                      <p id="comment-counter">${this.votes}</p><button class="btn text-center p-0 btn-danger"><i
                          class="fas fa-hand-point-down"></i></button>
                    </div>
                  </div>
                </div>
        `
  }
}