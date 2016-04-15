var totalAnswer = 0;

var questions = ['Am I the oldest child in the family?', 'Did I attend the University of Washington?', 'Do I like cats more than dogs?', 'Have I ever been to prison?', 'Can I juggle?', 'Answer this in numbers: How old do you think I am?', 'Can you name any of the sports I played in high school?'];

var answers = ['Y', 'Y', 'N', 'N', 'N', 24, ['BASKETBALL', 'BASEBALL', 'FOOTBALL']];

var rightAnswer = ['That is correct. Great guess!', '100% correct. Great job!', 'That\'s what I\'m talking about. Dogs are the best!', 'That is right, thank god. I wouldn\'t last a day in there if I\'m being honest with you.', 'I only have two hands, so you\'re right, I can\'t at all.', 'Congratulations! You nailed it.', 'Good work. I played basketball, baseball, and football!'];

var wrongAnswer = ['Sorry that is incorrect. Better luck next time.', 'Woops! I actually did go to UW. Come on you\'re better than that.', 'Terrible answer. Cats are the worst, how could you not know that?', 'No, I haven\'t been to prison. I thought we were friends and now you say this about me.', 'No. No I cannot.', ['You missed, try again. But this time guess lower', 'You missed, try again. But this time guess higher.', 'Looks like you couldn\'t get it. Bummer.'], 'Looks like you couldn\'t figure it out. You get an A+ for effort at least.'];

askQuestion = function (questionNumber) {
  var prompt1 = prompt(questions[questionNumber]).toUpperCase();
  if (prompt1 === answers[questionNumber]) {
    alert(rightAnswer[questionNumber]);
    totalAnswer++;
  } else if (prompt1 !== 'Y' && prompt1 !== 'N') {
    alert('You just lost a chance for a point. Answer questions with either Y/N');
  } else {
    alert(wrongAnswer[questionNumber]);
  }
};

askAge = function (questionNumber) {
  var incorrect = true;
  while (incorrect === true) {
    for (var i = 0; i < 4; i++) {
      var answer = prompt(questions[questionNumber]);
      if (answer == 24) {
        alert(rightAnswer[questionNumber]);
        totalAnswer++;
        i = 5;
        incorrect = false;
      } else if (answer > 24) {
        alert(wrongAnswer[questionNumber][0]);
      } else if (answer < 24) {
        alert(wrongAnswer[questionNumber][1]);
      }
    }
    if (incorrect == true) {
      alert(wrongAnswer[questionNumber][2]);
    }
    incorrect = false;
  }
};

askSports = function (questionNumber) {
  var sports = ['BASKETBALL', 'BASEBALL', 'FOOTBALL'];
  var wrong = true;
  while (wrong === true) {
    for(var i = 0; i < 6; i++) {
      var answer = prompt(questions[questionNumber]).toUpperCase();
      for (var j = 0; j < sports.length; j++) {
        if (answer === answers[6][j]) {
          alert(rightAnswer[questionNumber]);
          totalAnswer++;
          wrong = false;
          i = 6;
        }
      }
    }
    if (wrong === true) {
      alert(wrongAnswer[questionNumber]);
    }
    wrong = false;
  }
};

allQuestions = function() {
  for(i = 0; i < 5; i++) {
    askQuestion(i);
  }
};

alert('Hi! Let\'s play a guessing game about me!');
var userName = prompt('First, tell me what your name is!');
alert('Nice to meet you, ' + userName + '! I\'m going to ask you some questions about me. Please answer Y/N. Let\'s get this game started!');


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
