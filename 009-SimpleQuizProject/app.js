(function () {
    function Question(ques, answers, correct) {
        this.ques = ques
        this.answers = answers
        this.correct = correct
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.ques)
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i])
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans == this.correct) {
            console.log('Correct!!!!')
        } else {
            console.log('Try Again')
        }

    }

    var quesOne = new Question('Is JavaScript Good Language?', ['Yes', 'No'], 0)
    var quesTwo = new Question('Can We Use JavaScript For App Developement?', ['Yes', 'No'], 0)
    var quesThree = new Question('Who Programmed You?', ['John', 'Sushant', 'Michael'], 1)

    var questions = [quesOne, quesTwo, quesThree]

    function nextQuestion() {
        var randomNumber = Math.floor(Math.random() * questions.length)
        questions[randomNumber].displayQuestion()
        var ans = prompt('Enter Your Answer')
        questions[randomNumber].checkAnswer(ans)
        if (ans == 'exit') {
            console.log('Exiting Game')
            return
        } else {
            nextQuestion()
        }
    }

    nextQuestion()
})()