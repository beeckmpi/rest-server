'use strict'

const Schema = use('Schema')

class TokenSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.increments()
      table.boolean('is_revoked')
      table.string('token').unique()
      table.string('type')
      table.string('user_id')      
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokenSchema
