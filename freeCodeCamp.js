// JavaScript Array Tutorial – Array Methods in JS freeCodeCamp

// Create an Array
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

// Array Indexing
console.log(nobleGases[2]);
console.log(nobleGases[4]);
// console.log(nobleGases[5]); undefined bc there is no 5th element

nobleGases[5] = 'Rn';// we easily assign the 5th value
nobleGases[5] = 'Rn';
nobleGases[5] = 'Rn';
console.log(nobleGases);

// Length property using dot notation
console.log(nobleGases.length); // 6 because we added Rn

// Mulitdimensional arrays (this one i do not understand)
let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];

console.log(elements[0]); // [['H', 'Li', 'Na'], ['Be', 'Mg']]
console.log(elements[0][0]); // ['H', 'Li', 'Na']
console.log(elements[0][0][0]); // 'H

// Sparse Arrays
// there is an extra comma between Na and K which causes an empty value
let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
console.log(firstGroup); // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs']

// Increasing the length property
firstGroup.length = 11;
console.log(firstGroup); // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 4]

// Assigning an element to an index greater than the length
firstGroup[15] = 'Fr';
console.log(firstGroup); // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 8, 'Fr']

// How to compare arrays
let dough1 = ['flour', 'water', 'yeast', 'salt'];
let dough2 = ['flour', 'water', 'yeast', 'salt'];

dough1 === dough2; // false

let dough3 = ['flour', 'water', 'yeast', 'salt'];
let dough4 = dough3;

dough3 === dough4; // true

const compareArr = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    } 
    for (let i = 0; i < arr1.length; i++) {
    	if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
};

// how to use a spread operator
let alkali = ['Li', 'Na', 'K'];
let alkEarth = ['Be', 'Mg', 'Ca'];

// Merging two arrays with the spread operator
let metals = [...alkali, ...alkEarth];
console.log(metals); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

// Copying an array with the spread operator
let metalsCopy = [...metals];
console.log(metalsCopy); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

// how to use the rest parameter

function f1(first, second, third, ...others) {
	console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);
};

f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'); 
// He
// Ne
// Ar
// ['Kr', 'Xn', 'Rn']

// Deconstructing Assignment
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
let [firstRow, secondRow,,FourthRow] = nobleGases;
console.log(firstRow); // 'He'
console.log(secondRow); // 'Ne'
console.log(FourthRow); // 'Kr'
// 'Ar' is skipped because of the additional comma

// Common Array Methods: arrays are objects and possess properties and methods
// how to add and remove elements from an array

// How to Use the push() Method (adding to the end of the array)
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases[5] = 'Rn';
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases.push('Rn'); // 6
// push() returns the length of the modified array
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// adding multiple elements with push()
let halogens = ['F', 'Cl'];
console.log(halogens); // ['F', 'Cl']

halogens.push('Br', 'I', 'At'); // 5
// push() returns the length of the modified array
console.log(halogens); // ['F', 'Cl', 'Br', 'I', 'At']

// How to Use the unshift() Method (adds to the beginning of an array and returns the length of the modified array.)
let halogens1 = ['F', 'Cl'];
console.log(halogens1); // ['F', 'Cl']

halogens1.unshift('Br', 'I', 'At'); // 5
// unshift() returns the length of the modified array
console.log(halogens1); // ['Br', 'I', 'At', 'F', 'Cl']

// How to Use the pop() Method (If you need to remove the last element of an array, you can use the pop() method.)
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

nobleGases.pop(); // 'Rn'
// pop() returns the removed element
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

// How to Use the shift() Method (Similarly, the shift() method removes the first element from an array and returns it.)
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

nobleGases.shift(); // 'He'
// shift() returns the removed element
console.log(nobleGases); // ['Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// How to Use the splice() Method (If you need to remove one or more elements from a specific position of an array, you can use the splice() method.)
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

nobleGases.splice(1, 3); // ['Ne', 'Ar', 'Kr']
// splice() returns an array with removed elements
console.log(nobleGases); // ['He', 'Xn', 'Rn']
// So .splice(1, 3) means "start at index = 1 and remove 3 elements". The method returns an array containing the elements removed from the original array.

// How to Combine Arrays

