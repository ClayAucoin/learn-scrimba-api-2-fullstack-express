// src/index.js

import app from "./app.js"
// import { config } from "./config.js"

// const port = config.port
const port = 8000

// listen
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 