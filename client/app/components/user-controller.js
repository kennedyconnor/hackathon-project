import UserService from "./quote-service.js";

let _userService = new UserService()

function drawUser(0) {
  console.log("we have users up in here:", _userService.User)
  let user = _userService.User
  let template = user.Template
  document.getElementById('user').innerHTML = template
}

export default class UserController {
  constructor() {
    _userService.addSubscriber('user', drawUser)
    _userService.getUser()
  }
}