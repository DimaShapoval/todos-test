const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const {readFileSync } = require("fs")
const data = require("./data.json")
const cors = require('cors');


app.use(cors());

app.get('/data', (req, res) => {
  let jsonData = readFileSync("./data.json")
  res.json(JSON.parse(jsonData))
})

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})