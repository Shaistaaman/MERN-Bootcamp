// - declare and initialize a string , and perform these operations :
// 	-find its length
const myString='My Name is Shaista';
var a = myString.length
console.log(a)

// 	-find if it contains a character a ( using indexOf)
const x=myString.includes('a')
console.log(x)
const y=myString.indexOf('a')
console.log(y)

// 	-replace whitespace of string by hyphen "-" (using replace)
const newMyString=myString.replace(/\s+/g,"-");
console.log(newMyString)
//     also perform these string methods : 
// String slice(
    const sliceStirng=myString.slice(11)
    console.log(sliceStirng)

// String replace()
const replaceString=myString.replace(/\s+/g,"-");
console.log(replaceString)

// String toUpperCase()
const upperString=myString.toUpperCase()
console.log(upperString)

// String toLowerCase()
const lowerString=myString.toLowerCase()
console.log(lowerString)

// String concat()

// String trim()
// String charAt()
// String split()