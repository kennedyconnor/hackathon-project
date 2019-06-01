import MovieController from "./components/movie/movie-controller.js"
import UserController from "./components/user/user-controller.js"
import Comment from "./components/comment/comment-controller.js"

class App {
  constructor() {
    this.controllers = {
      movieController: new MovieController(),
      userController: new UserController(),
      comment: new CommentController(),
    }

  }

}

window['app'] = new App