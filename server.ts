import express from 'express'

const app = express()

app.use('/', (req, res) => {
  console.log('caiu aqui')
  res.json({ok: true})
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})