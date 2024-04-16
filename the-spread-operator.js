/**
 * To run this file in Gitpod, use the
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("Second array:", arr2);
// Adding new element to the second array
arr2.push(4);
console.log("Second array:", arr2);
// but because we have only assigned new variable for the 1st array, pushing new element in 2nd array will also modify 1st array
console.log("Second array:", arr1);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object

let obj1 = { a: 1, b: 2, c: 3 };
// Copy obj1 into obj2 using spread operator ...
let obj2 = { ...obj1, d: 4 };
console.log("First object:", obj1);
console.log("Second object:", obj2);
// Modifying elements of obj1 and copying the new obj1 to obj3

let obj3 = { ...obj1, b: 5 };
console.log("Third object:", obj3);

// Copying only part of an array/object

// Copying multiple types of data in an object using spread operator

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log("Fifth array:", arr5);
