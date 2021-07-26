import { createServer, Model } from 'miragejs'
import userRoute from './routes/user'
import infoRoute from './routes/info'

export default function makeServer () {
  const server = createServer({
    models: {
      user: Model
    },

    seeds (server) {
      server.create('user',
        {
          email: 'johnfoo@gmail.com',
          email_verified: false,
          family_name: 'Foo',
          gender: 'male',
          given_name: 'John',
          locale: 'en',
          name: 'John Foo',
          password: 'asf4jk,',
          username: 'foojon',
          id: 'a4cbc2c7329e4f46a53ef576510176ac'
        }
      )
    },

    routes () {
      this.namespace = 'api'
      infoRoute(this)
      userRoute(this)
    }
  })

  return server
}
