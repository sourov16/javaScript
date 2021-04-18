const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);



// Map::
// numbers.map(function(element, index, array) {
//     console.log(element, index, array);
// })



// const result = numbers.map(function(element) {
//     return element  * element;
// })

// const result = numbers.map(x => x*x);
// console.log(result);

const students = [
    {id: 24, name: 'joy'},
    {id: 21, name: 'hridoy'},
    {id: 22, name: 'sourov'},
    {id: 19, name: 'roni'},
];

// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const names = element.name;
//     output.push(names);  
// }
// console.log(output);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 21);
const biggerOne = students.find(s => s.id > 21);
console.log(biggerOne);



// Filter::
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);



// Find::
// const isThere = numbers.find(x => x > 5);
// console.log(isThere);










