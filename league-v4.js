const axios = require('axios')
const { riotToken } = require('./token')

const challenger = 'https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue'
const grandMaster = 'https://br1.api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue'
const master = 'https://br1.api.riotgames.com/lol/league/v4/masterleagues/by-queue'
const entries = 'https://br1.api.riotgames.com/lol/league/v4/entries'

const xRiotToken = { ['X-Riot-Token']: riotToken }

const queue = {
    solo: 'RANKED_SOLO_5x5',
    flex: 'RANKED_FLEX_SR',
}

const rank = {
    diamond: 'DIAMOND',
    platinum: 'PLATINUM',
    gold: 'GOLD',
    silver: 'SILVER',
    iron: 'IRON'
}

const division = {
    i:  'I',
    ii:  'II',
    iii:  'III',
    iv:  'IV',
}

// Challenger Solo/Duo Queue
axios.get(`${challenger}/${queue.solo}`, {
    headers: xRiotToken 
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})

// Challenger Flex Queue
axios.get(`${challenger}/${queue.flex}`, {
    headers: xRiotToken
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})

// Queue / Tier / Division API
axios.get(`${entries}/${queue.solo}/${rank.gold}/${division.iii}?page=1`, {
    headers: xRiotToken
}).then(function (response) {
    const data = response.data

    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})

// GrandMaster Solo/Duo Queue
axios.get(`${grandMaster}/${queue.solo}`, {
    headers: xRiotToken
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})

// GrandMaster Flex Queue
axios.get(`${grandMaster}/${queue.flex}`, {
    headers: xRiotToken
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})

// Master Solo/Duo Queue
axios.get(`${master}/${queue.solo}`, {
    headers: xRiotToken
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})

// Master Flex Queue
axios.get(`${master}/${queue.flex}`, {
    headers: xRiotToken
}).then(function (response) {
    const data = response.data
    console.log(data)
}).catch(function (error) {
    if (error) console.log(error)
})