// const express = require('express');
// const { error } = require('node:console');
// const app = express()
// const port = 8080;
// const fs = require('node:fs')



// const filecontent = fs.readFileSync('./sampletext.txt','utf-8')
// console.log(filecontent)



// fs.readFile('./sampletext.txt','utf-8',(error,data)=>{
//     if (error) {
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })


// fs.writeFileSync('./greet.txt','hellow althaf i am from kondotty')


// fs.writeFile('./greet.txt','    this is the second text file for write file test',{ flag: "a" },(error)=>{
//     if (error) {
//         console.log(error)
//     }else{
//         console.log('created sgn,greet file')
//     }
// })
 


// function higherOrderFunction(callback) {
//     return callback();
// }

// function sayHello() {
//     return "Hello!";
// }

// console.log(higherOrderFunction(sayHello)); // Output: Hello!



// app.get('/',(req,res)=>{
//     res.send('hello world!!')
// })



// app.listen(port,()=>{
//     console.log('server is working')
// })

// const { write } = require('fs')
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end('hello world')
// })
// server.listen(3003,()=>{
//     console.log('running this sereveregeefjhfvsegadjbasdfjknchgcuk')
// })

// const express = require('express')
// const app = express()
// const fs = require('fs')

// app.get('/',(req,res)=>{
//     res.send('hi brother')
// })

// app.listen(3003,()=>{
//     console.log('server is running')
// })


// const math = require('./modules')

// const sum = math.add(2,8);

// console.log(sum)



//-------------------------------------------------------------js--------------------------------------------------------------------

//pure function

// function add (a,b){
//     return a+b
// }
// console.log(add(2,3))

//call

// const person = {
//     fname:'abdullah',
//     sname:'althaf',
//     fullname:function (){
//         return this.fname+' '+this.sname
//     }
// }

// const anotherperson = {
//     fname:'adnan',
//     sname:'hisham'
// }

// console.log(person.fullname.call(anotherperson))
// console.log(person.fullname())

//apply

// function add(a,b,c){
//     return a+b+c;
// }
// const numbers = [1,2,2]
// console.log(add.apply(null,numbers))

//bind

// const althaf = {
//     name:'althaf',
//     kayiv:'sing',
//     intro: function(){
//         return `my name is ${this.name} and i love to ${this.kayiv}`
//     }
// }
// const fareeda = {
//     name:'fareeda',
//     kayiv:'dance'
// }
// const introduction = althaf.intro.bind(fareeda)
// console.log(introduction())


//setInterval

// function greet(){
//     const timeoutID = setInterval(()=>{
//         console.log('hellow')
//     },1000)

//     setTimeout(()=>{
//         clearInterval(timeoutID);
//         console.log('CANCELLED')
//     },6000)
// }

// greet()
// console.log('hello brother')

//push pop

// const fruit = ['mango','orange']

// fruit.pus('apple','berry')

// console.log(fruit)

//splice slice
// const fruit = ['mango','orange','apple']

// const neew = fruit.splice(0,1,'big')

// console.log(neew)
// console.log(fruit)
 

// pallindrome checking

// let ne = 'malam';
// pal = true
// let st = ne.split('')

// for(i=0;i<st.length/2;i++){
//     if(st[i]!==st[st.length-i-1]){
//         pal = false;
//         break;
//     }
// }

// if(pal){
//     console.log('ok')
// }else{
//     console.log('not ok')
// }

//filter
// const no = [1,2,3,4,5,6,7,8,9,10]
// let even = no.filter(num => num%2!=0)
// console.log(even)

//find
// const no = [1,2,3,4,5,6,7,8,9,10]
// let firsteven = no.find(num => num%2==0)
// console.log(firsteven)

// (function add(){
//     console.log(1+3)
// }())

//nullish oprtr
// let username = "nulghfvhjl"
// let defualtname = null

// let intro = username ?? defualtname

// console.log(intro)

// (function add(){
//     console.log(2+3)
// }())


// callback
// function add(callback){
//     console.log(2+3)
//     callback()
// }
// function say(){
//     console.log("hi")
// }
// add(say)


//array destructuring
// const person = ['althaf','adnan']
// const[first,second]=person
// console.log(second)

//closure

