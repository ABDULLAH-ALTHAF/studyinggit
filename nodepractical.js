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

// const express = require('express')
// const app = express()
// const PORT = 3000
// app.get('/',(req,res)=>{
//     console.log('home page')
//     res.send("home page")
// })
// app.get('/profile',Token,(req,res)=>{
//     console.log('user logged');
//     res.send("SUCCESS")
// })
// function Token(req,res,next){
//     console.log('creating token')
// }
// app.listen(PORT)


// const express = require('express')
// const app = express()
// const router = express.Router()
// const PORT = 3939

// app.get('/',(req,res)=>{
//     console.log('home page')
// })

// app.get('/profile',token,(req,res)=>{
//     console.log('user loged');
// })

// function token(req,res,next) {
//     console.log('creating token');
//      next()
// }

// router.get('/data',(req,res)=>{
//     console.log('routerreerre')
// })

// app.use('/api',router)


// const express = require('express');
// const app = express();

// app.use((req,res,next)=>{
//     console.log('hellou')
// })

// app.get('/',(req,res)=>{
//     res.send("hwello")
// })

// app.get('/P',(req,res)=>{
//     res.send("hwello")
// })

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });




// const express = require('express');
// const app = express();
// const os = require('os')
// const fs = require('fs')
// const path = require('path')
// const math = require('./modules')

// app.get('/', (req, res) => {
//     res.send('Welcome to the Home Page!');
// });
// let str = ''
// for(i=0;i<=100;i++){
//     str+=i+'\n'
// }
// fs.writeFile('dates.txt',str,(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// })





// const sum = math.add(2,4)                          
// console.log(sum)

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
 


