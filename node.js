// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end('hellllloooooooooooooooi')                           //http server
// })
// server.listen(3003,()=>{
//     console.log('server is working')
// })

//-----------------------------------------------------------------------------------------------------------------

// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send('what is your name')                               //express server
// })

// app.listen(3000,()=>{
//     console.log("server ok")
// })

//-----------------------------------------------------------------------------------------------------------------

// const math = require('./modules')
// const sum = math.add(2,4)                                      //module creation
// console.log(sum)

//-----------------------------------------------------------------------------------------------------------------

const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    console.log('home page')
    res.send("home page")
})
app.get('/profile',Token,(req,res)=>{
    console.log('user logged');
    res.send("SUCCESS")
})
function Token(req,res,next){
    console.log('creating token')
    next()
}
app.listen(PORT)