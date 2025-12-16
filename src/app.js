// src/app.js

import express from 'express'

import router from './routes/products.js'

const app = express()

// app.use(express.static('public'))

app.use("/api", router)
app.use("/api/products", router)

app.get('/', (req, res) => {
  res.send('<!doctype html><html><body>Hello Express!</body></html>')
})

export default app