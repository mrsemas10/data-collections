// JavaScript Objects

const student = {
    firstName: "Jack",
    rollNo: 32 
};

console.log(student); // { firstName: 'Jack', rollNo: 32 }

// Create JavaScript Objects
// The syntax of JavaScript object is:
// const objectName = {
//     key1: value1,
//     key2: value2,
//     ...,
//     keyN: valueN
// };

// Example 1: JavaScript Objects
// create person object
const person = {
    name: "Erica",
    age: 37
};
console.log(person);
// Access Object Properties

// using dot notation
const dog = {
    name: "Rocky",
};
console.log(dog.name);

// using bracket notation
const cat = {
    name: "Luna",
};
console.log(cat["name"]);

// JavaScript Object Operations

// 1. Modify Object Properties
const person1 = {
    name: "Bobby",
    hobby: "Dancing",
};

// modify property
person1.hobby = "Singing";

// display the object
console.log(person1);

// 2. Add Object Properties
const student1 = {
    name: "John",
    age: 20,
};

// add properties
student1.rollNo = 14;
student1.faculty = "Science";

// display the object
console.log(student1);

// 3. Delete Object Properties
const employee = {
    name: "Tony",
    position: "Officer",
    salary: 30000,
};

// delete object property
delete employee.salary

// display the object
console.log(employee);

// JavaScript Object Methods
const person2 = {
    name: "Bob",
    age: 30,

    // use function as value (dont quite understand this)
    greet: function () {
        console.log("Bob says Hi!");
    }
};
// call object method
person2.greet();  // Bob says Hi!

// JavaScript Nested Objects
// outer object student
const student3 = {
    name: "John",
    age: 20,

    // contains another object marks
    marks: {
        science: 70,
        math: 75
    }
};
console.log(student3); // Output: { name: 'John', age: 20, marks: { science: 70, math: 75 } }

// Access Properties of Nested Objects
// use dot notation
console.log(student3.marks.science);  // 70

// use bracket notation
console.log(student3["marks"]["math"]);  // 75