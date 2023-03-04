// -declare and initialize 2 variables and perform all operations between them (+,-,*,/,% , == , === , >=, <= , !== , )
var a=5,b=5;
console.log( `a : ${a} , b : ${b}`);

var plus = a+b;
console.log(`plus : ${plus}`);

var minus = a-b;
console.log(`minus : ${minus}`);

var multiply = a*b;
console.log(`multiply : ${multiply}`);

var divide = a/b;
console.log(`divide : ${divide}`);

var remainder = a%b;
console.log(`remainder : ${remainder}`);

let resultEqual = (a == 5) ? 'true' : 'false';
console.log(`resultEqual: ${resultEqual}`);

let result3Equal = (a === '5') ? 'true' : 'false';
console.log(`result3Equal: ${result3Equal}`);

let resultGreaterThen = (a >= 5) ? 'true' : 'false';
console.log(`resultGreaterThen: ${resultGreaterThen}`);

let resultLessThen = (a <= 5) ? 'true' : 'false';
console.log(`resultLessThen: ${resultLessThen}`);

let resultNot = (a != 5) ? 'true' : 'false';
console.log(`resultNot: ${resultNot}`);



// -declare and initialize an array of numbers, and perform these operations/method in such a way that the purpose of method is clarified , also log the result in the console
// 	-Sort the array in descending array ( using sort)
const arr =[9,7,4,3,1,0,1,7];
const newArr= arr.sort((a,b)=> b-a);
console.log(newArr);


// 	-Calculare Average of array elements ( using reduce)
const arr1 =[1,2,3];
const newArr1= arr1.reduce((acc,num)=>{
return acc+num;

},0);
console.log(`average : ${newArr1/arr1.length}`);

// 	-return a new array containing exponential of each element ( using map )
const arr2 =[1,2,3];
const newArr2=arr2.map((num1)=>{
return num1 ** 2;
})
console.log(`exponential ${newArr2}`);

// 	-filter the elements who are fully divided by 2 ( using filter )
const arr3 = [1,2,3,4,5,6];
const newArr3=arr3.filter((num)=>{
    return num%2  == 0;
})
console.log(`divided by 2 : ${newArr3}`);

// 	-add new element to start and end of array
const arr4 = [1,2,3,4,5,6];
arr4.push(7);
arr4.push(7);
console.log(`Array After Push ${arr4}`);
arr4.unshift(0);
arr4.unshift(0);
console.log(`Array After unshift ${arr4}`);

// 	-remove an element from start and end of array
arr4.pop();
console.log(`Array After Pop ${arr4}`);
arr4.shift();
console.log(`Array After shift ${arr4}`);

// 	-for each element of array , print it on the console (using forEach)
const arr5=[1,2,3,4,5,6];
arr5.forEach((numb)=>{
    console.log(`${numb}`);
})


// 	-perform 4 types of slice and splice methods ( like slice (5) and slice (5,6) are 2 types )
//Slice return the piece of array and do not modify the original array
const arr6= [1,2,3,4,5,6,7,8,9];
const slice0=arr6.slice(1)
console.log(slice0)
const slice1=arr6.slice(1,4)
console.log(slice1)
//splice is to remove and this modify the original array
const arr61=[1,2,3,4,5,6,7,8,9]
const splice0=arr61.splice(1)
console.log(splice0)
const splice1=arr61.splice(1,4)
console.log(splice1)


// 	-find an element with value 1 (using arr.find() method )
const arr7=[2,3,1,4,5,6];
const newArr7=arr7.find((num)=>{
    return num ===1;
})
console.log(`find method: ${newArr7}`);

// 	-find the highest element of array
const arr8 = [1,2,3,4,5,6];
const maxVal= arr8.reduce((prev,cur)=>{
return Math.max(prev,cur)
})

console.log(`highest: ${maxVal}`)
