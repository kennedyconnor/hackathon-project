import Comment from "../../models/movie.js";

const _commentApi = axios.create({
  baseURL: "//localhost:3000/api/whateverYourDestinationIs",
  timeout: 3000
});

let _state = {
  comment: {}
}
let _subscribers = {
  comment: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

//Public
export default class CommentService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Comment() {
    return _state.comment
  }

  getComment() {

    _commentApi.get().then(res => {
      _setState('comment', new Comment(res.data))
    })
      .catch(err => {
        console.log(err)
      })
  }
}