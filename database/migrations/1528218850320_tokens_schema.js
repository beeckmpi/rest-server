'use strict'

const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.increments()
      table.boolean('is_revoked')
      table.string('token').unique()
      table.string('type')
      table.string('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
