const express = require('express');
const router = express.Router()
const { reguserHandler,loginHandler } = require('../router_handler/user')
const expressJoi = require('@escook/express-joi')
const { reg_login_schema,reg_register_schema } = require('../schema/user')

router.post('/reguser',expressJoi(reg_register_schema),reguserHandler)
router.post('/login',expressJoi(reg_login_schema),loginHandler)

module.exports = router