export default class Movie {
  constructor(data) {
    this.id = data._id
    this.nextMovie = data.nextMovie
    this.description = data.description
    this.delete = data.delete
  }


  get Template() {
    if (this.delete) {
      return `
    <li class="whatever this goes to"</li>
    <button class="btn btn-danger" onclick="app.controllers.movieController.removeMovie('${this.delete})
    <button class="btn btn-primary" onclick="app.controllers.movieController.nextMovie('${this.nextMovie})`
    }
  }