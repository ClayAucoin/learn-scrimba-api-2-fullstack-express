// src/app.js

import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<!doctype html><html><body>Hello Express!</body></html>')
})

export default app