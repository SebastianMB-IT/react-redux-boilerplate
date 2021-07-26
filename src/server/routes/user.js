import user from '../controllers/user'

export default function (server) {
  server.post('/login', user.onLogin)
}
