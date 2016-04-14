var totalAnswer = 0;
alert('Hi! Let\'s play a guessing game about me!');

var userName = prompt('First, tell me what your name is!');
console.log('The user\'s name is ' + userName);
alert('Nice to meet you, ' + userName + '! I\'m going to ask you some questions about me. Please answer Y/N. Let\'s get this game started!');

var answer1 = prompt('Ok ' + userName + ', first question. Am I the oldest child in my family?').toUpperCase();

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('That is correct! Great guess ' + userName + '!');
  console.log('The first answer was correct');
  totalAnswer++;
  console.log('correct answers: ' + totalAnswer);
} else if (answer1 === 'N' || answer1 === 'NO'){
  alert('Sorry, that is incorrect. Better luck next time ' + userName + '...');
  console.log('The first answer was wrong');
} else {
  alert('Something went wrong with your answer. Make sure you only answer yes or no.');
  console.log('Something went wrong with the first answer. They said ' + answer1 + '.');
};
var answer2 = prompt('Next question. Did I attend the University of Washington?').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('100% correct! Good job ' + userName + '.');
  console.log('The second answer was correct');
  var totalAnswer = totalAnswer += correctAnswer;
  console.log('correct answers: ' + totalAnswer);
} else if (answer2 === 'N' || answer2 === 'NO'){
  alert('Whoops. I actually did go to the UW. Come on ' + userName + ', you\'re better than that!');
  console.log('The second answer was wrong.');
} else {
  alert('Something went wrong with your answer. Make sure you only answer yes or no.');
  console.log('Something went wrong with the second answer. They said ' + answer2 + '.')
};

var answer3 = prompt('Here comes the third question ' + userName + ', hope you\'re ready! Do I like cats more than dogs?').toUpperCase();

if (answer3 === 'N' || answer3 === 'NO') {
  alert('That\'s what I\'m talking about ' + userName + '. Everyone knows dogs are the best.');
  console.log('The third answer was correct.');
  totalAnswer++;
  console.log('correct answers: ' + totalAnswer);
} else if (answer3 === 'Y' || answer3 === 'YES') {
  alert('Terrible answer. Cats are the worst. How could you not know that ' + userName + '?');
} else {
  alert('Something went wrong with your answer. Make sure you only answer yes or no.');
  console.log('Something went wrong with the third answer. They said ' + answer3 + '.');
};

var answer4 = prompt('Halfway done. Question number four. Have I ever been to prison?').toUpperCase();

if (answer4 === 'N' || answer4 === 'NO') {
  alert('That is correct. Thank God. I wouldn\'t last a day in there if I\'m being perfectly honest with you ' + userName + '.');
  console.log('The fourth answer was correct.');
  totalAnswer++;
  console.log('correct answers: ' + totalAnswer);
} else if (answer4 === 'Y' || answer4 === 'YES') {
  alert('No I haven\'t been to prison! ' + userName + ', I thought we were friends and it turns out you think I\'m a criminal. I\'m genuinely hurt.');
  console.log('The fourth answer was incorrect');
} else {
  alert('Something went wrong with your answer. Make sure you only answer yes or no.');
  console.log('Something went wrong with the fourth answer. They said ' + answer4 + '.');
};

var answer5 = prompt('We\'ve made it to the final yes or no answer. Alright ' + userName + ', for one million dollars. Am I going to be the best damn coder you have ever met?').toUpperCase();

if (answer5 === 'Y' || answer5 === 'YES') {
  alert('That is correct! Thanks ' + userName + ', I knew you believed in me.');
  console.log('The fifth answer was correct.');
  totalAnswer++;
  console.log('correct answers: ' + totalAnswer);
} else if (answer5 === 'N' || answer5 === 'NO') {
  alert(userName + ', I really can\'t believe you would say that.');
  console.log('The fifth answer was incorrect.');
} else {
  alert('Something went wrong with your answer. If you haven\'t figured it out at this point ' + userName + ', I really can\'t help you.');
  console.log('Something went wrong with the fifth answer. They said ' + answer5 + '.');
};
var answer6 = prompt('Ok ' + userName + ', do me a favor and answer this one in numbers. How old do you think I am?');
for(var i = 0; i < 4; i++) {
  while(answer6 != 24){
    if(answer6 > 24) {
      answer6 = prompt('I\'ve got some bad news. You missed. Try again, but this time guess lower.');
      console.log('The sixth answer was wrong. They said ' + answer6 + ". This was guess " + i + '.')
    } else if (answer6 < 24){
      answer6 = prompt('Tough luck, you missed. Try again, but this time guess higher.');
      console.log('The sixth answer was wrong. They said ' + answer6 + '. This was guess ' + i + '.');
    } else {
      answer6 = prompt('Whoops, looks like your answer wasn\'t a number, try again')
      console.log('The sixth answer was neither higher nor lower than 24, but was not 24...')
    }
  }
  if(answer6 == 24) {
    alert('Congratulations ' + userName + '. You nailed it.');
    console.log('The sixth answer was ' + answer6 + ' on try number ' + i + '.');
    totalAnswer++;
    console.log('correct answers: ' + totalAnswer);
    i = 5;
  }
}
var sports = ['BASKETBALL', 'BASEBALL', 'FOOTBALL'];
var triesLeft = 6;
var answer7 = prompt('Can you name any of the sports I played in high school? You have this many tries left: ' + triesLeft).toUpperCase();
for(var i = 0; i < 6; i++) {
  triesLeft--;
    for(var j = 0; j < sports.length; j++) {
      if(answer7 === sports[j]) {
        alert('Good work. I played basketball, baseball and football in high school.');
        totalAnswer++;
        console.log('The seventh answer is correct. Correct answers: ' + totalAnswer);
        i = 10;
    }
  }
  if (i != 10) {
    answer7 = prompt('Nope, try again. You have this many tries left: ' + triesLeft + '.').toUpperCase();
  }
}
if (totalAnswer == 7) {
  alert('You got ' + totalAnswer + ' out of 7 ' + userName + '. You should definitely not know that much about me');
} else if (4 < totalAnswer < 7) {
  alert('You got ' + totalAnswer + ' out of 7 ' + userName + '. Way to go!');
} else {
  alert('You only got ' + totalAnswer + ' out of 7 ' + userName + '. I thought you cared more about me than that.')
}
