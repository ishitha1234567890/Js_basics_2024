   const heroes=["ironman","thor","spiderman"]
   const dc=["superman","batman","flash"]
// heroes.push(dc)
// console.log(heroes);//gives nested array [ 'ironman', 'thor', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(heroes[3][1]);


const hero=heroes.concat(dc)
console.log(hero);//[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

const allnewheaoes=[...heroes,...dc]//spread operator
console.log(allnewheaoes);//[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

const newarr=[1,2,3,[4,5,6],7,['Hi',6,7,[4,5]]]
const realarr=newarr.flat()///if no number passed it will give 1 depth array ..give number to specify how
console.log(realarr);//[ 1, 2, 3, 4, 5, 6, 7, 'Hi', 6, 7, [ 4, 5 ] ]
//const realarr=newarr.flat(Infinity)///does it automatically


console.log(Array.isArray("neha"));//check if array or not-->false
console.log(Array.from("neha"));//to convert into array-->[ 'n', 'e', 'h', 'a' ]
console.log(Array.from({name:"neha"}));//object to convert into array-->null you have to specfic to make array of keys or values
console.log(Array.from({name:"neha"}));//object to convert into array-->null you have to specfic to make array of keys or values


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//of  returns a new array from set of elements
//[ 100, 200, 300 ]



