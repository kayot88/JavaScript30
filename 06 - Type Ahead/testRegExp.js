const unformattedName = 'aaron.arney:alligator.io';
const unformattedNameTwo = 'montgomery.bickerdicke:alligator.io';
const unformattedNameThree = 'a.lila:alligator.io';


const exp = new RegExp(/[a-z]+/, 'ig')
const found = unformattedName.match(exp);
const foundTwo = unformattedNameTwo.match(exp);
const foundThree = unformattedNameThree.match(exp);

console.log(found);
// expected output: Array [ "aaron" ]

console.log(foundTwo);
// expected output: Array [ "montgomery" ]

console.log(foundThree);
// expected output: Array [ "a" ]