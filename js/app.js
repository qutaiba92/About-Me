'use strict'
var name = prompt('What is your name?');
console.log('Welcome to your website Mr.', name)
alert('Welcome to your website Mr.' + name)

var life = prompt('Do you love your life?');
life = life.toLowerCase();
while (life != 'yes' && life != 'no') {
    life = prompt('wrong answer please choose yes or no');
}
//console.log('your answer is.', life)
alert('your answer is.' + life)

var live = prompt('Do you live alone?');
live = live.toLowerCase();
while (live != 'yes' && live != 'no') {
    live = prompt('wrong answer please choose yes or no');
}
//console.log('your answer is.', live)
alert('your answer is.' + live)

var scholarship = prompt('Do you enjoy software development scholarship?');
scholarship = scholarship.toLowerCase();
while (scholarship != 'yes' && scholarship != 'no') {
    scholarship = prompt('wrong answer please choose yes or no');
}
//console.log('your answer is.', scholarship)
alert('your answer is.' + scholarship)

var money = prompt('Are you good at saving money?');
money = money.toLowerCase();
while (money != 'yes' && money != 'no') {
    money = prompt('wrong answer please choose yes or no');
}
//console.log('your answer is.', money)
alert('your answer is.' + money)

var work = prompt('If you had the option to not work for the rest to your life, would you take it?');
work = work.toLowerCase();
while (work != 'yes' && work != 'no') {
    work = prompt('wrong answer please choose yes or no');
}
//console.log('your answer is.', work)
alert('your answer is.' + work)
alert('Welcome to your website Mr.' + name)













