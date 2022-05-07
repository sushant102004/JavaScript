// Variable Declaration
var name = "Sushant"
var age = 18
var isOver18 = true
var job, isMarried
job = 'Student'
isMarried = false

// Variable Mutation
age = "Eighteen"

// Operators -> /* + - * / % */
var numOne = 10
var numTwo = 20

// Operator Precedence
var now = 2022
var birthYear = 2004
var requiredAge = 18
var isValid = now - birthYear >= requiredAge

// BMI Calculator
var markMass, markHeight, johnMass, johnHeight
markMass = 72
markHeight = 1.73
johnMass = 68
johnHeight = 1.65

var markBMI = markMass / (markHeight * markHeight)
var johnBMI = johnMass / (johnHeight * johnHeight)
var isMarkBmiMore = markBMI > johnBMI

// Conditional Statements
var civilStatus = 'single'
if (civilStatus) {
    // console.log("You Are Single")
} else {
    // console.log("You Are Married")
}

// Ternary Operator
// name == 'sushant' ? console.log('Hello Sushant') : console.log('You are not Sushant')

// Switch Statements
var job = 'student'
switch (job) {
    case 'teacher':
    // Code To be Executed
    case 'student':
    // Code To be Executed
    case 'Programmer':
    // Code To be Executed
    default:
    // Code To be Executed
}

// Truthy and Falsy Values
// falsy values: - undefined, null, 0, '', NaN
// truthy values: - Not Falsy

var height
if (height) {
    // console.log("Height Is Defined")
} else {
    // console.log("Height is not defined")
}

// Function Declaration
function greet(name) {
    //console.log("Hello" + name)
}
greet("Sushant")

// Function Expression -> Anything which produces a result is expression
var whatYouDo = function (job) {}

// Arrays
var arr = ["Sushant", "Kunal", "John"]
// var arr = new Array("Sushant", "Kunal", "John")
//console.log(arr[1])
/*
arr.push() -> Add Element To Last
arr.unshift() -> Add Element To Start
arr.pop() -> Remove Element
arr.shift() -> Remove First Element
arr.indexOf() -> Return the position of the argument.
*/

// Object & Properties
var person = {
    name: 'Sushant',
    stream: 'CSE',
    birthYear: 2004,
    intrest: ['Coding', 'Hip-Hop Music'],
    isMarried: false
}

/*
console.log(person)
console.log(person.name)
console.log(person['stream'])
*/

var student = new Object()
student.name = "Sushant"
student.age = 18
student['address'] = "Panipat"

// Object Methods
var mike = {
    name: "John",
    birthYear: 2000,
    calculateAge: function(){
        // return 2022 - this.birthYear
        // Here this keyword refer to the current object which is 
        this.age = 2022 - this.birthYear
    }
}
// mikeAge = mike.calculateAge()
// mike.age = mike.calculateAge();
// console.log(mike.age)

// BMI with Objects & Method

var mark = {
    height: 1.65,
    mass: 72,
    calculateBMI: function(){
        return this.mass / (this.height * this.height)
    }
}

var john = {
    height: 1.56,
    mass: 64,
    calculateBMI: function(){
        return this.mass / (this.height * this.height)
    }
}

mark.bmi = mark.calculateBMI()
john.bmi = john.calculateBMI()

// if(mark.bmi > john.bmi){
//     console.log("Mark's BMI is greater.")
// } else {
//     console.log("John's BMI is greater.")
// }

// Loops
for(var i = 0; i < 10; i++){
    // console.log(i)
}

var itemsList = ["Pepsi", "Biscuit", "Sandwich"]
for(var j = 0; j < itemsList.length; j++){
    // console.log(itemsList[j])
}

