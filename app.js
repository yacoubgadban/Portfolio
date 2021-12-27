const express=require('express')
var compression = require('compression')

const app = express()

const port=process.env.PORT || 5000;

app.listen(port,()=>{console.log("server connected")})
app.use(compression())

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extends :true}))

