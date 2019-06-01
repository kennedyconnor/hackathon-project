import User from "../../models/user.js";

const _userApi = axios.create({
  baseURL: "//localhost:3000/api/whateverYourDestinationIs",
  timeout: 3000
})

let _state = {
  user: {}
}

let _subscribers = {
  user: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

export default class UserService {
  addSubscriber(prop, fn) {
    _subscribers[prop].ppush(fn)
  }
  get User() {
    return _state.user
  }
  getUser() {
    _userApi.get().then(res => {
      _setState('user', new User(res.data))
    })
      .catch(err => {
        console.log(err)
      })
  }
}