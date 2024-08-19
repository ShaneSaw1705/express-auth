import express from "express"

const app = express()

app.get('/ping', (req, res) => {
  return res.json('pong').status(200)
})

app.set("trust proxy", true)

app.listen(8080, () => {
  console.log('server running on port 8080')
})
