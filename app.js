// As a fun-loving human being, I want to give the visitors to my profile page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
// As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
// As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user.
// As a developer, I want to receive and use the user's name in the opening to the guessing game, so that the program is personalized to their experience.
// As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
// As a developer, I want to notify the user after each question whether they were correct (or not!) in their answers.
// As a developer, I want to be able to debug my code by using well structured console messages.
alert('Hi! Let\'s play a guessing game about me!');

var userName = prompt('First, tell me what your name is!');
console.log('The user\'s name is ' + userName);
alert('Nice to meet you, ' + userName + '! I\'m going to ask you some questions about me. Please answer Y/N. Let\'s get this game started!');

var answer1 = prompt('Ok ' + userName + ', first question. Am I the oldest child in my family?').toUpperCase();

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('That is correct! Great guess' + userName + '!');
  console.log('The first answer was correct');
} else if (answer2 === 'N' || answer2 === 'NO'){
  alert('Sorry, that is incorrect. Better luck next time' + userName + '...');
  console.log('The first answer was wrong');
} else {
  alert('Something went wrong with your answer...');
  console.log('Something went wrong with the first answer. They said' + answer1 + '.');
};

var answer2 = prompt('Next question. Did I attend the University of Washington').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('100% correct! Good job ' + userName + '.');
  console.log('The second answer was correct')
} else if (answer2 === 'N' || answer2 === 'NO'){
  alert('Whoops. I actually did go to the UW. Come on ' + userName + ', you\'re better than that!');
  console.log('The second answer was wrong.');
} else {
  alert('Something went wrong with your answer...');
  console.log('Something went wrong with the second answer. They said ' + answer2 + '.')
}

var answer3 = prompt('Here comes the third question ' + userName + ', hope you\'re ready! Do I like cats more than dogs?').toUpperCase();

if (answer3 === 'N' || answer3 === 'NO') {

}
