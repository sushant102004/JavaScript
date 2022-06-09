// In ES6 variables will not work outside of block
function drivingLicence(isPassed){
    if(isPassed){
        let applicant = 'Sushant'
    }
    // console.log(applicant)
}

// console.log(applicant)

// Here both of the i are completely diffrent variables.
let i = 20
for(let i = 0; i < 5; i++){
    // console.log(i)
}

// console.log(i)