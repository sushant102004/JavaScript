// function calculateAge(birthYear){
//     console.log(2022 - birthYear)
//     console.log(this)
// }

// var student = {
//     name: 'Sushant',
//     yearOfBirth: 2004,
//     calculateAge: function(){
//         console.log('Age of', this.name, 'is', 2022 - this.yearOfBirth)
//         function innerFunction(){
//             console.log(this)
//         }
//         innerFunction()
//     }
// }
// student.calculateAge()

// var mike = {
//     name: "Mike",
//     yearOfBirth: 2000
// }
// mike.calculateAge = student.calculateAge;
// mike.calculateAge()

var object = {
    name: 'Sushant',
    dateOfBirth: 2004,
    showData: function(){
        console.log(this.name)
        console.log(this.dateOfBirth)
    },
    calculateAge: function(){
        var age = 2022 - this.dateOfBirth
        console.log(age)
    }
}

object.calculateAge()

var john = {
    name: 'John Mathew',
    dateOfBirth: 2000,
}

john.calculateAge = object.calculateAge
// john.calculateAge()