const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/', (req, res) => {
    res.json({welcome: 'How to create API with nodejs, Express and ProsgreSQL'})
})

//Endpoints
app.get('/countries', db.getCountries)
app.get('/countries/:id', db.getCountryById)
app.post('/countries', db.createCountry)
app.put('/countries/:id', db.updateCountry)
app.delete('/countries/:id', db.deleteCountry)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})