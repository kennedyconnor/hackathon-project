export default class User {
  constructor(data) {
    this.user = data.data.name
  }
  get Template() {
    return `
    <div class="row" id="user card' `
  }
}