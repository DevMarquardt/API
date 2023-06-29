const express = require('express')
const router = express.Router()

const registerUserRoutes = require('./users/controllers/users-controller')
router.use(registerUserRoutes())

module.exports = router