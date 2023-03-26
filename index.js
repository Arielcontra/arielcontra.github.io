const express = require('express')
const app = express()
console.log("arrancando con fuerza")
app.use(express.static('static'))

app.get('/', function (req, res) {
    console.log("soy el index")
  res.send('Hello World :D')
})

app.listen(3000)

