// - declare and initialize an object with properties of fullName (string ) ,age (number) , 
// address (object containing properties presentAddress , permanentAddress and postalCode ) and hobbies ( array of string ).


const person = {
fullName: 'John',
age: 34,
address: {presentAddress: 'my present address', permanentAddress: 'my permanent Address', postalCode: '44000'},
hobby:["traveling","Googling","Studying"],
}
// 	- change the presentAddress property of above object;
person.address.permanentAddress='my changed permenant address';
console.log(person.address.permanentAddress)

// 	- add new hobby using push 
person.hobby.push('sleeping')
console.log(person.hobby)


// 	- access object property using bracker notation obj[variable]
console.log(person['age'])

// 	- log object's keys, values and , key-value pairs to console (using Object.keys, values and entries )
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(`----------------`)
console.log(Object.entries(person))