// How to Use the concat() Method
let alkali2 = ['Li', 'Na', 'K'];
let moreAlkali = ['Rb', 'Cs', 'Fr'];
let alkEarth2 = ['Be', 'Mg', 'Ca'];

alkali2.concat(moreAlkali);
// ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

alkali2.concat(moreAlkali, alkEarth2);
// ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Be', 'Mg', 'Ca']

// How to Use the push() Method & the Spread Operator
let alkali3 = ['Li', 'Na', 'K'];
let moreAlkali2 = ['Rb', 'Cs', 'Fr'];
let alkEarth3 = ['Be', 'Mg', 'Ca'];

alkali3.push(...moreAlkali2); // 6
console.log(alkali3); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

// How to Convert an Array into a String

// How to Use the toString() & join() Methods
let animals = ['pig', 'dog', 'sheep'];

animals.toString(); // 'pig,dog,sheep'
animals.join(', '); // 'pig, dog, sheep'
animals.join(' '); // 'pig dog sheep'
animals.join(' * '); // 'pig * dog * sheep'

// How to Search Inside an Array

// How to Use the includes() Method
let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

dMinor.includes('E'); // true
dMinor.includes('E', 2); // false

// How to Use the indexOf() Method
dMinor.indexOf('E'); // 1
dMinor.indexOf('E', 2); // -1

// How to Use the find() & findLast() Methods
let animals2 = [
    {no: 1, track: 'Pigs on the Wing (Part One)'},
    {no: 2, track: 'Dogs'},
    {no: 3, track: 'Pigs (Three Different Ones)'},
    {no: 4, track: 'Sheep'},
    {no: 5, track: 'Pigs on the Wing (Part Two)'}
];

animals2.find(el => el['track'].includes('Pigs'));
// {no: 1, track: 'Pigs on the Wing (Part One)'}

animals2.findLast(el => el['track'].includes('Pigs'));
// {no: 5, track: 'Pigs on the Wing (Part Two)'}

animals2.find(el => el['track'].includes('Horses'));
// undefined

// How to Use the findIndex() & findLastIndex() Methods
animals2.findIndex(el => el['track'].includes('Pigs')); // 0

animals2.findLastIndex(el => el['track'].includes('Pigs')); // 4

animals2.findIndex(el => el['track'].includes('Horses')); // -1

// How to Check if Array Elements Meet a Condition

// How to Use the every() & some() Methods
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

nobleGases.every(el => typeof el == 'string'); // true
nobleGases.some(el => el == 'Ar'); // true
nobleGases.some(el => el == 'Rn'); // false

// How to Use the filter() Method
animals.filter(el => el['track'].includes('Pigs'));
// [
// {no: 1, track: 'Pigs on the Wing (Part One)'},
// {no: 3, track: 'Pigs (Three Different Ones)'},
// {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ]

// How to Sort an Array
// How to Use the sort() Method

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];

// sorting in ascending order
nobleGases.sort((a, b) => {
   return a === b ? 0 : a > b ? 1 : -1; 
}); 
// ['Ar', 'He', 'Kr', 'Ne', 'Rn', 'Xn']

// sorting in descending order
nobleGases.sort((a, b) => {
   return a === b ? 0 : a < b ? 1 : -1; 
});
// ['Xn', 'Rn', 'Ne', 'Kr', 'He', 'Ar']

// How to Perform an Operation on Every Array Element

// How to Use the map() Method
let tracks = animals.map(el => el['track']);

console.log(tracks); // ['Pigs on the Wing (Part One)', 'Dogs', 'Pigs (Three Different Ones)', 'Sheep', 'Pigs on the Wing (Part Two)']

// How to Use the forEach() Method
animals.forEach(el => delete el['no']); // it returns undefined

console.log(animals); 
// [
//   {track: 'Pigs on the Wing (Part One)'},
//   {track: 'Dogs'},
//   {track: 'Pigs (Three Different Ones)'},
//   {track: 'Sheep'},
//   {track: 'Pigs on the Wing (Part Two)'}
// ]

// How to Use the reduce() Method
let countPigs = animals.reduce((count, el) => {
	return el['track'].includes('Pigs') ? count + 1 : count
	}, 0);

console.log(countPigs); // 3