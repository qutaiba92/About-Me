// 'use strict'
// var name = prompt('What is your name?');
// console.log('Welcome to your website Mr.', name)
// alert('Welcome to your website Mr.' + name)
// var score = 0;
// var life = prompt('Do you love your life?');
// var lower = life.toLowerCase();
// switch (lower) {
//     case 'yes':
//     case 'y':
//         alert('your answer is.' + life)
//         break;
//     case 'no':
//     case 'n':
//         alert('your answer is.' + life)
//         break;
//     default:
//         alert('wrong answer please choose yes/y or no/n');
//         break;
// }
// //console.log('your answer is.', life)

// var live = prompt('Do you live alone?');
// var lower = live.toLowerCase();
// switch (lower) {
//     case 'yes':
//     case 'y':
//         alert('your answer is.' + live)
//         break;
//     case 'no':
//     case 'n':
//         alert('your answer is.' + live)
//         break;
//     default:
//         alert('wrong answer please choose yes/y or no/n');
//         break;
// }
// //console.log('your answer is.', live)

// var scholarship = prompt('Do you enjoy software development scholarship?');
// var lower = scholarship.toLowerCase();
// switch (lower) {
//     case 'yes':
//     case 'y':
//         alert('your answer is.' + scholarship)
//         break;
//     case 'no':
//     case 'n':
//         alert('your answer is.' + scholarship)
//         break;
//     default:
//         alert('wrong answer please choose yes/y or no/n');
//         break;
// }
// //console.log('your answer is.', scholarship)

// var money = prompt('Are you good at saving money?');
// var lower = money.toLowerCase();
// switch (lower) {
//     case 'yes':
//     case 'y':
//         alert('your answer is.' + money)
//         break;
//     case 'no':
//     case 'n':
//         alert('your answer is.' + money)
//         break;
//     default:
//         alert('wrong answer please choose yes/y or no/n');
//         break;
// }
// //console.log('your answer is.', money)

// var work = prompt('If you had the option to not work for the rest to your life, would you take it?');
// var lower = work.toLowerCase();
// switch (lower) {
//     case 'yes':
//     case 'y':
//         alert('your answer is.' + work)
//         break;
//     case 'no':
//     case 'n':
//         alert('your answer is.' + work)
//         break;
//     default:
//         alert('wrong answer please choose yes/y or no/n');
//         break;
// }
// //console.log('your answer is.', work)

// alert('Welcome to your website Mr.' + name)


var q6 = prompt('guss, how old am I??');

for (var i = 0; i < 3; i++) {
    if (q6 > 27) {
        console.log(q6);
        alert('I am younger than ' + q6);
        q6 = prompt('guss, how old am I??');


    } else if (q6 < 27) {
        alert('I am older than ' + q6);
        q6 = prompt('guss, how old am I??');

    }
    else if (q6 == 27) {
        alert('that\'s right i am 27 years old');
        i = 200;
    }
}
if (i == 3 && q6 == 27) {
    alert('that\'s right i am 27 years old');
} else if (i == 4 && q6 != 27) {
    alert('you are wrong, i am 27 years old')
}

var fruit = ['apple', 'orange', 'banana', 'Avocados', 'Strawberry', 'Watermelon'];
var userreplies = prompt('what is the fruit that i like ?');
userreplies = userreplies.toLowerCase();
for (var h = 0; h < fruit.length; h++) {
    switch (userreplies) {
        case 'apple':
        case 'orange':
        case 'banana':
        case 'Avocados':
        case 'Strawberry':
        case 'Watermelon':
            alert('correct answer ');
            var userreplies = prompt('what is the  other fruit that i like ?');
            score++;
            break;
        default:

            alert('wrong answer');
            var userreplies = prompt('please reanswer the question?and choose from these choice (orange , mango ,Cherries,Grapes,apple,banana, Dragon Fruit,Strawberry,Avocados)');

    }
}
alert('your score is ' + score)
alert('the fruit that i like to eat is ' + fruit[0] + ' ,' + fruit[1] + ', ' + fruit[2] + ', ' + fruit[3] + ' ,' + fruit[4] + ' and ' + fruit[5]);
alert('Bye bye   ' + name + ', I hope that you enjoy visiting my site ');
console.log('name', name);
console.log('userreplay', userreply);
console.log('age', age);
console.log('userreplies)', userreplies);
document.write('<h2>' + score + '</h2>')














