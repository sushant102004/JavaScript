var sushant = {
    name: 'Sushant',
    age: 18,
    intro: function (style, time) {
        if (style == 'formal') {
            return console.log(time + ' Ladies and Gentlemen, It\'s ' + this.name + ' here.')
        } else if (style == 'friendly') {
            return console.log(time + ' guys, It\'s ' + this.name + ' here.')
        }
    }
}

var emily = {
    name: 'Emily',
    age: 17
}

// sushant.intro('friendly', 'Good Morning')
// This is called method borowing.
// sushant.intro.call(emily, 'formal', 'Good Afternoon')
// sushant.intro.apply(emily, ['formal', 'Good Evening'])

// Bind Method will return a function
var sushantFormal = sushant.intro.bind(sushant, 'formal')
// sushantFormal('Good Evening')

// Real World Example
var birthYears = [1989, 2004, 2003, 1980]

function calculateArray(arr, fn){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr
}

function calculateAge(element){
    return 2022 - element
}
