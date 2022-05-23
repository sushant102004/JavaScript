/*
What's new in ES6?
1. let & const
2. Blocks & IIFE
3. Strings
4. Arrow Functions
5. Destructuring
6. Arrays
7. Spread Operator
8. Rest and Default Parameters
9. Maps
10. Classes & Sub Classes
*/

// let & const
let userName = 'John'
userName = 'Sushant'
// console.log(userName)

const age = 10
// age = 20
// console.log(age)

// ES5
function drivingLicense5(passedTest) {
    if (passedTest) {
        var name = 'Sushant'
        console.log(name + ' you can now drive.')
    }
}
// drivingLicense5(true)

// ES6
function drivingLicense6(passedTest) {
    // Variables in a block can't be accessed in ES6
    if (passedTest) {
        let personName = 'Sushant'
    }
    console.log(personName + ' you can now drive')
}
// drivingLicense6(true)

let i = 10
for (let i = 0; i < 5; i++) {
    // console.log(i)
}
// console.log(i)

// Blocks & IIFEs
{
    let a = 10
    const b = 2
}
// console.log(a + b)

// Strings
let firstName = 'John'
let lastName = 'Smith'
const yearOfBirth = 2000

function calculateAge(yearOfBirth) {
    return 2022 - yearOfBirth
}

// Template Literals
// console.log(`Hello ${firstName} ${lastName}. Your age is ${calculateAge(2004)} years`)

const n = `${firstName} ${lastName}`
// console.log(n.startsWith('J'))


// Arrow Function
const years = [1990, 2004, 1989, 2000]
var ages5 = years.map(function (element) {
    return 2022 - element
})
// console.log(ages5)
const ages6 = years.map(element => 2022 - element)