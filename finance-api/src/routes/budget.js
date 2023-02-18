const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('Got a POST Request')
})

module.exports = router