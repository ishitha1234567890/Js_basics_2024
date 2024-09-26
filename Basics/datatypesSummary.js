 /*Largely divided into two parts based on how data is stored in memory and retrived
 1.Primitive(call by value)
 2.Non primitve/Reference type(call by reference)
 */
// 1.Primitive(call by value)-->string,Number,Boolean,Null,Undefined,Symbol,BigInt

console.log(typeof null);//type of value is object
const id=Symbol("1233");//type of value is symbol
const id2=Symbol("1233");
console.log(id==id2);
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
