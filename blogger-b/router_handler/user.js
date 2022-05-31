const db = require('../db')
const bcrypt = require('bcryptjs');

const reguserHandler = (req,res)=>{
    const {username,password,email} = req.body
    if(!username || !password) return res.send('用户名或密码不能为空')

    // 查看是否已存在相同用户名
    const uniqSql = 'SELECT * FROM users WHERE username = ?'
    db.query(uniqSql,username,(err,result)=>{
        if(err) return res.cc(err)
        if(result.length !== 0) return res.cc('该用户名已重复')
        // 未重复 写入数据
        const creptedPwd = bcrypt.hashSync(password,bcrypt.genSaltSync(10))
        const loginSql = 'INSERT INTO users SET ?'
        db.query(loginSql,{username,password:creptedPwd,email},(err,result)=>{
            if(err) return res.cc(err)
            if(result.affectedRows !== 1) return res.cc('注册失败')
            res.cc('注册成功',0)
        })
    })
}

const loginHandler = (req,res)=>{
    const {username,password} = req.body
    if(!username || !password) return res.send('用户名或密码不能为空')
    
    // 是否包含该用户名
    const searchUserNameSql = 'SELECT * FROM users where username = ?'
    db.query(searchUserNameSql,username,(err,result)=>{
        if(err) return res.cc(err)
        if(result.length !== 1) return res.cc('用户名错误') 
        // 比较密码
        if(!bcrypt.compareSync(password,result[0].password)) return res.cc('密码错误')
        // 生成token 并返回
        const jwt = require('jsonwebtoken');
        const userInfo = {...result[0],password:'',avatar:''}
        const {secretKey} = require('../config');
        res.send({
            status:0,
            message:'登录成功',
            token:`Bearer ${jwt.sign(userInfo,secretKey,{expiresIn:'2h'})}`
        })
    })

}

module.exports={
    reguserHandler,
    loginHandler
}