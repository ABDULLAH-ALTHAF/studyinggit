// function a (callback){
//     return callback();
// }
// function say(){
//     return 'hello';
// }
// console.log(a(say))


// const ar = [1,2,3,4,5]
// let doubled = ar.map((num)=>{
//     return num*2;
// })
// console.log(doubled)


// const ar = [1,2,3,4,5]
// let doubled = ar.filter((num)=>{
//     return num<4;
// })
// console.log(doubled)


// const ar = [[1,2],[3,4],[5]]
// let doubled = ar.reduce((acc,cur)=>{
//     return acc.concat(cur) ;
// })
// console.log(doubled)


// const array = [1,2,3]
// const newarray = [4,5,...array]
// console.log(newarray)
// console.log(array)

// function sum(...nums){
//     return nums.reduce((acc,cur)=>acc+cur,0)
// }
// console.log(sum(1,2,3,4,5,))

// function sum(mult,...nums){
//     return nums.map(num=>num*mult)
// }
// console.log(sum(2,1,2,3,4,5))
//in this case the first use as mult and then the valuse to array

// const [first,...rest] = [1,2,3,4,5]
// console.log(first)
// console.log(...rest)
// const newa = [...rest,5,6]
// console.log(newa)

// const person = {name:"althaf",age:17,place:"kondotty",batch:"bck198"}
// const {name,...rest} = person
// console.log(name)
// console.log(rest)

// const user = { name:'althaf',
//     address:{
//         place:'kondotty',
//         house:23
//     }
// }
// const placed = user?.address?.place
// console.log(placed)

// const user = { name:'althaf',
//     address:{
//         place:'kondotty',
//         house:23
//     }
// }
// const city = user?.address?.city
// console.log(city)

// promise 
// promise is used to handle asynchronus operations and that is a object when the operation done it will return a value
//if the operation succuss it resolve and if it fail it reject then it goes to another operation
// and also there is three state for promise 1.fullfilled 2.pending 3.rejected
// here is the basic promise prblm
// const althaf = new Promise ((resolve,reject)=>{
//     const number = true
//     if(number){
//         resolve('resolved brother')
//     }else{
//         reject('sorry rejected')
//     }
// })

// althaf.then(result=>{
//     console.log(result)
// }).catch(error=>{
//     console.log(error)
// })
//then method will handle the success and the catch method will handle the error 
//the benefits of promise = code reusability , better code readebility ,chaining we can do opereations one after one

//promise.all
// const althaf = Promise.resolve('first promise')
// const adnan = Promise.resolve('second promise')
// const sadik = Promise.reject('third promise')
// Promise.all([althaf,adnan,sadik])
// .then(result=>console.log(result))
// .catch(error=>console.log(error))
//in promise.all if all promise resolve it will give result as a array
//and also if any one reject all will reject that time 
//also it will show which one first rejected

//Promise.any
// const althaf = new Promise ((resolve,reject)=>setTimeout(resolve,3000,'ok byew'))
// const adnan = Promise.reject('second promise')
// const sadik = Promise.reject('third promise')
// Promise.any([althaf,adnan,sadik])
// .then(result=>console.log(result))
// .catch(error=>console.log(error))
//in promisse.any if any one promise resolve it shows result as which ids first resolved
//it never shows the second resolve becuase its checking only the first resolve 

//Promise.allSettled
// const althaf = Promise.reject('first promise')
// const adnan = Promise.resolve('second promise')
// const sadik = Promise.reject('third promise')
// Promise.allSettled([althaf,adnan,sadik])
// .then(result=>console.log(result))
// .catch(error=>console.log(error))
//in promise.allSettled it return the status of all promises like rejected or fullfilled or pending

//argument vs parameter
//parameter is used as placeholder of function which can replace with values when argument pass as values to these parameters through calling functions for example function add (a,b) 
//argument is used to give values to other parameter like if there is a function named fun and we calling it and also we passing values thorugh it like fun(1,2) the one and two is argument 

//object methods
//this key word
// const person = {
//     name:'althaf',
//     age:19,
//     greet:function (){
//         return `hello my dear ${this.name}`
//     }
// }
// console.log(person.greet())
//in this case we taked out a object of person(name) into greet function with use of [this] key word

//Object.keys
// const person = {
//     name:'althaf',
//     age:19,
//     greet:function (){
//         return `hello my dear ${this.name}`
//     }
// }
// const key = Object.keys(person)
// console.log(key)
//when we use Object.keys it list out the key names and return its as a array like ['name','age','greet']

//Object.values
// const person = {
//     name:'althaf',
//     age:19,
//     greet:function (){
//         return `hello my dear ${this.name}`
//     }
// }
// const value = Object.values(person)
// console.log(value)
//this will take the all values from this object and return as a arrayy

//Object.freeze
// const person = {
//     name:'althaf',
//     age:19,
// }
// Object.freeze(person)
// person.age = 34
// console.log(person.age)
//when we use this we cant change,add or delete properties or its values from object 
//we will can not modify

//Object.seal
// const person = {
//     name:'althaf',
//     age:19,
// }
// Object.seal(person)
// person.age = 34 // this will work
// delete person.name // this will not work
// console.log(person.age)
// const key = Object.keys(person)
// console.log(key)
//in this case we cant delete or add things to this object but we can modify exsisting properties

//node js ---------------------------------------------------------------------------------------------------------------------------------------

//disadvantages
//single threaded limitation
