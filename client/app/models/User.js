export default class User {
  constructor(data) {
    this.user = data.user.name,
  }
  get Template() {
    return `
    <div class="row" id="user card' `
  }
}