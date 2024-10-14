//Objects singleton/Objects using constructor
//const tinderUser=new Objects()//-->singletone objects
const tinderUser={}//-->non singletone objects
tinderUser.id=12334
tinderUser.name='Koya'
tinderUser.isfemale=true
//console.log(tinderUser)
const user={name:"Rohini",
    email:"rohini@gmail.com",
    qualification:{
        job:{
            company:"tcs",
            exp:3
        }
    }
}
console.log(user.qualification);//{ job: { company: 'tcs', exp: 3 } }
//optional chaining if qualifictaion doesnt exist ?-->

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=obj1.concat(obj2)//error
//const obj3={obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }obj inside obj
const obj3 =Object.assign({},obj1,obj2)//-->{}  optional to combine all values,so that first is target and rest are source
console.log(obj3);

const obj4={...obj1,...obj2}
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//if coming from database it will come as array
const users=[{
    id:1,
    name:"heena"
},
{
    id:2,
    name:"meena"
}]
console.log((users[0].name));//heena
console.log((Object.keys(tinderUser)));//array of keys of tinderUser object-->[ 'id', 'name', 'isfemale' ]
console.log((Object.values(tinderUser)));//array of values of tinderUser object-->[ 12334, 'Koya', true ]
console.log((Object.entries(tinderUser)));//key and value as array [ [ 'id', 12334 ], [ 'name', 'Koya' ], [ 'isfemale', true ] ]
console.log(tinderUser.hasOwnProperty("isHappy"));//if value doesnt exist false

//Destructing of objects
const course={
    coursenam:"js hindi",
    price:444,
    courseTeacher:"Neha"
}
console.log(course.coursenam)
//syntax to avoid multiple course.keyname

const {courseTeacher}=course;
console.log(courseTeacher);
//or
const {courseTeacher:inst}=course;
console.log(inst);

//we can use this in react as well

//API
//json is same as json but without name

//{"name":"Ishitha",
//    "age":"23"
//}






