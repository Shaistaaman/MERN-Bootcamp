// Which of the following is a valid use of the rest operator?
// A) const arr = [1, 2, 3, ...[4, 5, 6]];
// B) function sum(...numbers) { return numbers.reduce((acc, cur) => acc + cur); }
// C) const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

// const arr = [1, 2, 3, ...[4, 5, 6]];
// console.log(arr);
// function sum(...numbers) { return numbers.reduce((acc, cur) => acc + cur); }
// console.log(sum(...arr));
//console.log(const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 })



// Given the following array:
// Copy code
// const arr = [1, 2, 3, 4, 5];
// Which of the following is a valid use of destructuring to extract the first two elements of the array?

// A) const [a, b] = arr.slice(0, 2);
// B) const a = arr[0]; const b = arr[1];
// C) const [a, b, ...rest] = arr;
// D) const a = arr[0], b = arr[1];
// What is the difference between a shallow copy and a deep copy?
// A) A shallow copy only copies the top-level properties of an object, while a deep copy copies all properties and their nested properties.
// B) A shallow copy copies all properties and their nested properties, while a deep copy only copies the top-level properties of an object.
// C) A shallow copy creates a new reference to the original object, while a deep copy creates a new object with all the same properties as the original object.
// D) There is no difference between a shallow copy and a deep copy.
// Given the following code:
// Copy code
// const obj = {
//   name: 'John',
//   sayHi: function() {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// };
// What is the output when the sayHi function is called?

// A) 'Hi, my name is John'
// B) 'Hi, my name is undefined'
// C) 'Hi, my name is null'
// D) An error will be thrown
// What is the output of the following code?
// Copy code
// const arr = [1, 2, 3];

// const [a, b, ...rest] = arr;

// console.log(a);
// console.log(b);
// console.log(rest);
// A) 1, 2, [3]
// B) 1, 2, 3
// C) [1], 2, [3]
// D) [1, 2, 3]