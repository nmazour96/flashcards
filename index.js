"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var question = document.getElementById('question');
var correct = document.getElementById('correct');
var choices = [document.getElementById('options')];

var score = 0;
var currentBasic = 0;
var currentIntermediate = 0;
var currentAdvanced = 0;
var option = 0;

var message = document.getElementById('message');
message.style.display = 'none';
message.style.fontSize = '100px';
message.style.color = '#F00';

var options = document.getElementById('options');
options.style.display = 'none';

var congrats = document.getElementById('congrats');
congrats.style.display = 'none';

var instructions = document.getElementById('instructions');
instructions.style.display = 'none';

var lastQuestionOptions = document.getElementById('lastQuestionOptions');
lastQuestionOptions.style.display = 'none';

var answer = document.getElementById('answer');
answer.style.fontSize = '35px';
answer.style.color = '#0C8';

var scoreCalculator = document.getElementById('scoreCalculator');
scoreCalculator.style.fontSize = '35px';
scoreCalculator.style.color = '#0C8';

var sectionTitles = document.getElementById('sectionTitles');
sectionTitles.style.fontSize = '50px';

var basicQuestionSection = document.getElementById('basicQuestionSection');
basicQuestionSection.style.color = '#F00';
basicQuestionSection.addEventListener('click', basic_question);

var intermediateQuestionSection = document.getElementById('intermediateQuestionSection');
intermediateQuestionSection.style.color = '#081';
intermediateQuestionSection.addEventListener('click', intermediate_question);

var advancedQuestionSection = document.getElementById('advancedQuestionSection');
advancedQuestionSection.style.color = '#00F';
advancedQuestionSection.addEventListener('click', advanced_question);

function basic_question() {
	options.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
  	question.innerHTML = basicQuestions[currentBasic].question;
	while (option < 4) {
		choices[option].innerHTML = basicQuestions[currentBasic].options[option];
		choices[option].removeEventListener('click', basic_correct);
		choices[option].removeEventListener('click', home);
		choices[option].addEventListener('click',incorrect);
		option = option + 1;
	}
	if (currentBasic === 0) {
		choices[1].removeEventListener('click', incorrect);
		choices[1].addEventListener('click', basic_correct);
	} else if (currentBasic === 1) {
		choices[2].removeEventListener('click', incorrect);
		choices[2].addEventListener('click', basic_correct);
	} else if (currentBasic === 2) {
		choices[3].removeEventListener('click', incorrect);
		choices[3].addEventListener('click', basic_correct);
	} else if (currentBasic === 3) {
		choices[0].removeEventListener('click', incorrect);
		choices[0].addEventListener('click', basic_correct);
	} else if (currentBasic === 4) {
		choices[2].removeEventListener('click', incorrect);
		choices[2].addEventListener('click', home);
	}
    currentBasic = currentBasic + 1;
    disable_basic();
    option = 0;
}

function intermediate_question() {
	options.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
  	question.innerHTML = intermediateQuestions[currentIntermediate].question;
	while (option < 4) {
		choices[option].innerHTML = intermediateQuestions[currentAdvanced].options[option];
		choices[option].removeEventListener('click', intermediate_correct);
		choices[option].removeEventListener('click', home);
		choices[option].addEventListener('click',incorrect);
		option = option + 1;
	}
	if (currentIntermediate === 0) {
		choices[1].removeEventListener('click', incorrect);
		choices[1].addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 1) {
		choices[0].removeEventListener('click', incorrect);
		choices[0].addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 2) {
		choices[2].removeEventListener('click', incorrect);
		choices[2].addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 3) {
		choices[1].removeEventListener('click', incorrect);
		choices[1].addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 4) {
		choices[3].removeEventListener('click', incorrect);
		choices[3].addEventListener('click', home);
	}
    currentIntermediate = currentIntermediate + 1;
    disable_intermediate();
    option = 0;
}

function advanced_question() {
	options.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
	question.innerHTML = advancedQuestions[currentAdvanced].question;
	while (option < 4) {
		choices[option].innerHTML = advancedQuestions[currentAdvanced].options[option];
		choices[option].removeEventListener('click', advanced_correct);
		choices[option].removeEventListener('click', home);
		choices[option].addEventListener('click',incorrect);
		option = option + 1;
	}
	if (currentAdvanced === 0) {
		choices[1].removeEventListener('click', incorrect);
		choices[1].addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 1) {
		choices[3].removeEventListener('click', incorrect);
		choices[3].addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 2) {
		choices[1].removeEventListener('click', incorrect);
		choices[1].addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 3) {
		choices[0].removeEventListener('click', incorrect);
		choices[0].addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 4) {
		options.style.display = 'none';
		lastQuestionOptions.style.display = 'block';
		option = 0;
		while (option < 22) {
			choices[option].innerHTML = advancedQuestions[currentAdvanced].options[option];
			option = option + 1;
		}
		choices[19].addEventListener('click', home);
	}
	currentAdvanced = currentAdvanced + 1;
	disable_advanced();
	option = 0;
}

function home() {
	options.style.display = 'none';
	lastQuestionOptions.display = 'none';
	question.style.display = 'none';
	answer.innerHTML = '';
	sectionTitles.style.display = 'block';
	score = score + 1;
	correct.innerHTML = score;
	option = 0;
	congratulations();
}

function incorrect () {
	answer.innerHTML = 'INCORRECT';
	score = score - 1;
	correct.innerHTML = score;
}

function basic_correct() {
	answer.innerHTML = 'CORRECT';
	basic_question();
	score = score + 1;
	correct.innerHTML = score;
}

function intermediate_correct() {
	answer.innerHTML = 'CORRECT';
	intermediate_question();
	score = score + 1;
	correct.innerHTML = score;
}

function advanced_correct() {
	answer.innerHTML = 'CORRECT';
	advanced_question();
	score = score + 1;
	correct.innerHTML = score;
}

function disable_basic() {
	basicQuestionSection.removeEventListener('click', basic_question);
	basicQuestionSection.style.opacity = '.3';
}

function disable_intermediate() {
	intermediateQuestionSection.removeEventListener('click', intermediate_question);
	intermediateQuestionSection.style.opacity = '.3';
}

function disable_advanced() {
	advancedQuestionSection.removeEventListener('click', advanced_question);
	advancedQuestionSection.style.opacity = '.3';
}

function congratulations() {
	if (score === 15) {
		congrats.style.display = 'block';
		message.style.display = 'block';
		instructions.style.display = 'block';
		scoreCalculator.style.display = 'none';
		basicQuestionSection.style.display = 'none';
		intermediateQuestionSection.style.display = 'none';
		advancedQuestionSection.style.display = 'none';
		document.getElementById('title').style.display = 'none';
	}
}