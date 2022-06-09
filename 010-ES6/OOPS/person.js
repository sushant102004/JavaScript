export class Person {
    constructor(name, dob, profession) {
        this.name = name
        this.dob = dob
        this.profession = profession
    }
    calculateAge() {
        return 2022 - this.dob
    }
}