 'use strict'

const Schema = use('Schema')

class TijdstippenSchema extends Schema {
  up () {
    this.create('tijdstippens', (table) => {
      table.increments()
      table.string('aantalBotsers')
      table.boolean('afgraving')
      table.string('andere')
      table.string('andereTekst')
      table.integer('ficheId')
      table.string('naamDeskundige')
      table.string('mode')
      table.boolean('ontstoppen')
      table.string('opmerkingen')
      table.boolean('redirect')
      table.boolean('reinigen')
      table.string('regieArbeider')
      table.string('regieToezichter')
      table.dateTime('totAannemer')
      table.dateTime('totDeskundige')
      table.dateTime('totRegie')
      table.dateTime('totSignalisatie')
      table.dateTime('vanAannemer')
      table.dateTime('vanDeskundige')
      table.dateTime('vanRegie')
      table.dateTime('vanSignalisatie')
      table.boolean('vaStootbanden')
      table.boolean('vullenPut')
      table.timestamps()
    })
  }

  down () {
    this.drop('tijdstippens')
  }
}

module.exports = TijdstippenSchema
