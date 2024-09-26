let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


console.log('--------Operations--------')
let v=9;
console.log(-v) //-9
console.log(2+2);//4
console.log(2-2);//4
console.log(2*2);//4
console.log(2**2);//4
console.log(6/2);//3
console.log(2%3);//2
console.log('Hello'+' '+'Neha');//Hello Neha
console.log('1'+2)//12
console.log('1'+'2')//12
console.log('1'+2+2)//122
console.log(1+2+'2')//32
//use parathases

console.log(true)//true
console.log(+true)//1
//console.log(true+) error
console.log(+"")//0

let a,b,c
a=b=c=4

let g=100
g++;
console.log(g)

let j=100
++j;
console.log(j)


let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
//x still 3 bcs value is incremented after value declaration

let aa = 3;
const bb = ++aa;
console.log(`a:${aa}, b:${bb}`);
// Expected output: "a:4, b:4"
//x still 4 bcs value is incremented before value declaration