// function greet(){
//     names()
//     console.log('good morning')
//     function names(){
//         console.log('althaf')
//     }
// }
// greet()


//promise
// const althaf = new Promise((resolve, reject) => {
//     const ali = false
//     if(ali){
//         resolve('success00')
//     }else{
//         reject('failed')
//     }
// })

// const adnan = new Promise((resolve, reject) => {
//     const ali = true
//     if(ali){
//         resolve('success11')
//     }else{
//         reject('failed')
//     }
// })

// const muju = new Promise((resolve, reject) => {
//     const ali = true
//     if(ali){
//         resolve('success22')
//     }else{
//         reject('failed')
//     }
// })

// Promise.allSettled([althaf,adnan,muju])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


//generator
// function *prnt(){
//     for(i=0;i<=100;i++){
//         if(i % 2 != 0){
//             yield i
//         }
//     }
// }
// const getnum = prnt() 

// for(let num of getnum){
//     console.log(num)
// }

// let person = { name: "John", age: 30 };
// const keey = Object.values(person)
// console.log(keey)


// const hey = add(()=>{console.log('hello')})
// console.log(hey)

// async function check(){
//     try{
//         const result = await new Promise((resolve, reject) => {
//             if(1+3==5){
//                 resolve('good')
//             }else{
//                 reject('bad')
//             }
//         })
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }
// check()

// const nums = [1,2,3,4,5,2,3,5,7,8,7,8]
// let arr = []

// for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]==nums[j]){
//             arr.push(nums[i])
//         }
//     }
// }

// console.log(arr)

// const person = {
//     name:'althaf',
//     age:18
// }
//                                                                  ///shallowcopy
// const newperson=person
// newperson.name="fina"
// console.log("shallow",person);

 
// const obj={
//     names:"fina",
//     age:12                                                          //deepcopy
// }
// const deepcopy=JSON.parse(JSON.stringify(obj))
// deepcopy.names="sherin"
// console.log("original object is ",obj);
// console.log("deep copy is ",deepcopy);


// const word = 12321
// const ne = word.toString().split('')
// pal = true
// for(let i=0;i<ne.length/2;i++){
//     if(ne[i]!=ne[ne.length-i-1]){
//         pal = false
//         break;
//     }
// }
// if(pal){
//     console.log('yes')
// }else{
//     console.log('no')
// }

// const person = {
// }
// const keey = Object.keys(person).length
// if(keey>0){
//     console.log('yes');
// }else{
//     console.log('no');
// }
// console.log(keey)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let first = -Infinity
// let second = -Infinity
// const seclar = arr.reduce((acc,cur)=>{
//     if(cur>first){
//         second=first;
//         first=cur
//     }else if(cur>second&&cur!=first){
//         second=cur;

//     }
//     return acc
// },null)
// console.log(first)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let evens = arr.filter((num)=>{
//     return num%2!=0;
// })

// console.log(evens)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = arr.reduce((acc,cur)=>{
//     return acc=acc+cur
// })
// console.log(sum)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const newar = arr.map((num)=>{
//     return num+1
// })
// console.log(newar);

//  const arr = [1,2,3,4,5,6,7,8,9,10]
//  let shl = [2,3,4,...arr,43,56,76]
//  console.log(shl)

// function *nums(){
//     for(let i=0;i<=100;i++){
//         if(i%2==0n b){
//             yield i
//         }
//     }
// }
// const getr = nums()
// for(let num of getr){
//     console.log(num)
// }

// const person = {
//     name:'althaf',
//     age:18,
//     details:{
//         place:'kdy'
//     }
// }
// console.log(person.details?.place)

// const person = {
//     name: 'John',
//     greet: function(age) {
//         console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
//     }
// };
// const anotherPerson = { name: 'Jane' };
// person.greet.call(anotherPerson, 25);

// const person = {
//     name: 'John',
//     greet: function(age, country) {
//         console.log(`Hello, my name is ${this.name}, I am ${age} years old and I am from ${country}.`);
//     }
// };

// const anotherPerson = { name: 'Jane' };

// person.greet.apply(anotherPerson, [25, 'USA']);


// const person = {
//     name: 'John',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// };

// const anotherPerson = { name: 'Jane' };

// const greetJane = person.greet.bind(anotherPerson);
// greetJane();


