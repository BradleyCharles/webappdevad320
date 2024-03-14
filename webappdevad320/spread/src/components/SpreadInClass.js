/*  Task 1: Function Argument Expansion

    Define a function named sum that takes three arguments and returns their sum.
    Create an array named numbers with three numeric elements of your choice.
    Call the sum function using the spread syntax to pass the elements of numbers as arguments.
    Print the result to the console. */

let array = [1, 2, 3];

const sum = (a, b, c) => {
  let answer = a + b + c;
  console.log("---- Task #1 ----");
  console.log(answer);
};

sum(...array);

/* Task 2: Merging Arrays

    Create two arrays, array1 with the elements [1, 2, 3] and array2 with the elements [4, 5, 6].
    Merge array1 and array2 into a new array called mergedArray using spread syntax.
    Print mergedArray to the console and ensure that it contains all the elements from both arrays. */

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log("---- Task #2 ----");
console.log(array3);

/* Task 3: Array Element Insertion

    Create an array named colors with the elements 'red', 'green', and 'blue'.
    Use spread syntax to create a new array extendedColors that includes 'yellow' at the beginning, the elements of colors, and 'purple' at the end.
    Print extendedColors to the console. */

let colors = ["red", "green", "blue"];

let extendedColors = ["yellow", ...colors, "purple"];
console.log("---- Task #3 ----");
console.log(extendedColors);

/* Task 4: Cloning and Modifying an Object

    Define an object person with properties name: 'John' and age: 30.
    Use spread syntax to create a clone of the person object named newPerson.
    Modify newPerson by changing the name property to 'Jane' and adding a new property gender with the value 'female'.
    Print both person and newPerson to ensure that they are separate objects and that person is not affected by the modifications to newPerson. */

const person1 = {
  name: "John",
  age: "30",
};

const newPerson = { ...person1, name: "Jane", gender: "Female" };
console.log("---- Task #4 ----");
console.log(newPerson);

/* Task 5: Combining Objects

    Create two objects, object1 with properties { a: 1, b: 2 } and object2 with properties { b: 3, c: 4 }.
    Combine object1 and object2 into a new object combinedObject using spread syntax, ensuring that properties from object2 overwrite those in object1 when there are conflicts.
    Print combinedObject to verify that it has the correct properties and values. */

const object1 = {
  a: "1",
  b: "2",
};

const object2 = {
  b: "3",
  c: "4",
};

const combinedObject = { ...object1, ...object2 };
console.log("---- Task #5 ----");
console.log(combinedObject);
