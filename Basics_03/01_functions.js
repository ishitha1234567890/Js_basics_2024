//piece of code that forms a package whose copies can be used in multiple places.
//func defination
function funcName(){ 
console.log('Hi')

}

//funcName-->reference
//funcName()-->execution
funcName()//Hi

function addnumber(num1,num2){//num1 and num2 are paremeters
 console.log(num1+num2)
}

//1 and 3 are arguments
addnumber(1,3)//4
addnumber(7,'4')//74 
addnumber(7,'a')//7a to avoid this use datatype

const result=addnumber(1,3)
console.log('result:',result);//result: undefined


//Modified version
function addnumberagain(num1,num2){//num1 and num2 are paremeters
let res=(num1+num2)
return res
}
const results=addnumberagain(1,3)
console.log('result:',results);//result: 4
//return is last statement after that no statement is executed.


function loginUserMsg(username){//for default value function loginUserMsg(username="Jannat")
    return `Hi ${username} you have successfully logged in.`

}
console.log(loginUserMsg('Koaila'))//Hi Koaila you have successfully logged in.
console.log(loginUserMsg())//Hi undefined you have successfully logged in.






function shoppingCart(val1,val2,...num1){ //..rest operator here 
  return  num1 //[ 1, 1999, 44 ]
}
console.log(shoppingCart(12,323,1,1999,44))//[ 1, 1999, 44 ] without rest operator op was 1


//object in funcs
const user={
    username:"Jeeva",
    bill:399
}
function handleObjects(anyObjects){
    console.log(`Hi ${anyObjects.username} and you total bill is ${anyObjects.bill}`);
    
}
handleObjects(user)//Hi Jeeva and you total bill is 399
handleObjects({username:"M0hini",bill:499})//Hi M0hini and you total bill is 499


const mynewAarry=[200,277,2463]
function arrayFunc(getArray){
    return getArray[1]
}
console.log(arrayFunc(mynewAarry))//277


