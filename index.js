const express = require('express')
const app = express()

app.get('/teste', (req, res) => {
  return res.send('Hello World!')
})

app.listen(3003)