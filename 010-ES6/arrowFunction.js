const birthYears = [2004, 1990, 1987, 1945]
let ages = birthYears.map((el, index) => {
    return `${index + 1} : ${el}`
})
// console.log(ages)


// ES5
var box = {
    color: 'orange',
    click: function () {
        let self = this
        document.querySelector('.orange').addEventListener('click', function () {
            let alertMessage = `Box: ${self.color} has been clicked`
            alert(alertMessage)
        })
    }
}

// ES6
const newBox = {
    color: 'orange',
    click: function () {
        document.querySelector('.orange').addEventListener('click', () => {
            let alertMessage = `Box: ${this.color} has been clicked`
            alert(alertMessage)
        })
    }
}

// newBox.click()

function Person(name) {
    this.name = name
}

Person.prototype.myFriends5 = function(friends) {
    let friendsArray = friends.map(function(el) {
        return this.name + ' friends are ' + el
    })
    console.log(friendsArray)
}

let friends = ['Sushant', 'Imran', 'Rahul']
let john = new Person('John')
console.log(john.myFriends5(friends))