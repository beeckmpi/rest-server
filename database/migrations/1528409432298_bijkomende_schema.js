'use strict'

const Schema = use('Schema')

class BijkomendeSchema extends Schema {
  up () {
    this.create('bijkomendes', (table) => {
      table.increments()
      table.integer('ficheId')
      table.string('tekst')      
      table.string('mode')
      table.timestamps()
    })
  }

  down () {
    this.drop('bijkomendes')
  }
}

module.exports = BijkomendeSchema
