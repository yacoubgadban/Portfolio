const express=require('express')
var compression = require('compression')
const path = require('path')
const app = express()

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/public/index.html"));
    app.get('*',(req,res)=>{
        req.sendFile(path.resolve(__dirname,"client/public/index.html",'index.html'))
    } )
}
app.listen(process.env.PORT || 5000,()=>{console.log("server connected")})
app.use(compression())

app.use(express.static('public'))
app.use(express.urlencoded({extends :true}))

