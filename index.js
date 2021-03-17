const axios = require('axios')
const { riotToken } = require('./token')
const summonerName = 'Im Mich'

axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
    headers: {
        ['X-Riot-Token']: riotToken
    }
}).then(function(response) {
    const structure = response.data
    const name = response.data.name
    const summonerLevel = response.data.summonerLevel

    console.log(`Nome: ${name}`, `Level: ${summonerLevel}`)
    console.log(structure)
}).catch(function (error) {
    if (error) {
        console.log(error)
    }
})