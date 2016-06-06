import api from '../lib/api'

function authenticateUser (email, password) {
  return api('post', '/auth', {email, password})
    .then((json) => {
      localStorage.setItem('token', json.token)
    })
}

function registerUser (name, email, password) {
  return api('post', '/users', {
    name, email, password,
    password_confirmation: password
  })
}

function createProject (project) {
  return api('post', '/projects', {
    name: project
  })
}

export default function process (name, email, password, project) {
  return registerUser(name, email, password).then(() => {
    return authenticateUser(email, password)
  }).then(() => {
    return createProject(project)
  }).catch((err) => console.log(err))
}
