const express = require('express')
const port = process.env.port || 3001
const app = express()


app.get('/', (req, res) => {
    console.log(`New feature2`)
})

app.listen(port, () => {
    console.log(`start listening ${port}`)
})