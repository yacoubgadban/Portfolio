const express=require('express')
var compression = require('compression')
const path = require('path')
const app = express()



app.listen(process.env.PORT || 5000,()=>{console.log("server connected")})
app.use(compression())

app.use(express.static('public'))
app.use(express.urlencoded({extends :true}))

