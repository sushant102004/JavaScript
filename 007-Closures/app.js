function retirement(retirementAge){
    var s = ' years left to retire.'
    return function (currentAge){
        console.log(retirementAge - currentAge + s)
    }
}

var retirementIN = retirement(60)(18)