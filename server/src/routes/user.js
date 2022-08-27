const express = require("express")
const router = express.Router()
const users = require("../models/user")

router.get('/', (req, res) => {
    res.json(users)
})
// 
router.get('/:id', (req, res) => {
    res.json(users.filter(item => item.id === req.params.id))
})

module.exports = router