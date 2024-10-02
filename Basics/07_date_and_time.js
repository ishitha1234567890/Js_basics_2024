//Date
let mydate=new Date()//instanse
console.log(mydate);//2024-10-02T18:19:27.587Z

console.log(mydate.toString());//Wed Oct 02 2024 23:49:27 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());//Wed Oct 02 2024
console.log(mydate.toISOString());//2024-10-02T18:21:06.243Z
console.log(mydate.toJSON());//2024-10-02T18:21:06.243Z
console.log(mydate.toLocaleString());//2/10/2024, 11:51:06 pm
console.log(mydate.toLocaleDateString());//2/10/2024
console.log(mydate.toTimeString());//23:51:06 GMT+0530 (India Standard Time)
console.log(mydate.toUTCString());//Wed, 02 Oct 2024 18:21:06 GMT

let mynewdate=new Date(2024,9,23)
console.log(mynewdate.toDateString());

let mynewdate2=new Date(2024,9,23,5,3)
console.log(mynewdate2.toLocaleString());


let mynewdate3=new Date("2024-10-23")
console.log(mynewdate3.toLocaleString());

let mynewdate4=new Date("11-23-2024")
console.log(mynewdate4.toLocaleString());

let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mynewdate4.getTime());

console.log(Math.floor(Date.now()/1000))

console.log(mynewdate.getDay());
console.log(mynewdate.getMonth());
console.log(mynewdate.getFullYear());

