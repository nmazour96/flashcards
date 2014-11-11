"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var question = document.getElementById('question');
var optionOne = document.getElementById('optionOne');
var optionTwo = document.getElementById('optionTwo');
var optionThree = document.getElementById('optionThree');
var optionFour = document.getElementById('optionFour');

var options = document.getElementById('options');
options.style.display = 'none';

var title = document.getElementById('title');
title.style.fontSize = '75px';
title.style.textAlign = 'center';
title.style.color = '#00F';

var sectionTitles = document.getElementById('sectionTitles');
sectionTitles.style.textAlign = 'center';
sectionTitles.style.fontSize = '50px';

var basicQuestionSection = document.getElementById('basicQuestionSection');
basicQuestionSection.style.color = '#F00';
basicQuestionSection.addEventListener('click', basic_question);

var intermediateQuestionSection = document.getElementById('intermediateQuestionSection');
intermediateQuestionSection.style.color = '#0F0';
intermediateQuestionSection.addEventListener('click', intermediate_question);

var advancedQuestionSection = document.getElementById('advancedQuestionSection');
advancedQuestionSection.style.color = '#00F';
advancedQuestionSection.addEventListener('click', advanced_question);

var currentBasic = 0;

function basic_question() {
	options.style.display = 'block';
	question.style.display = 'block';
  	question.innerHTML = basicQuestions[currentBasic].question;
  	optionOne.innerHTML = basicQuestions[currentBasic].options[0];
	optionTwo.innerHTML = basicQuestions[currentBasic].options[1];
	optionThree.innerHTML = basicQuestions[currentBasic].options[2];
	optionFour.innerHTML = basicQuestions[currentBasic].options[3];
	if (currentBasic === 0) {
	  optionTwo.addEventListener('click', basic_question);
	} else if (currentBasic === 1) {
	  optionThree.addEventListener('click', basic_question);
	} else if (currentBasic === 2) {
	  optionFour.addEventListener('click', basic_question);
	} else if (currentBasic === 3) {
	  optionOne.addEventListener('click', basic_question);
	} else if (currentBasic === 4) {
	  optionThree.addEventListener('click', home);
	}
    currentBasic = currentBasic + 1;
}

var currentIntermediate = 0;

function intermediate_question() {
	options.style.display = 'block';
	question.style.display = 'block';
  	question.innerHTML = intermediateQuestions[currentIntermediate].question;
  	optionOne.innerHTML = intermediateQuestions[currentIntermediate].options[0];
	optionTwo.innerHTML = intermediateQuestions[currentIntermediate].options[1];
	optionThree.innerHTML = intermediateQuestions[currentIntermediate].options[2];
	optionFour.innerHTML = intermediateQuestions[currentIntermediate].options[3];
	if (currentIntermediate === 0) {
	  optionThree.addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 1) {
	  optionOne.addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 2) {
	  optionThree.addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 3) {
	  optionTwo.addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 4) {
	  optionFour.addEventListener('click', home);
	}
    currentIntermediate = currentIntermediate + 1;
}

var currentAdvanced = 0;

function advanced_question() {
	options.style.display = 'block';
	question.style.display = 'block';
  	question.innerHTML = advancedQuestions[currentAdvanced].question;
  	optionOne.innerHTML = advancedQuestions[currentAdvanced].options[0];
	optionTwo.innerHTML = advancedQuestions[currentAdvanced].options[1];
	optionThree.innerHTML = advancedQuestions[currentAdvanced].options[2];
	optionFour.innerHTML = advancedQuestions[currentAdvanced].options[3];
	if (currentAdvanced === 0) {
	  optionTwo.addEventListener('click', advanced_question);
	} else if (currentAdvanced === 1) {
	  optionFour.addEventListener('click', advanced_question);
	} else if (currentAdvanced === 2) {
	  optionTwo.addEventListener('click', advanced_question);
	} else if (currentAdvanced === 3) {
	  optionOne.addEventListener('click', advanced_question);
	} else if (currentAdvanced === 4) {
	  optionFour.addEventListener('click', home);
	}
   currentAdvanced = currentAdvanced + 1;
}

function home() {
	options.style.display = 'none';
	question.style.display = 'none';
	currentBasic = 0;
	currentIntermediate = 0;
	currentAdvanced = 0;
}