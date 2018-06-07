'use strict'

const Schema = use('Schema')

class VaststellingenSchema extends Schema {
  up () {
    this.create('vaststellingens', (table) => {
      table.increments()
      table.string('andereAanwezig')
      table.string('andereAanwezigTekst')
      table.string('andereIncident')
      table.string('andereIncidentTekst')
      table.string('andereOngeval')
      table.string('andereOngevalTekst')
      table.string('bermTalut')
      table.string('betStootb')
      table.string('bijstandBrand')
      table.boolean('bodemverontreiniging')
      table.string('bodemverontreinigingTekst')
      table.boolean('boomStruikIncident')
      table.boolean('boomStruikOngeval')
      table.string('brandweer')
      table.boolean('civieleBescherming')
      table.boolean('electrischeInstallatie')
      table.string('fast')
      table.boolean('federalePolitie')
      table.integer('ficheId')
      table.string('kunstwerk')
      table.boolean('kunstwerkOngeval')
      table.boolean('ladingverlies')
      table.string('ladingverliesTekst')
      table.boolean('metStootb')
      table.string('mode')
      table.boolean('ongeval')
      table.string('opmerkingen')
      table.boolean('opstuiking')
      table.string('put')
      table.boolean('redirect')
      table.boolean('signalisatie')
      table.boolean('signalisatie2')
      table.boolean('stormschade')
      table.string('stormschadeTekst')
      table.boolean('verzakking')
      table.boolean('vangrail')
      table.string('uurEinde')
      table.string('uurTerplaatse')
      table.boolean('wateroverlast')
      table.string('wateroverlastTekst')
      table.boolean('wegdek')
      table.timestamps()
    })
  }

  down () {
    this.drop('vaststellingens')
  }
}

module.exports = VaststellingenSchema
