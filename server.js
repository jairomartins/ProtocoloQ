var express = require('express');
const port = 3000
const app = express()
const route = require('./src/http/routes')
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/src/public'));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})