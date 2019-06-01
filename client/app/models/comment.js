export default class comment {
  constructor(data) {
    this.quote = data.comment.body,
      this.author = data.comment.author
  }

  get Template() {
    return `
    <div class="container">
    <div class="row" id="comment">
    <div class="col-6">
        <h5>${this.quote}</h3></h5>
        </div>
        <div class="row">
        <h6>${this.author}</h6>
        </div>
        </div>
        </div>
        `
  }
}