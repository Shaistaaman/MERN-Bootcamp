// Lab Task: Rest and Spread Operators, Destructuring, Shallow and Deep Copy, and the this Keyword
// In this lab, you will practice using the rest and spread operators, destructuring arrays and objects, making shallow and deep copies, and understanding the this keyword in JavaScript.

// Part 1: Rest and Spread Operators
// Create a function called sum that takes an unlimited number of arguments and returns their sum. Use the rest operator to capture all the arguments in the function.

// Create an array called numbers with the following values: 1, 2, 3, 4, 5.

// Use the spread operator to pass the elements of the numbers array as arguments to the sum function. Print the result to the console.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  console.log(sum(...numbers));  


// Create an object called person with the following properties:

// name: 'John'
// age: 30
// country: 'USA'
// Use the spread operator to create a new object called personClone that is a shallow copy of the person object. Modify the name property of personClone to 'Jane'. Print both objects to the console to verify that they are different objects with different property values.
const person={
    name: 'John',
    age: 30,
    country: 'USA'
}
const personShallow={...person}
console.log(personShallow)

const personClone={
  ...person,
  name:'Jane'
}
console.log(personClone)
console.log(person)
// Part 2: Destructuring
// Using destructuring, create variables a, b, and rest from the numbers array.
const [a,b]=numbers;
console.log(a,b)
// Using destructuring, create variables name, age, and country from the person object.
const {name,age,country} = person;
console.log(name,age,country)
// Use destructuring to swap the values of a and b. Print the values of a and b to the console.
const [c,d]=[numbers[1],numbers[0]];
console.log(c,d);
// Use destructuring to create a new object called user from the person object, with the properties name and age. Print the user object to the console.
const user={name:person.name,age:person.age};
console.log(user);
// Part 3: Shallow and Deep Copy
// Create a deep copy of the person object and store it in a variable called personDeepCopy. 
//Modify the age property of the original person object to 35. 
//Print both the original person object and the personDeepCopy object to the console to verify that they are different objects with different property values.
const personDeepCopy=JSON.parse(JSON.stringify(person))
person.age=35;
console.log(person)
console.log(personDeepCopy)


// Create a shallow copy of the numbers array and store it in a variable called numbersShallowCopy. 
//Modify the first element of the original numbers array to 0. 
//Print both the original numbers array and the numbersShallowCopy array to the console to verify that they are different arrays but share the same elements.

const numbersShallowCopy=numbers;
numbers[0]=0;
console.log(numbersShallowCopy);


// Part 4: this Keyword
// Create an object called user1 with the following properties:
// name: 'John'
// age: 30
// sayHi: a function that logs 'Hi, my name is John' to the console
// Create an object called user2 with the following properties:
// name: 'Jane'
// age: 25
// sayHi: a function that logs 'Hi, my name is Jane' to the console
// Call the sayHi function of both user1 and user2 using the this keyword.
// Verify that the correct name is logged for each object.
const user1={
  name: 'John',
  age: 30,
  sayHi: function(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
const user2={
  name: 'Jane',
  age: 25,
  sayHi:function(){
    console.log(`Hi, my name is ${this.name}`);
  }
}
user1.sayHi()
user2.sayHi()