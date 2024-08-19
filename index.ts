import express from 'express'

const app = express()

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
