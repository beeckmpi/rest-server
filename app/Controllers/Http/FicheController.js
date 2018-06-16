'use strict'

const Fiche = use('App/Models/Fiche')
const Database = use('Database')
const { validateAll } = use('Validator')

class FicheController {
    // Fiche view
    async view ({params, response, auth}) {
        try {
            await auth.check()
          } catch (error) {
            response.send(error.message)
          }
        const fiche = await Fiche.find(params.id)
            return fiche  
    }
    
    async component ({params, auth}) {
        let table = '';
        switch (params.type) {
            case 'beslissing': 
                table = 'beslissingens';  
                break;
            case 'vaststelling': 
               table = 'vaststellingens';   
               break;
            case 'provinciaal': 
                table = 'provinciaals';                  
                break;
            case 'tijdstippen': 
                table = 'tijdstippens';  
                break;
            case 'bijkomende': 
                table = 'bijkomendes';  
                break;
        }
        const fiche = await Database.select('*').from(table).where({ ficheId: params.ficheId })
        return fiche
    }

    async store ({request, response, auth }) {
        try {
            await auth.check()
        } catch (error) {
            response.send('Missing or invalid jwt token')
        }
            const data = request.only([
                'andereOproep', 
                'andereMelding', 
                'weg', 
                'grondgebied', 
                "rijrichting", 
                "gewestweg",
                'kmPuntTot',
                'straat',
                'huisnummer',
                'andereMeldingShow',
                'andereOproepShow',
                'bijkomendeInformatie',
                'district',
                'doorgegevenAan',
                'GSM',
                'melding',
                'opDatum',
                'opmerkingBereikbaarheid',
                'oproep',
                'provinciaalCoordinator',
                'richting',
                'height',
                'oproepDoor',
                'fichenummer',
                'userId',  
            ]);
            let ficheId = await Database.insert(data).into('fiches').returning('id')
            ficheId = parseFloat(ficheId['0']);
            //bijkomende tabel
            const bijkomende = {tekst: '', mode: 'edit', ficheId: ficheId};
            await Database.insert(bijkomende).into('bijkomendes')

            //vaststellignen tabel
            const vaststellingen = {
                andereAanwezig: {},
                andereAanwezigTekst: "",
                andereIncident: {},
                andereIncidentTekst: "",
                andereOngeval: {},
                andereOngevalTekst: "",
                bermTalut: false,
                betStootb: false,
                bijstandBrand: false,
                bodemverontreiniging: false,
                bodemverontreinigingTekst: "",
                boomStruikIncident: false,
                boomStruikOngeval: false,
                brandweer: false,
                civieleBescherming: false,
                electrischeInstallatie: false,
                fast: false,
                federalePolitie: false,
                ficheId: ficheId,
                kunstwerk: false,
                kunstwerkOngeval: false,
                ladingverlies: false,
                ladingverliesTekst: "",
                metStootb: false,
                mode: 'edit',
                ongeval: false,
                opmerkingen: '',
                opstuiking: false,
                put: false,
                redirect: false,
                signalisatie: false,
                signalisatie2: false,
                stormschade: false,
                stormschadeTekst: "",
                verzakking: false,
                verzakking: false,
                vangrail: false,
                uurEinde: "",
                uurTerplaatse: "",
                wateroverlast: false,
                wateroverlastTekst: "",
                wegdek: false,
            }
            await Database.insert(vaststellingen).into('vaststellingens')

            //beslissingen tabel
            const beslissingen = {
                aannemer: false,
                bodemdeskundige: false,
                BotsersBestek: false,
                brandweer: false,
                civieleBescherming: false,
                fast: false,
                ficheId: ficheId,
                kennisgaveAndere: {},
                kennisgaveAndereTekst: "",
                kennisgavePolitie: false,
                mode: "edit",
                naamAannemer: "",
                naamBodemdeskundig: "",
                naOproepAannemer: false,
                naOproepRegie: false,
                naVaststellingAannemer: false,
                naVaststellingRegie: false,
                politie: false,
                redirect: false,
                regie: false,
                signalisatie: false,
                signalisatieAannemer: false,
                uurOproepAannemer: null,
                uurOproepBodemdeskundige: null,
                uurOproepRegie: null,
                uurOproepSignalisatie: null,
                VVC: false,
                VTC: false,
            }
            await Database.insert(beslissingen).into('beslissingens')

            //tijdstippen tabel
            const tijdstippen = {
                aantalBotsers: '',
                afgraving: false,
                andere: {},
                andereTekst: "",
                ficheId: ficheId,
                naamDeskundige: '',
                mode:'edit',
                ontstoppen: false,
                opmerkingen: '',
                redirect: false,
                reinigen: false,
                regieArbeider: '',
                regieToezichter: '',
                totAannemer: null,
                totDeskundige: null,
                totRegie: null,
                totSignalisatie: null,
                vanAannemer: null,
                vanDeskundige: null,
                vanRegie: null,
                vanSignalisatie: null,
                vaStootbanden: false,
                vullenPut: false
            };       
            await Database.insert(tijdstippen).into('tijdstippens')
            return ficheId;
        
    }

    async componentStore ({request, response, auth}){
        let table = '';
        switch (request.params.type) {
            case 'beslissing': 
                table = 'beslissingens';  
                const data = request.only(["id","aannemer","bodemdeskundige","BotsersBestek","brandweer","civieleBescherming","fast","ficheId","kennisgaveAndere","kennisgaveAndereTekst","kennisgavePolitie","mode","naamAannemer","naamBodemdeskundig","naOproepAannemer","naOproepRegie","naVaststellingAannemer","naVaststellingRegie","politie","redirect","regie","signalisatie","signalisatieAannemer","uurOproepAannemer","uurOproepBodemdeskundige","uurOproepRegie","uurOproepSignalisatie","VVC","VTC","created_at","updated_at"])
                break;
            case 'vaststelling': 
               table = 'vaststellingens';   
               break;
            case 'provinciaal': 
                table = 'provinciaals';                  
                break;
            case 'tijdstippen': 
                table = 'tijdstippens';  
                break;
            case 'bijkomende': 
                table = 'bijkomendes';  
                break;
        }
        const affectedRows = await Database.table('users').where({ ficheId: params.ficheId }).update(data)
        return affectedRows
    }

    async list ({params, response, auth}) {
        let data = {};
        const fiches = await Database.select('*').from('fiches').orderBy('id', 'desc');
        
        return fiches
    }
}

module.exports = FicheController
