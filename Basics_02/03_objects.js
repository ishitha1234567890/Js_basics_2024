
/*In JavaScript, there is a distinction between functions and methods, but they are closely related.
A function is any block of code that can be invoked (called) using its name.
A method is simply a function that is a property of an object. In other words, when a function is defined inside an object, it is referred to as a method.

//In JavaScript, objects can be created in two primary ways: using object literals and constructor functions.*/



/*Object Literal is ideal for creating a single object with specific properties.
Object literals are a straightforward way to define an object using curly braces {}. This method is simple and concise.
When object made from constructor then singleton is formed
Object literal*/
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    start: function() {
      console.log('Car started');
    }
  };
  
  console.log(car.make); // Output: Toyota
  car.start(); // Output: Car started
  
/*Constructor Function allows for creating multiple instances of an object with shared structure and behavior.
Using a constructor function, you can create multiple instances of an object with similar properties.
Constructor functions act like a blueprint for objects and are called using the new keyword.
When object is made from literals then singleton is not formed
 Constructor function*/
function Car(make, model, year) {
    this.make = make;// this refers to the newly created object. So, this.make assigns the make parameter to the make property of the object.
    this.model = model;
    this.year = year;
    this.start = function() {
      console.log('Car started');
    };
  }
  
  // Create instances
  const car1 = new Car('Toyota', 'Corolla', 2020);// This creates a new object, where the make property is set to 'Toyota', the model property to 'Corolla', and the year property to 2020.
  const car2 = new Car('Honda', 'Civic', 2021);
  
  console.log(car1.make); // Output: Toyota//Accessing a property
  car2.start(); // Output: Car started//Calling a method:
  /*In this case, the function being invoked is referred to as a method because it's a property of an object. 
  If the function was declared outside the object and used on its own, it would simply be called a function.*/

//------------------------------objects using literals--------------------------------
const mysymb=Symbol("key1")
//symbol declare or add as key


//object creation
const jsuser={name:"neha",
    "lastname":"Rawat",//this value cannot be accessed through .lastname can only be found from [] notation
   // mysymb:"mykey1", wrong way this will show it as a string 
   [mysymb]:"mykey2",// this will print as [Symbol(key1)]:'mykey2'
    age:23,
    location:"Hyd",
    isShe:true,
    lastLoginDate:[2,17,23]
}
//accesing of object
console.log(jsuser.location);//no need to give as string 
console.log(jsuser["location"]);//need to send as string
console.log(typeof jsuser.mysymb);//op is mykey1 but datatype is not symbol it is string
console.log(jsuser[mysymb]);//mykey2
console.log(typeof (jsuser[mysymb]));//op is mykey1 and dataype as string


//changing of values
jsuser.lastname="R"
console.log(jsuser["lastname"]);

//to lock value so that nobody can change
//Object.freeze(jsuser)
jsuser.lastname="RR"
console.log(jsuser["lastname"]);//still R

//how to add func inside object
//func in js is added as variable

jsuser.greeting=function(){console.log("Hello user");
}
console.log(jsuser.greeting);//undefined//[Function (anonymous)]//func reference is returned back
console.log(jsuser.greeting());//Hello user //undefined


jsuser.greeting2=function(){
    console.log(`Hello user, ${this.name}`);//when you want refernece the same object then we use this
}
console.log(jsuser.greeting2());//Hello user, neha






