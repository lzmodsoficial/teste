const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({status: "online"})
})

app.listen(22)
console.log("rodando na porta 3000...")
