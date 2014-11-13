"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var question = document.getElementById('question');

var answer = document.getElementById('answer');
answer.style.fontSize = 35px;
answer.style.color = '#000';
answer.style.backgroundColor = '#FFF';

var correct = document.getElementById('correct');

var score = 0;

var basicOptions = document.getElementById('basicOptions');
basicOptions.style.display = 'none';
var basicOptionOne = document.getElementById('basicOptionOne');
var basicOptionTwo = document.getElementById('basicOptionTwo');
var basicOptionThree = document.getElementById('basicOptionThree');
var basicOptionFour = document.getElementById('basicOptionFour');

var intermediateOptions = document.getElementById('intermediateOptions');
intermediateOptions.style.display = 'none';
var intermediateOptionOne = document.getElementById('intermediateOptionOne');
var intermediateOptionTwo = document.getElementById('intermediateOptionTwo');
var intermediateOptionThree = document.getElementById('intermediateOptionThree');
var intermediateOptionFour = document.getElementById('intermediateOptionFour');

var advancedOptions = document.getElementById('advancedOptions');
advancedOptions.style.display = 'none';
var advancedOptionOne = document.getElementById('advancedOptionOne');
var advancedOptionTwo = document.getElementById('advancedOptionTwo');
var advancedOptionThree = document.getElementById('advancedOptionThree');
var advancedOptionFour = document.getElementById('advancedOptionFour');

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

var currentBasic = 0;

function basic_question() {
	basicOptions.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
  	question.innerHTML = basicQuestions[currentBasic].question;
  	basicOptionOne.innerHTML = basicQuestions[currentBasic].options[0];
	basicOptionTwo.innerHTML = basicQuestions[currentBasic].options[1];
	basicOptionThree.innerHTML = basicQuestions[currentBasic].options[2];
	basicOptionFour.innerHTML = basicQuestions[currentBasic].options[3];
	basicOptionOne.removeEventListener('click', basic_correct);
	basicOptionTwo.removeEventListener('click', basic_correct);
	basicOptionThree.removeEventListener('click', basic_correct);
	basicOptionFour.removeEventListener('click', basic_correct);
	if (currentBasic === 0) {
		basicOptionTwo.addEventListener('click', basic_correct);
	} else if (currentBasic === 1) {
		basicOptionThree.addEventListener('click', basic_correct);
	} else if (currentBasic === 2) {
		basicOptionFour.addEventListener('click', basic_correct);
	} else if (currentBasic === 3) {
		basicOptionOne.addEventListener('click', basic_correct);
	} else if (currentBasic === 4) {
		basicOptionThree.addEventListener('click', home);
	}
    currentBasic = currentBasic + 1;
}

var currentIntermediate = 0;

function intermediate_question() {
	intermediateOptions.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
  	question.innerHTML = intermediateQuestions[currentIntermediate].question;
  	intermediateOptionOne.innerHTML = intermediateQuestions[currentIntermediate].options[0];
	intermediateOptionTwo.innerHTML = intermediateQuestions[currentIntermediate].options[1];
	intermediateOptionThree.innerHTML = intermediateQuestions[currentIntermediate].options[2];
	intermediateOptionFour.innerHTML = intermediateQuestions[currentIntermediate].options[3];
	intermediateOptionOne.removeEventListener('click', intermediate_correct);
	intermediateOptionTwo.removeEventListener('click', intermediate_correct);
	intermediateOptionThree.removeEventListener('click', intermediate_correct);
	intermediateOptionFour.removeEventListener('click', intermediate_correct);
	if (currentIntermediate === 0) {
		intermediateOptionTwo.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 1) {
		intermediateOptionOne.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 2) {
		intermediateOptionThree.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 3) {
		intermediateOptionTwo.addEventListener('click', intermediate_correct);
	} else if (currentIntermediate === 4) {
		intermediateOptionFour.addEventListener('click', home);
	}
    currentIntermediate = currentIntermediate + 1;
}

var currentAdvanced = 0;

function advanced_question() {
	advancedOptions.style.display = 'block';
	question.style.display = 'block';
	sectionTitles.style.display = 'none';
	question.innerHTML = advancedQuestions[currentAdvanced].question;
	advancedOptionOne.innerHTML = advancedQuestions[currentAdvanced].options[0];
	advancedOptionTwo.innerHTML = advancedQuestions[currentAdvanced].options[1];
	advancedOptionThree.innerHTML = advancedQuestions[currentAdvanced].options[2];
	advancedOptionFour.innerHTML = advancedQuestions[currentAdvanced].options[3];
	advancedOptionOne.addEventListener('click', incorrect);
	advancedOptionOne.removeEventListener('click', advanced_correct);
	advancedOptionTwo.removeEventListener('click', advanced_correct);
	advancedOptionThree.removeEventListener('click', advanced_correct);
	advancedOptionFour.removeEventListener('click', advanced_correct);
	if (currentAdvanced === 0) {
		advancedOptionTwo.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 1) {
		advancedOptionFour.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 2) {
		advancedOptionTwo.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 3) {
		advancedOptionOne.addEventListener('click', advanced_correct);
	} else if (currentAdvanced === 4) {
		advancedOptionFour.addEventListener('click', home);
	}
	currentAdvanced = currentAdvanced + 1;
}

function home() {
	basicOptions.style.display = 'none';
	intermediateOptions.style.display = 'none';
	advancedOptions.style.display = 'none';
	question.style.display = 'none';
	answer.innerHTML = '';
	sectionTitles.style.display = 'block';
	currentBasic = 0;
	currentIntermediate = 0;
	currentAdvanced = 0;
}

function incorrect () {
	answer.innerHTML = 'INCORRECT';
}

function basic_correct() {
	answer.innerHTML = 'CORRECT';
	basic_question();
}

function intermediate_correct() {
	answer.innerHTML = 'CORRECT';
	intermediate_question();
}

function advanced_correct() {
	answer.innerHTML = 'CORRECT';
	advanced_question();
}