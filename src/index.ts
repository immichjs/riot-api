require('dotenv').config({ path:'../.env' })

const express = require('express')
const app = express()

const api = require('./axios.ts')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', async (req, res) => {
  const response = await api.get('/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5', {
    headers: {
      "X-Riot-Token": process.env.RIOT_TOKEN
    }
  })
    .then(response => response.data)
    .catch(error => error.response)
  
  res.status(200).send(response)
})

app.listen(process.env.PORT, () => {
  console.log(`🔥[Server]: Disponível em: http://localhost:${process.env.PORT} 🔥`)
})
