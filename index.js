// let app = require('./app');

// console.log(app.c());



// console.log("Hello Jeet Bhuva");

// let a =10;
// let b =20;
// let c =30; 

// console.log(a+b+c);

// let a = "20"
// if(a == 20){
//     console.log("Its A Match");
// };
// else {
//     console.log("Its Not A Match");
// };

// for(i=0;i<=10;i++){
//     console.log(i);
// };



// let arr = [7,8,9,4,5,6,7];

// const array = arr.filter((e)=>{
//     return e <= 7
// });
// console.log(array);



// const http = require('http');

// http.createServer((req , resp) =>    
// {
//     resp.write("<h1>Hello, Jeet Bhuva </h1>");
//     resp.end();
// }).listen(4000);


// var colors = require('colors');

// console.log('hello'.bgYellow); 


// const http = require('http');
// const deta = require('./deta');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type': 'text\json'});
//     resp.write(JSON.stringify(deta));
//     resp.end();
// }).listen(5000);


// console.log(process.argv[2]);

// console.log("Hello");

// setTimeout(()=>{
//     console.log("Jeet");
// },2000);

// console.log("Bhuva");


// let a = 10;
// let b = 0;


// let detawait = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(100)
//     }, 2000);
// })

// detawait.then((deta) => {
//     b = deta;
//     console.log(a + b)
// })



// console.log("Hello Jeet ");

// setTimeout(()=>{
//     console.log("Helloo Parth");
// },2000);

// setTimeout(() => {
//     console.log("Hellooo Jeegar");
// }, 0);

// console.log("Helloooo Kesari");

// const express = require('express')
// const app = express()


// app.get('', function (req, res) {
//     res.send(`
//     <h1>Hello World</h1>
//     <a href="/contect">Go To Contect</a><br>
//     <a href="/about">Go To About</a>
//     `)
// }) 

// app.get('/about', function (req, res) {
//     res.send(`
//     <input type="text" placeholder="User Name" value="${req.query.name}" />
//     <button>~ Click Me ~</button><br><br>
//     <a href="/">Go To Home Page</a>
//     `)
// })

// app.get('/contect', function (req, res) {
//     res.send(`[
//         {
//             name:"Jeet",
//             Email:"bhuvajeet@gmail.com",
//             City:"Surat"
//         },
//         {
//             name:"kevin",
//             Email:"kevin@gmail.com",
//             City:"Surat"
//         },
//         {
//             name:"raj",
//             Email:"raj@gmail.com",
//             City:"Surat"
//         }
//     ]<br><a href="/">Go To Home Page</a>`)
// })

// app.listen(6060);

const express = require('express')
// const path = require('path')
const app = express()

console.log(__dirname)

// const publicpath = path.join(__dirname,'public')

// app.use(express.static(publicpath))


app.listen(8080);