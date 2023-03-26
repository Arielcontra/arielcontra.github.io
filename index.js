const express = require('express')
const app = express()
console.log("arrancando con fuerza")

app.get('/', function (req, res) {
    console.log("soy el index")
  res.send('Hello World :D')
})

app.listen(3000)

app.use(express.static('static'))