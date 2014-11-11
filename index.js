"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var title = document.getElementById('title');
title.style.fontSize = '75px';
title.style.textAlign = 'center';
title.style.color = '#00F';

var basicQuestionSection = document.getElementById('basicQuestionSection');
basicQuestionSection.style.textAlign = 'center';
basicQuestionSection.style.fontSize = '50px';
basicQuestionSection.style.color = '#F00';
basicQuestionSection.addEventListener('click', basic_question);

var intermediateQuestionSection = document.getElementById('intermediateQuestionSection');
intermediateQuestionSection.style.textAlign = 'center';
intermediateQuestionSection.style.fontSize = '50px';
intermediateQuestionSection.style.color = '#F00';
intermediateQuestionSection.addEventListener('click', intermediate_question);

var advancedQuestionSection = document.getElementById('advancedQuestionSection');
advancedQuestionSection.style.textAlign = 'center';
advancedQuestionSection.style.fontSize = '50px';
advancedQuestionSection.style.color = '#F00';
advancedQuestionSection.addEventListener('click', advanced_question);

var currentBasic = 0;

function basic_question() {
  	document.getElementById('question').innerHTML = basicQuestions[currentBasic].question;
  	document.getElementById('optionOne').innerHTML = basicQuestions[currentBasic].options[0];
	document.getElementById('optionTwo').innerHTML = basicQuestions[currentBasic].options[1];
	document.getElementById('optionThree').innerHTML = basicQuestions[currentBasic].options[2];
	document.getElementById('optionFour').innerHTML = basicQuestions[currentBasic].options[3];
	if (currentBasic === 0) {
	  document.getElementById('optionTwo').addEventListener('click', basic_question);
	} else if (currentBasic === 1) {
	  document.getElementById('optionThree').addEventListener('click', basic_question);
	} else if (currentBasic === 2) {
	  document.getElementById('optionFour').addEventListener('click', basic_question);
	} else if (currentBasic === 3) {
	  document.getElementById('optionOne').addEventListener('click', basic_question);
	} else if (currentBasic === 4) {
	  document.getElementById('optionThree').addEventListener('click', intermediate_question);
	}
    currentBasic = currentBasic + 1;
}

var currentIntermediate = 0;

function intermediate_question() {
  	document.getElementById('question').innerHTML = intermediateQuestions[currentIntermediate].question;
  	document.getElementById('optionOne').innerHTML = intermediateQuestions[currentIntermediate].options[0];
	document.getElementById('optionTwo').innerHTML = intermediateQuestions[currentIntermediate].options[1];
	document.getElementById('optionThree').innerHTML = intermediateQuestions[currentIntermediate].options[2];
	document.getElementById('optionFour').innerHTML = intermediateQuestions[currentIntermediate].options[3];
	if (currentIntermediate === 0) {
	  document.getElementById('optionThree').addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 1) {
	  document.getElementById('optionOne').addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 2) {
	  document.getElementById('optionThree').addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 3) {
	  document.getElementById('optionTwo').addEventListener('click', intermediate_question);
	} else if (currentIntermediate === 4) {
	  document.getElementById('optionFour').addEventListener('click', advanced_question);
	}
    currentIntermediate = currentIntermediate + 1;
}

var currentAdvanced = 0;

function advanced_question() {
  	document.getElementById('question').innerHTML = advancedQuestions[currentAdvanced].question;
  	document.getElementById('optionOne').innerHTML = advancedQuestions[currentAdvanced].options[0];
	document.getElementById('optionTwo').innerHTML = advancedQuestions[currentAdvanced].options[1];
	document.getElementById('optionThree').innerHTML = advancedQuestions[currentAdvanced].options[2];
	document.getElementById('optionFour').innerHTML = advancedQuestions[currentAdvanced].options[3];
	if (currentAdvanced === 0) {
	  document.getElementById('optionTwo').addEventListener('click', intermediate_question);
	} else if (currentAdvanced === 1) {
	  document.getElementById('optionFour').addEventListener('click', intermediate_question);
	} else if (currentAdvanced === 2) {
	  document.getElementById('optionTwo').addEventListener('click', intermediate_question);
	} else if (currentAdvanced === 3) {
	  document.getElementById('optionOne').addEventListener('click', intermediate_question);
	} else if (currentAdvanced === 4) {
	  document.getElementById('optionFour').addEventListener('click', advanced_question);
	}
   currentAdvanced = currentAdvanced + 1;
}