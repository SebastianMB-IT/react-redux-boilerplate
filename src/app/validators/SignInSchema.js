import Joi from 'joi'

const SignInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'This cannot be empty',
      'string.email': 'This must be a valid email'
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.empty': 'This cannot be empty'
    })
})

export default SignInSchema
