   const heroes=["ironman","thor","spiderman"]
   const dc=["superman","batman","flash"]
// heroes.push(dc)
// console.log(heroes);//gives nested array [ 'ironman', 'thor', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(heroes[3][1]);


const hero=heroes.concat(dc)
console.log(hero);//[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

const allnewheaoes=[...heroes,...dc]//spread operator
console.log(allnewheaoes);

