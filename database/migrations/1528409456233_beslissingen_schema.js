'use strict'

const Schema = use('Schema')

class BeslissingenSchema extends Schema {
  up () {
    this.create('beslissingens', (table) => {
      table.increments()
      table.boolean('aannemer')
      table.boolean('bodemdeskundige')
      table.boolean('BotsersBestek')
      table.boolean('brandweer')
      table.boolean('civieleBescherming')
      table.boolean('fast')
      table.integer('ficheId')
      table.string('kennisgaveAndere')
      table.string('kennisgaveAndereTekst')
      table.boolean('kennisgavePolitie')
      table.string('mode')
      table.string('naamAannemer')
      table.string('naamBodemdeskundig')
      table.boolean('naOproepAannemer')
      table.boolean('naOproepRegie')
      table.boolean('naVaststellingAannemer')
      table.boolean('naVaststellingRegie')
      table.boolean('politie')
      table.boolean('redirect')
      table.boolean('regie')
      table.boolean('signalisatie')
      table.boolean('signalisatieAannemer')
      table.dateTime('uurOproepAannemer')
      table.dateTime('uurOproepBodemdeskundige')
      table.dateTime('uurOproepRegie')
      table.dateTime('uurOproepSignalisatie')
      table.boolean('VVC')
      table.boolean('VTC')
      table.timestamps()
    })
  }

  down () {
    this.drop('beslissingens')
  }
}

module.exports = BeslissingenSchema
