// Data collections
// this way is fine
let name1="John"
let name2="Abigail"
let name3="Jerome"

let greeting1="Hello, "+name1 + "!"
let greeting2="Hello, "+name2 + "!"
let greeting3="Hello, "+name3 + "!"

console.log(greeting1)
console.log(greeting2)
console.log(greeting3)

// this ways is better (using an array)
const names=["John", "Abigail", "Jerome"];
const greetings=[];
for (let i=0; i<names.length; i++) {
    greetings[i]="Hello, " + names[i] + "!";
    console.log(greetings[i]);
}

// exercise: accessing elements of an array

let movies=["the lion king", "sister act 2", "dreamgirls", "bring it on"];
let firstMovie=movies[2]; // the number is position that the movie is in starting with 0
console.log(firstMovie) 
console.log(movies.length); // movies.length is how many movies are in the brackets

// populating an array by index
movies[1]="sister act 2";
movies[10]="shrek";
movies[movies.length]= '';
console.log(movies);
console.log(movies[6]);

// manipulating array length 
// if you set the movie.length higher than your list it will add empty elements to the end

// movies.length=50;
// console.log(movies);

// array iteration
// arrays always start at 0 and never 1!

for(let x=0; x<=movies.length; x++) {
    console.log(movies[x]);
} // this is undefined

                //Array Methods 
// concat() joining arrays together
// The concat() method allows us to quickly join two or more arrays together into a single array:

let yourMovies=["crooklyn", "wedding singer", "shrek"];
let myMovies=["sister act 2", "dreamgirls", "bring it on"];

let ourMovies=yourMovies.concat(myMovies);
console.log(ourMovies);

// You can also use this to repeat arrays by passing them into the concat method multiple times:

let yourMoviesManyTimes=yourMovies.concat(yourMovies, myMovies, yourMovies, myMovies)
console.log(yourMoviesManyTimes);

// join() turning arrays into strings
// The join() method allows us to turn all of the elements of an array into a single string. 
// The join() method accepts a delimiter that will be used to join the array elements together:

let movieString=myMovies.join(" and ");
console.log(movieString + " are the best");

                // Arrays and Object
// object syntax
// While arrays are declared using square brackets const arr = [];, 
// objects are declared using curly braces const obj = {};.

const vehicle= {
    color: "blue",
    hp: 4000, 
    year: 1989,
    engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}

}
console.log(vehicle["color"]);
console.log(vehicle.hp);

// Changing Object Properties and Values
// The delete keyword can also be used to remove properties.

vehicle.color = "red"; // changing an existing property value
vehicle.make = "Audi"; // adding a new key:value pair
delete vehicle["active registration"]; // removing an existing property

console.log(vehicle); // {color: 'red', hp: 4000, year: 1989, make: 'Audi'}

// Iterating through Objects
// We can iterate through objects very similarly to arrays using the for...in loop.

for (const key in vehicle) {
	console.log(vehicle[key]);
}   
// Note that we must use square bracket notation to access the vehicle properties using key, because key is a variable, not a literal. Trying to use vehicle.key would attempt to access a property named key, which does not exist within our vehicle object.

// Object Methods
// Objects can be much more complex than arrays, especially when nested with other objects:

console.log(vehicle.engine.hp);