'use strict'

const Schema = use('Schema')

class FichesSchema extends Schema {
  up () {
    this.create('fiches', (table) => {
      table.increments()
      table.string('andereOproep')
      table.string('andereMelding')
      table.string('weg')
      table.string('grondgebied')
      table.string('rijrichting')
      table.string('gewestweg')
      table.string('kmPuntTot')
      table.string('straat')
      table.string('huisnummer')
      table.string('andereMeldingShow')
      table.string('andereOproepShow')
      table.string('bijkomendeInformatie')
      table.string('district')
      table.string('doorgegevenAan')
      table.string('GSM')
      table.string('melding')
      table.string('opDatum')
      table.string('opmerkingBereikbaarheid')
      table.dateTime ('oproep')
      table.string('provinciaalCoordinator')
      table.string('richting')
      table.string('height')
      table.string('oproepDoor')
      table.string('fichenummer')
      table.string('userId')
      table.timestamps()
    })
  }

  down () {
    this.drop('fiches')
  }
}

module.exports = FichesSchema
