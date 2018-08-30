'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username').unique()
      table.string('email').unique()
      table.string('GSM')
      table.string('first_name')
      table.string('last_name')
      table.string('role')
      table.boolean('active')
      table.string('password', 80)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
