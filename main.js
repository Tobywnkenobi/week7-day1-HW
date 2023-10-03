// Question #1:
// Write a function that takes a string and an array of strings ( in this example dog_names) and checks if one of the list members (dog names) is in the string . Return an array of the dog names found in the array

function findDogNames(str, dogNames) {
    return dogNames.filter(name => str.includes(name));
}

var dogNames = ["Max","Fido","Gizmo","Nala"];

var testString1 = "Hello, my dog is Max, and they have purple eyes!";
console.log(findDogNames(testString1, dogNames));

var testString2 = "My dog is fast, her name is Tippi";
console.log(findDogNames(testString2, dogNames));

var testString3 = "Come here Fido and Gizmo come here";
console.log(findDogNames(testString3, dogNames));

// Question #2:
// Write a function using a for loop to convert an array of numbers from inches to feet.

function convertToFeet(inches) {
    var feet = [];
    for (var i = 0; i < inches.length; i++) {
        feet.push(inches[i] / 12);
    }
    return feet
}

var heightInInches = [66, 64, 60, 52, 72, 80, 51];
console.log(convertToFeet(heightInInches));

// Question #3

// Using a for loop (or for extra challenge the Ternary Operator and Map), create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

// Example:


// var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// // Expects:
// [
// 'Leonardo is eating pizza',
// 'Michelangelo is eating pizza',
// 'Donatello is eating pizza',
// 'Raphael is being rude'
// ]

var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];

var turtles = tmnt.map(name => name.endsWith('o') ? name + ' is eating pizza' : name + ' is being rude');

console.log(turtles);


// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

// Example:

// var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
// 234125

var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]

var maxNumb = findAMax.reduce((max, current) => (current > max ? current : max), 0);

console.log(maxNumb);

