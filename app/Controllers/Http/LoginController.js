'use strict'

const User = use('App/Models/User')
const { validateAll } = use('Validator')

class LoginController {
  async login ({ request, auth }) {
    const { email, password } = request.all()
    return await auth.withRefreshToken().attempt(email, password);
  }

  async store ({ session, request, response }) {
    /**
     * Getting needed parameters.
     *
     * ref: http://adonisjs.com/docs/4.1/request#_only
     */
    const data = request.only(['username', 'email', 'password', 'password_confirmation', "first_name", "last_name"])

    /**
     * Validating our data.
     *
     * ref: http://adonisjs.com/docs/4.1/validator
     */
    const validation = await validateAll(data, {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      first_name:'required',
      last_name:'required',
      password: 'required',
      password_confirmation: 'required_if:password|same:password',
    })

    /**
     * If validation fails, early returns with validation message.
     */
 

    // Deleting the confirmation field since we don't
    // want to save it
    delete data.password_confirmation
    data.created_at = Date.now()
    data.active = true

    /**
     * Creating a new user into the database.
     *
     * ref: http://adonisjs.com/docs/4.1/lucid#_create
     */
    await User.create(data)

    return response.redirect('/')
  }
}

module.exports = LoginController
