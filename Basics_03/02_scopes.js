let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);

//{}-->scope of a program -func,if else then var are under scopes
//{} as object then object declaration
if(true){
    //Block scope
    let a=100
const b=200
var c=300
d=400
}
//Global scope
console.log(a);//10
console.log(b);//20
console.log(c);//300
console.log(d);//400

//In browser console scope and global scope in node are different


//Nested scope
function one(){
    const user='Neha'
    function two(){
        const age=23
        console.log(user);
        
    }
    //console.log(age);//error
 two()//neha
}
one()
//inner func can access outer func but outer func cant acces inner this is called as nested scope

if(true){
    const user='piyu'
    if(user=='piyu'){
        const age=23
        console.log(user+age);//piyu23
        
    }
    //console.log(age);//error
    
}
//console.log(user);//error




//************************************************Intresting//************************************************ 
//functions
console.log(addOne(17))//no error 18
function addOne(value){
       return value+1
}
addOne(17)


//Also function  but also called expressions 
//console.log(addtwo(5))//this gives error-cannot access addtwo before intilization
const addtwo=function(value){
    return value+2
}
addtwo(5)