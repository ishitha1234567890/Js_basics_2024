console.log(2>1)//true;
console.log(2!=1)//true
console.log('2'>1)//true-->automatically converts into number

//pls avoid such comparsion
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true--->value conversion not correct
console.log(undefined>0)//false
console.log(undefined<0)//false
console.log(undefined==0)//false
console.log(undefined>null)//false
console.log(null>undefined)//false
console.log(null==undefined)//true
 
//strict check with datatype
console.log('2'===2)//false