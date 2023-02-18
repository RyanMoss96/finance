const express = require('express')
const app = express()

const budget = require('./routes/budget.js')

app.use('/budget', budget)

app.listen(8080, () => {
    console.log("Started on Port 8080")
})