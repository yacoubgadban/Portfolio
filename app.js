const express=require('express')
var compression = require('compression')
const path = require('path')
const app = express()

const port=process.env.PORT || 5000;
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client"));
    app.get('*',(req,res)=>{
        req.sendFile(path.resolve(__dirname,"client",'index.html'))
    } )
}
app.listen(port,()=>{console.log("server connected")})
app.use(compression())

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extends :true}))

