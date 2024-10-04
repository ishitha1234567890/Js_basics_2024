//arrays
const myarr=[1,2,3,4,5];//each is called elements
//Js arrays are resizbale and mix of diff datatype,arrays cannot be accessed by value can be acccessed by index only starting from 0
//array copy operation only gives shallow copies
console.log(myarr[3]);
// A shallow copy occurs when you copy the reference of an object to a new variable. In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.
// A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely independent.


//Methods
const myheros=["matarani","maiya rani","Radaha rani"]
const myarr2=new Array(1,2,3,35,6)
//consoling array also give protoypes
myarr.push(6) //adds 6
console.log(myarr);
myarr.pop()//removes last value
console.log(myarr);//[ 1, 2, 3, 4, 5 ]
myarr.unshift(0)//adds 0 at start
console.log(myarr);//[ 0, 1, 2, 3, 4, 5 ]
myarr.unshift(9)//adds 9 array start
console.log(myarr);//[
    //9, 0, 1, 2,
   // 3, 4, 5
 // ]
 myarr.shift()//removes first value
console.log(myarr);//[ 0, 1, 2, 3, 4, 5 ]

console.log(myarr.includes(3));//gives true or false boolean -->true
console.log(myarr.indexOf(-1));//-1
console.log(myarr.indexOf(3));//3
const myarr3=myarr.join()
console.log(myarr3)//0,1,2,3,4,5-->datatype is converted to string
//[ 6,7,8,9]

//Slice vs splice
console.log('A',myarr);
const sliceVal=myarr.slice(1,3)//Returns a copy of a section of an array.
console.log('B',sliceVal);//B [ 1, 2 ]-->starts from index 1 till 3 and remove 3,
console.log('A',myarr);


console.log('A',myarr);
const spliceVal=myarr.splice(1,3)//Returns a copy of a section of an array.
console.log('B',spliceVal);//B [ 1, 2 ]-->starts from index 1 till 3,range is inclued and values from original array also removed
console.log('A',myarr);








