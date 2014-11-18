"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var question = document.getElementById('question');
var correct = document.getElementById('correct');
var optionOne = document.getElementById('optionOne');
var optionTwo = document.getElementById('optionTwo');
var optionThree = document.getElementById('optionThree');
var optionFour = document.getElementById('optionFour');
var choices = [optionOne, optionTwo, optionThree, optionFour];
var option = 1;

var score = 0;
var currentBasic = 0;
var currentIntermediate = 0;
var currentAdvanced = 0;

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
  	choices[1].innerHTML = basicQuestions[currentBasic].options[0];
	choices[2].innerHTML = basicQuestions[currentBasic].options[1];
	choices[3].innerHTML = basicQuestions[currentBasic].options[2];
	choices[4].innerHTML = basicQuestions[currentBasic].options[3];
	while (option < 5) {
		choices[option].removeEventListener('click', basic_correct);
		choices[option].removeEventListener('click', home);
		choices[option].addEventListener('click',incorrect);
	}
	if (currentBasic === 0) {
		optionTwo.removeEventListener('click', incorrect);
		optionTwo.addEventListener('click', basic_correct);
	} else if (currentBasic === 1) {
		optionThree.removeEventListener('click', incorrect);
		optionThree.addEventListener('click', basic_correct);
	} else if (currentBasic === 2) {
		optionFour.removeEventListener('click', incorrect);
		optionFour.addEventListener('click', basic_correct);
	} else if (currentBasic === 3) {
		optionOne.removeEventListener('click', incorrect);
		optionOne.addEventListener('click', basic_correct);
	} else if (currentBasic === 4) {
		optionThree.removeEventListener('click', incorrect);
		optionThree.addEventListener('click', home);
	}
    currentBasic = currentBasic + 1;
    disable_basic();
}

function intermediate_question() {
	options.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
  	question.innerHTML = intermediateQuestions[currentIntermediate].question;
  	optionOne.innerHTML = intermediateQuestions[currentIntermediate].options[0];
	optionTwo.innerHTML = intermediateQuestions[currentIntermediate].options[1];
	optionThree.innerHTML = intermediateQuestions[currentIntermediate].options[2];
	optionFour.innerHTML = intermediateQuestions[currentIntermediate].options[3];
	optionOne.removeEventListener('click', intermediate_correct);
	optionOne.addEventListener('click', incorrect);
	optionTwo.removeEventListener('click', intermediate_correct);
	optionTwo.addEventListener('click', incorrect);
	optionThree.removeEventListener('click', intermediate_correct);
	optionThree.removeEventListener('click', home);
	optionThree.addEventListener('click', incorrect);
	optionFour.removeEventListener('click', intermediate_correct);
	optionFour.removeEventListener('click', home);
	optionFour.addEventListener('click', incorrect);
	if (currentIntermediate === 0) {
		optionTwo.removeEventListener('click', incorrect);
		optionTwo.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 1) {
		optionOne.removeEventListener('click', incorrect);
		optionOne.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 2) {
		optionThree.removeEventListener('click', incorrect);
		optionThree.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 3) {
		optionTwo.removeEventListener('click', incorrect);
		optionTwo.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 4) {
		optionFour.removeEventListener('click', incorrect);
		optionFour.addEventListener('click', home);
	}
    currentIntermediate = currentIntermediate + 1;
    disable_intermediate();
}

function advanced_question() {
	options.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
	question.innerHTML = advancedQuestions[currentAdvanced].question;
	optionOne.innerHTML = advancedQuestions[currentAdvanced].options[0];
	optionTwo.innerHTML = advancedQuestions[currentAdvanced].options[1];
	optionThree.innerHTML = advancedQuestions[currentAdvanced].options[2];
	optionFour.innerHTML = advancedQuestions[currentAdvanced].options[3];
	optionOne.removeEventListener('click', advanced_correct);
	optionOne.addEventListener('click', incorrect);
	optionTwo.removeEventListener('click', advanced_correct);
	optionTwo.addEventListener('click', incorrect);
	optionThree.removeEventListener('click', advanced_correct);
	optionThree.removeEventListener('click', home);
	optionThree.addEventListener('click', incorrect);
	optionFour.removeEventListener('click', advanced_correct);
	optionFour.removeEventListener('click', home);
	optionFour.addEventListener('click', incorrect);
	if (currentAdvanced === 0) {
		optionTwo.removeEventListener('click', incorrect);
		optionTwo.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 1) {
		optionFour.removeEventListener('click', incorrect);
		optionFour.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 2) {
		optionTwo.removeEventListener('click', incorrect);
		optionTwo.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 3) {
		optionOne.removeEventListener('click', incorrect);
		optionOne.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 4) {
		optionFour.removeEventListener('click', incorrect);
		optionFour.addEventListener('click', home);
	}
	currentAdvanced = currentAdvanced + 1;
	disable_advanced();
}

function home() {
	options.style.display = 'none';
	question.style.display = 'none';
	answer.innerHTML = '';
	sectionTitles.style.display = 'block';
	score = score + 1;
	correct.innerHTML = score;
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