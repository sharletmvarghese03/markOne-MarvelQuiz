var readlineSync = require('readline-sync');

var score = 0;

function welcome() {
	var userName = readlineSync.question('What is your name? ');
	console.log('Welcome ' + userName + ' to Marval Quiz!');
}

var questions = [
	{
		question: "Captain America’s shield and Bucky's arm are made of what? ",
		answer: 'Vibranium',
	},
	{
		question:
			'In which movie did Spider-Man make his first appearance in the MCU? ',
		answer: 'Civil War',
	},
	{
		question: 'On what planet was the Soul Stone in Infinity War? ',
		answer: 'Vormir',
	},
	{
		question: 'Black Panther is set in which fictional country? ',
		answer: 'Wakanda',
	},
	{
		question: 'Who rescued Tony Stark and Nebula from space? ',
		answer: 'Captain Marvel',
	},
];

function play(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toLowerCase() === answer.toLowerCase()) {
		console.log('right!');
		score = score + 2;
	} else {
		console.log('wrong!');
	}

	console.log('Current score: ', score);
	console.log('-----------------------');
}

function game() {
	for (var i = 0; i < questions.length; i++) {
		var currentQuestion = questions[i];
		play(currentQuestion.question, currentQuestion.answer);
	}
}

function yourScore() {
	if (score >= 3) {
		console.log('YAY! You Scored: ', score);
	} else {
		console.log('You Scored: ', score);
		console.log('Better Luck Next time!');
	}
}

welcome();
game();
yourScore();

var scores = [
	{
		name: 'Sharlet',
		marks: 10,
	},
	{
		name: 'Akshay',
		marks: 9,
	},
	{
		name: 'Steven',
		marks: 8,
	},
	{
		name: 'Raul',
		marks: 8,
	},
];

function displayScore(name, marks) {
	console.log(name, ': ', marks);
}

console.log('-----------------------');
console.log('High Scores: ');

for (var i = 0; i < scores.length; i++) {
	var currentScore = scores[i];
	displayScore(currentScore.name, currentScore.marks);
}

console.log('-----------------------');
