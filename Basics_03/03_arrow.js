const user={
    username:"Paddu",
    price:3330,
    welcome:function(){
        console.log(`${this.username}, Welcome to website`);
        //to  take current context //to access all the vaiables inside this scope we use keyword this
        console.log(this);//{ username: 'Koana', price: 3330, welcome: [Function: welcome] }

    }
}
user.welcome()//Paddu, Welcome to website
user.username="Koana"
user.welcome()//Koana, Welcome to website
//this here is current context/values 
console.log(this);//{} bcs inside node envi(node engine) where global is empty, if its in browser engine then it will give window globalobject events


//Arrow func
function chai(){
    console.log(this);
    
}
chai()/*<ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeo...*/


const chai2=function(){
   console.log(this.username);//undefined
   
}
chai2()


const chai3=()=>{//arrow func
    console.log(this.username);//undefined
    console.log(this);//{} this doesnt work inside arrow func

 }
 chai3()

//Implict return //Emplicit is with return statement
 const addtwo=(val1,val2)=> val1+val2//undefined
//if wrapping inside{} then have to write return , if() then return not needed
console.log(addtwo(2,5));//7



const user2=(val1,val2)=> {name:"Nano"}//undefined
console.log(user2(2,5));
const user3=(val1,val2)=>({name:"Nano"})//{ name: 'Nano' } in order to return {} is needed
console.log(user3(2,5));


 