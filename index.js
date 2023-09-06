const cool = require('cool-ascii-faces')
const express = require('express')
const port = process.env.port || 3001
const app = express()


app.get('/', (req, res) => {
    console.log(`Hello World!`)
})


app.get('/cool', (req, res) => {
    res.send(cool());
})

app.get('/fit', (req, res) => {
    res.send(`<p style="color: red;">X</p>`);
})

app.listen(port, () => {
    console.log(`start listening ${port}`)
})