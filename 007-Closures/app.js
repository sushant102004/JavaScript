function retirement(retirementAge){
    var s = ' years left to retire.'
    return function (currentAge){
        console.log(retirementAge - currentAge + s)
    }
}

// var retirementIN = retirement(60)(18)
// var retirementUS = retirement(66)(18)
// var retirementIreland = retirement(67)(18)

function questions(job){
    return function(name){
        if(job == 'programmer'){
            console.log('Hello ' + name + ',' + ' how many programming languages you can code in?')
        } else if(job == 'designer'){
            console.log('Hello ' + name + ',' + ' Do you use Figma?')
        } else {
            console.log('No Questions For You')
        }
    }
}

// questions('programmer')('Sushant')
// questions('designer')('Rob')