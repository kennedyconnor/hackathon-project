export default class Movie {
  constructor(data) {
    this.title = data.title
    this.pictureUrl = data.pictureUrl
    this.description = data.description
    this.genre = data.genre
    this.year = data.year
    this.boxOffice = data.boxOffice
    this.budget = data.budget
    this.votes = data.votes
  }



  get TopTenTemplate() {
    return `
    <li>
 <div class="card mb-3" style="max-width: 90vw;">
        <div class="row no-gutters fc">
          <div class="col-md-3">
            <img src="${this.pictureUrl}" class="card-img" alt="movie poster">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.description}</p>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                  aria-expanded="false" aria-controls="collapseExample">
                  Comments
                </button>
              </p>
              <div class="collapse" id="collapseExample">
                // <div class="card card-body">
                //   This is where the main comment would go.
                //   <div class="comment-voting-counter row">
                //     <div class="btn-group-vertical col-2 d-flex flex-column align-items-center">
                //       <button class="btn text-center p-0 btn-primary"><i class="fas fa-hand-point-up"></i></button>
                //       <p id="comment-counter">0</p><button class="btn text-center p-0 btn-danger"><i
                //           class="fas fa-hand-point-down"></i></button>
                //     </div>
                //   </div>
                // </div>
              </div>
            </div>

          </div>
          <div class="col-2 btn-group-vertical voting-counter">
            <button class="btn btn-primary"><i class="fas fa-hand-point-up"></i></button>
            <p>${this.votes}</p><button class="btn btn-danger"><i class="fas fa-hand-point-down"></i></button>
          </div>
        </div>
      </div>
      </li>
  `
  }
  // if (this.delete) {
  //   return `
  // <li class="whatever this goes to"</li>
  // <button class="btn btn-danger" onclick="app.controllers.movieController.removeMovie('${this.delete})
  // <button class="btn btn-primary" onclick="app.controllers.movieController.nextMovie('${this.nextMovie})`
  // }


  get MovieCardTemplate() {
    return `
 <div class="card mb-3 h-25 fc" id="card1" style="max-width: 33vw; max-height: 10vh;">
        <div class="row no-gutters fc">
          <div class="col-md-3">
            <img src="${this.pictureUrl}" class="card-img" alt="movie poster">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.description}</p>
            </div>

          </div>
          <div class="col-2 btn-group-vertical footer-voting-counter">
            <button class="btn btn-primary p-0"><i class="fas fa-hand-point-up"></i></button>
            <p>${this.votes}</p><button class="btn btn-danger p-0"><i class="fas fa-hand-point-down"></i></button>
          </div>
        </div>
      </div>

      <div class="card mb-3 h-25" id="card2" style="max-width: 33vw;">
        <div class="row no-gutters fc">
          <div class="col-md-3">
            <img src="${this.pictureUrl}" class="card-img" alt="movie poster">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.description}</p>
            </div>

          </div>
          <div class="col-2 btn-group-vertical footer-voting-counter">
            <button class="btn btn-primary p-0"><i class="fas fa-hand-point-up"></i></button>
            <p>${this.votes}</p><button class="btn btn-danger p-0"><i class="fas fa-hand-point-down"></i></button>
          </div>
        </div>
      </div>

      <div class="card mb-3 h-25" id="card3" style="max-width: 33vw;">
        <div class="row no-gutters fc">
          <div class="col-md-3">
            <img src="${this.pictureUrl}" class="card-img" alt="movie poster">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.description}</p>
            </div>

          </div>
          <div class="col-2 btn-group-vertical footer-voting-counter">
            <button class="btn btn-primary p-0"><i class="fas fa-hand-point-up"></i></button>
            <p>${this.votes}</p><button class="btn btn-danger p-0"><i class="fas fa-hand-point-down"></i></button>
          </div>
        </div>
      </div>
    `
  }