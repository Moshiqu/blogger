const joi = require('joi');

const username = joi.string().alphanum().min(3).max(10).required()
const password = joi.string().pattern(/^[\S]{6,15}$/).required()
const nickname = joi.string().max(12).required()
const email = joi.string().email().required()
const avatar = joi.string().dataUri().required()

exports.reg_register_schema = {
    body:{
        username,
        password,
        email
    }
}

exports.reg_login_schema = {
    body:{
        username,
        password
    }
}

exports.reg_update_userinfo_shema = {
    body:{
        nickname,
        email
    }
}

exports.reg_update_pwd_schema = {
    body:{
        oldPwd:password,
        newPwd:joi.not(joi.ref('oldPwd')).concat(password)
    }
}

exports.reg_update_avatar = {
    body:{
        avatar
    }
}