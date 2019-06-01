import User from "../models/User.js";

const _userApi = axios.create({
  baseURL: "//localhost:3000/api/users",
  timeout: 3000
})

let _state = {
  activeUser: {}
}

let _subscribers = {
  activeUser: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

export default class UserService {
  get Users() {
    return _state.users.map(user => new User(user))
  }

  get activeUser() {
    return new User(_state.activeUser)
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
  // getAllUsers() {
  //   _userApi.get().then(res => {
  //     console.log('getting users...')
  //     console.log(res)
  //     let data = res.data.data
  //     _setState('users', data)
  //   })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  userLogin(userData) {
    // debugger
    _userApi.get(userData.name + '/name')
      .then(res => {
        let user = res.data
        if (user) {
          console.log('User returned: ', user)
          _setState('activeUser', user)
        }
        else {
          user = this.addUser(userData)
          _setState('activeUser', user)
        }
      })
  }

  addUser(userData) {
    _userApi.post('', userData)
      .then(res => {
        let user = res.data
        console.log('user created', user)
        return user
      })
      .catch(err => {
        console.log(err)
      })
  }

}

