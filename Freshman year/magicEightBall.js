// Ask for username and print greeting accordingly
let userName = '';
userName ? console.log(`Hello ${userName}`) : console.log("Hello");

// Ask for user question
let userQuestion = '';
console.log(`So ${userName}, you want to know ${userQuestion}`);

// Generate a random  number between 0-7
//let randomNumber = Math.floor(Math.random() * 8);

// Variable to store answer
let eightBall = '';

// Generate answer
switch(Math.floor(Math.random() * 8)){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
	case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = '404 - prediction not found';
    break;
}

console.log(eightBall);