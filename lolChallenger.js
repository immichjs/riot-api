const axios = require('axios')
const { riotToken } = require('./token')

const rankedSolo5x5 = 'https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5'
const rankedFlexSR = 'https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_FLEX_SR'

axios.get(rankedSolo5x5, {
    headers: {
        ['X-Riot-Token']: riotToken
    }
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})

axios.get(rankedFlexSR, {
    headers: {
        ['X-Riot-Token']: riotToken
    }
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})