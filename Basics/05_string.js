let name='neha'
const count=30 
const stringName=new String('sheela')
console.log(stringName)//-->String {'Sheela'}
console.log(stringName.__proto__)//-->prortotypes give method names in console
console.log(stringName.length)//6

console.log(stringName.toUpperCase())//SHEELA
console.log(stringName.charAt('4'))//l
console.log(stringName.indexOf('l'))//4
const subdtring=stringName.substring(0,2)//sh
console.log(subdtring);
const newstring=stringName.slice(-6,4)//shee
console.log(newstring)
console.log(('   hi   ').trim())//hi
console.log(stringName.replace('e','i'))//shiela
console.log(stringName.replaceAll('e','i'))//shiila
console.log(stringName.includes('e'))//true
name='n_e_h_a'
console.log(name.split('_'));//[ 'n', 'e', 'h', 'a' ]



//console.log(name+count);
console.log(`Helllo my name is is ${name} and my repo count is ${count}`)//string interpolation
