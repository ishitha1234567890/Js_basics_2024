 const score=200//explicity
const balance=new Number(200);//implicitly
console.log(balance)//[Number: 200]
console.log(balance.toString().length)//3
console.log(balance.toFixed(2));//200.200
const values=23.8888
console.log(values.toPrecision(3))//23.9
const values2=123.8888
console.log(values2.toPrecision(3))//124
const values3=1123.8888
console.log(values3.toPrecision(3))//1.12e+3

const zeros=10000000
console.log(zeros.toLocaleString())//10,00,000
console.log(zeros.toLocaleString('en-IN'))//10,00,000


///////////////////////////////////////Maths///////////////////////////////////////
//By default librabry in javascript
console.log(Math)//Object [Math] {}-->gives all properties
console.log(Math.abs(-5));//5
console.log(Math.round(4.3));//4
console.log(Math.round(4.5));//5
console.log(Math.round(4.8));//5

console.log(Math.ceil(4.8));//5
console.log(Math.floor(4.8));//4

console.log(Math.min(4,8));//4
console.log(Math.max(4,8));//8

console.log(Math.random());//random val btw 0-1
console.log(Math.random()*10);//random val btw 0-10
console.log((Math.random()*10)+1);//random val btw 1-10
const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));
















