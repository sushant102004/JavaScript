import { Person } from "./person"

export class Programmer extends Person {
    constructor(name, dob, profession, type) {
        super(name, dob, profession)
        this.type = type
    }
    isAppDev() {
        if (this.type == 'App Developer') {
            return true
        }
    }
}