 /*Largely divided into two parts based on how data is stored in memory and retrived
 1.Primitive(call by value)
 2.Non primitve/Reference type(call by reference)
 */
// 1.Primitive(call by value)-->string,Number,Boolean,Null,Undefined,Symbol,BigInt

console.log(typeof null);//type of value is object
const id=Symbol("1233");//type of value is Symbol
const id2=Symbol("1233");
console.log(id==id2);//false
const BigIntval=12334223423423423n;
console.log(typeof BigIntval);//type of value is BigInt


//2.Non primitve/Reference type(call by reference)-->Arrays,Objects,Functions

const a=["hi",1]
console.log(typeof a);//object

const ob={name:"meena",age:39};
console.log(typeof ob);//object

const myFunc=function(){
    console.log('hi')
}
myFunc();
console.log(typeof myFunc);//func object



/*Call by Value: A copy of the value is passed. Changes to the copy do not affect the original.
Call by Reference: A reference to the original object is passed. Changes to the reference do affect the original object.
*/

let aa = 10;

function modifyValue(x) {
    x = 20;
}

modifyValue(aa);
console.log(aa); // Output: 10 (Original value is not changed)



let obj = { name: "Alice" };

function modifyObject(o) {
    o.name = "Bob";
}

modifyObject(obj);
console.log(obj.name); // Output: Bob (Original object is changed)


//STACK VS PRIMITVE
 let myyname='hellobello'
 let nyname=myyname
 nyname='hibi'
 console.log(myyname);
 console.log(nyname);


 let mystyle={style:"style1"}
 let nystyle=mystyle
 nystyle.style="style2";
 console.log(mystyle.style);
 console.log(nystyle.style);



