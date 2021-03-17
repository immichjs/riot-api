const axios = require('axios')
const keyToken = 'Aqui vai o key token gerado no site para devs oficial da riot'
const summonerName = 'nikkim'

axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
    headers: {
        ['X-Riot-Token']: keyToken
    }
}).then(function(response) {
    const data = response.data
    const name = response.data.name
    const summonerLevel = response.data.summonerLevel

    console.log(`Nome: ${name}`,
        `Level: ${summonerLevel}`)
}).catch(function (error) {
    if (error) {
        console.log(error)
    }
})