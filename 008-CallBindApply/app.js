var john = {
    name: 'John',
    age: 22,
    presentation: function (style, time) {
        if (style == 'formal') {
            console.log('Good ' + time + ' morning ladies and gentleman. I\'m ' + this.name + ' and I\'m ' + this.age + ' years old.')
        } else if(style == 'friendly'){
            console.log('Hello guys, I\'m ' + this.name + ' and I\'m ' + this.age + ' years old')
        }
    }
}

john.presentation('formal', 'evening')