function Question(ques, ans, correctAns) {
    this.ques = ques
    this.ans = ans
    this.correctAns = correctAns
}

let quesOne = new Question('Question One', ['Correct', 'Incorrect'], 0)
let quesTwo = new Question('Question Two', ['Incorrect', 'Correct'], 1)

let questions = [quesOne, quesTwo]

Question.prototype.showQuestion = function () {
    console.log(this.ques)
    for (let i = 0; i < this.ans.length; i++) {
        console.log(`${i} : ${this.ans[i]}`)
    }
}

Question.prototype.checkAnswer = function (ans) {
    if (ans == this.correctAns) {
        console.log('Correct!!!!')
    } else {
        console.log('Opps Wrong Answer!!!!')
    }
}

function reloadQuestions() {
    let randomNumber = Math.floor(Math.random() * questions.length)
    questions[randomNumber].showQuestion()
    let ans = prompt('Enter Answer: ')
    questions[randomNumber].checkAnswer(ans)

    if (ans == 'exit') {
        console.log('Quitting Game')
        return
    } else {
        reloadQuestions()
    }
}

reloadQuestions()