'use strict'

const Schema = use('Schema')

class BestandenSchema extends Schema {
  up () {
    this.create('bestandens', (table) => {
      table.increments()
      table.integer('ficheId')
      table.string('gebruiker') 
      table.dateTime('geupload')
      table.string('titel')
      table.string('tekst')  
      table.string('type')
      table.timestamps()
    })
  }

  down () {
    this.drop('bestandens')
  }
}

module.exports = BestandenSchema
