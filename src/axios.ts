const axios = require('axios').default

module.exports = axios.create({
  baseURL: 'https://br1.api.riotgames.com'
})
