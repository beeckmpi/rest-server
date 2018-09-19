'use strict'

const Schema = use('Schema')

class BestandenSchema extends Schema {
  up () {
    this.create('bestandens', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('bestandens')
  }
}

module.exports = BestandenSchema
