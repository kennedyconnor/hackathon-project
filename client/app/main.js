import MovieController from "./components/MovieController.js"
import UserController from "./components/UserController.js"
//import CommentController from "./components/CommentController"

class App {
  constructor() {
    this.controllers = {
      movieController: new MovieController(),
      userController: new UserController()
      //commentController: new CommentController(),
    }

  }

}

window['app'] = new App