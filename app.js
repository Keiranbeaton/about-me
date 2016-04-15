var totalAnswer = 0;
alert('Hi! Let\'s play a guessing game about me!');

var userName = prompt('First, tell me what your name is!');
console.log('The user\'s name is ' + userName);
alert('Nice to meet you, ' + userName + '! I\'m going to ask you some questions about me. Please answer Y/N. Let\'s get this game started!');

var questions = ['Am I the oldest child in the family?', 'Did I attend the University of Washington?', 'Do I like cats more than dogs?', 'Have I ever been to prison?', 'Can I juggle?', 'Answer this in numbers: How old do you think I am?', 'Can you name any of the sports I played in high school?'];

var answers = ['Y', 'Y', 'N', 'N', 'N', 24, ['BASKETBALL', 'BASEBALL', 'FOOTBALL']];

var rightAnswer = ['That is correct. Great guess!', '100% correct. Great job!', 'That\'s what I\'m talking about. Dogs are the best!', 'That is right, thank god. I wouldn\'t last a day in there if I\'m being honest with you.', 'I only have two hands, so you\'re right, I can\'t at all.', 'Congratulations! You nailed it.', 'Good work. I played basketball, baseball, and football!'];

var wrongAnswer = ['Sorry that is incorrect. Better luck next time.', 'Woops! I actually did go to UW. Come on you\'re better than that.', 'Terrible answer. Cats are the worst, how could you not know that?', 'No, I haven\'t been to prison. I thought we were friends and now you say this about me.', 'No. No I cannot.', ['You missed, try again. But this time guess lower', 'You missed, try again. But this time guess higher.', 'Looks like you couldn\'t get it. Bummer.'], 'Looks like you couldn\'t figure it out. You get an A+ for effort at least.'];

askQuestion = function (q) {
  var prompt1 = prompt(questions[q]).toUpperCase();
  if (prompt1 === answers[q]) {
    alert(rightAnswer[q]);
    totalAnswer++;
  } else if (prompt1 !== 'Y' && prompt1 !== 'N') {
    alert('You just lost a chance for a point.');
  } else {
    alert(wrongAnswer[q]);
  }
};

askAge = function (q) {
  var incorrect = true;
  while (incorrect === true) {
    for (var i = 0; i < 4; i++) {
      var answer = prompt(questions[q]);
      if (answer == 24) {
        alert(rightAnswer[q]);
        totalAnswer++;
        i = 5;
        incorrect = false;
      } else if (answer > 24) {
        alert(wrongAnswer[q][0]);
      } else if (answer < 24) {
        alert(wrongAnswer[q][1]);
      }
    }
    if (incorrect == true) {
      alert(wrongAnswer[q][2]);
    }
    incorrect = false;
  }
};

askSports = function (q) {
  var sports = ['BASKETBALL', 'BASEBALL', 'FOOTBALL'];
  var wrong = true;
  while (wrong === true) {
    for(var i = 0; i < 6; i++) {
      var answer = prompt(questions[q]).toUpperCase();
      for (var j = 0; j < sports.length; j++) {
        if (answer === answers[6][j]) {
          alert(rightAnswer[q]);
          totalAnswer++;
          wrong = false;
          i = 6;
        }
      }
    }
    if (wrong === true) {
      alert(wrongAnswer[q]);
    }
    wrong = false;
  }
};

allQuestions = function() {
  for(i = 0; i < 5; i++) {
    askQuestion(i);
  }
};

allQuestions();
askAge(5);
askSports(6);

if (totalAnswer == 7) {
  alert('You got ' + totalAnswer + ' out of 7 ' + userName + '. You should definitely not know that much about me');
} else if (4 < totalAnswer < 7) {
  alert('You got ' + totalAnswer + ' out of 7 ' + userName + '. Way to go!');
} else {
  alert('You only got ' + totalAnswer + ' out of 7 ' + userName + '. I thought you cared more about me than that.');
}
