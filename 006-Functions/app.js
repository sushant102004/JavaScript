/*
Important Things: -
1. Function is a instance of object type.
2. Functions behave like any other object type.
3. We can store functions in variables.
4. We can pass a function as an argument to another function.
5. We can return a function from another function.

That's why we have First Class Functions in JavaScript.
*/

// Passing Function as argument
var years = [1990, 2004, 1987, 2007, 1970]

function arrayCalculate(arr, fn) {
    var resultArray = []
    for (var i = 0; i < arr.length; i++) {
        resultArray.push(fn(arr[i]))
    }
    return resultArray
}

function calculateAge(element) {
    return 2022 - element
}

var ages = arrayCalculate(years, calculateAge)
// console.log(ages)

// Return Function from function
function printQuestions(job) {
    if (job == 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what is the full form of UX is?')
        }
    } else if (job == 'programmer') {
        return function (name) {
            console.log(name + ' how many programming languages you know?')
        }
    } else {
        return function (name) {
            console.log('Hello' + name + 'what do you do?')
        }
    }
}

// var programmerQuestion = printQuestions('programmer')
// programmerQuestion('Sushant')

// Immediately Invoked Function Expression (IIFE)
// (function() {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// })()
// console.log(score)