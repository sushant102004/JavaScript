// Function Constructor
var Person = function(name, dateOfBirth, job){
    this.name = name,
    this.dateOfBirth = dateOfBirth,
    this.job = job
    //console.log(this)
}

Person.prototype.calculateAge = function(){
    console.log(2022 - this.dateOfBirth)
    console.log(this)
}

var sushant = new Person('Sushant', 2004, 'Student')
var john = new Person('John Cena', 1990, 'Wrestler')

function showDOB(){
    console.log(sushant.dateOfBirth)
    console.log(john.dateOfBirth)
    console.log(this)
}

// Object.create()
var personPrototype = {
    calculateAge: function(yearOfBirth){
        console.log(2022 - yearOfBirth)
    }
}

var kunal = Object.create(personPrototype)
kunal.name = 'Kunal Sharma'
kunal.dateOfBirth = 2004
kunal.job = 'Student'

var jane = Object.create(personPrototype, {
    name: {value: 'Jane'},
    dateOfBirth: {value: 2002},
    job: {value: 'Designer'}
})

// Primitive vs Objects

// Primitives
var a = 20
var b = a
a = 40
// console.log(a)
// console.log(b)


// Objects
var objOne = {
    name: 'Sushant',
    age: 18
}

var objTwo = {
    name: 'Kunal',
    age: '18'
}
objOne = objTwo
objOne.age = 30
// console.log(objOne.age)
// console.log(objTwo.age)

// Functions
var age = 18
var objThree = {
    name: 'Sushant',
    city: 'Samalkha'
}
function changeData(age, object){
    age = 20
    object.city = 'Ambala'
}
changeData(age, objThree)
// console.log(age)
// console.log(objThree)