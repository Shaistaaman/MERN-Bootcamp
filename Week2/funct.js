let a = [1,2,3,'null','str',6]
//add using array method
//let b = typeof(a)
const newArr = a.map((num)=>{
    if(typeof(num) == 'number')
    return num;
    else
    return parseInt(num);
})
console.log(newArr)
const arr= newArr.reduce((acc,num)=>{
    return acc+num
},0)
console.log(arr)




//find the factorial of a number with recursion
let n=5;
function factFunc(num){
    if(num === 0)
        return 1;
    else
        return num * factFunc(num -1);
}
const factVar = factFunc(n)
console.log(factVar)



//get name from user on prompt in a function and print Hello Hammad if user don't input any name else print hello that name

// const name = prompt("Enter your name:");

// if (name) {
//   console.log(`Hello, ${name}!`);
// } else {
//   console.log("Hello, Hammad!");
// }