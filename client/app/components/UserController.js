import UserService from "./UserService.js";

let _userService = new UserService

// //function drawUsers() {
//   console.log("we have users up in here:", _userService.Users)
//   let user = _userService.Users
//   let template = 
//   document.getElementById('user').innerHTML = template
// }

export default class UserController {
  constructor() {
    // _userService.addSubscriber('user', drawUsers)
    // _userService.getAllUsers()
  }

  userLogIn(event) {
    event.preventDefault();
    let form = event.target
    let userData = {
      name: form.username.value
    }
    _userService.userLogin(userData)
    form.reset()
  }
}