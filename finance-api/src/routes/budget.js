const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    //TODO: This Endpoint should create a budget, a budget should consist of a name,
    // a list of acounts that belong to that budget and a date-timestamp of it's creation time. 
    res.send('Got a POST Request')
})

module.exports = router