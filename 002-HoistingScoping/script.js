// Hoisting

// calculateAge(2004)
function calculateAge(year){
    console.log(2022 - year)
}

// retirement(2004)
var retirement = function(year){
    console.log(60 - (2022 - year))
}

// console.log(age)
var age = 2004

function printAge(){
    var age = 2000
    console.log(age)
}

// printAge()
// console.log(age)

// Scoping & Scope Chain
var a = "Hello"
// first()
function first(){
    var b = "Hi"
    second()
    function second(){
        var c = "Hey"
        console.log(a + b + c)
    }
}

// Execution Stack vs Scope Chain
var x = "Hello"

funcOne()

function funcOne(){
    var y = "Hi"
    funcTwo()

    function funcTwo(){
        var z = "Hey"
        funcThree()
    }
}

function funcThree(){
    var d = 'John'
    console.log(z)
}