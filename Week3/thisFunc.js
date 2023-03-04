//call apply bind
//One function is called with different objects
let person1={
    name: 'John',
    age: 21
}
let person2={
    name: 'Jane',
    age: 22
}

function greeting()
{
    console.log(`Welcome ${this.name} and age is ${this.age}`);
}

let obj1=greeting.call(person1)
let obj2=greeting.call(person2)

//Apply one function called with objects plus array
let person11={
    name: 'John',
    age: 21
}
let person12={
    name: 'Jane',
    age: 22
}
let arr=["1","2"];
function greeting(obj,arr1)
{
    console.log(`Welcome ${this.name} and age is ${this.age}, ${arr1}`);
}

let obj11=greeting.apply(person11,arr)
let obj12=greeting.apply(person12,arr)