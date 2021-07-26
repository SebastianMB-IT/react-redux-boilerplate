import { Response } from 'miragejs'

export default {
  onLogin: (schema, request) => {
    try {
      const body = JSON.parse(request.requestBody)
      const user = schema.users.findBy({ email: body.email })
      if (user) {
        // TODO: check password validity

        return new Response(200, {}, {
          data: {
            id: user.id,
            email: user.email,
            username: user.username,
            name: user.name,
            token: 'sdifu7y3487r23y98723hdfiu23hydfi'
          }
        })
      } else {
        return new Response(404, {}, {
          message: 'Wrong user credentials!'
        })
      }
    } catch (error) {
      return new Response(500, {}, {
        message: error
      })
    }
  }
}
