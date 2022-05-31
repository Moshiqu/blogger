const express = require('express')
const app = express()

// 跨域
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:false}))

// 包装返回方法
app.use((req,res,next)=>{
    res.cc = (err,status=1)=>{
        res.send({
            status,
            message: err instanceof Error ? err.message:err
        })
    }
    next()
})

const { expressjwt:expressjwt } = require('express-jwt')
const { secretKey } = require('./config')
// 解码出token
app.use(expressjwt({secret:secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))

const userRouter = require('./router/user')
app.use('/api',userRouter)

const joi = require('joi')
app.use((err,req,res,next)=>{
    // 登录表单验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    res.cc(err)
})


app.listen(9088,()=>{
    console.log('express running on 127.0.0.1:9088');
})