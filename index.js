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
basicQuestionSection.addEventListener('click', basic_question)

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
	  document.getElementById('optionThree').addEventListener('click', basic_question);
	}
    currentBasic = currentBasic + 1;
}

function intermediate_question() {
	currentBasic = 0;
  	document.getElementById('question').innerHTML = intermediateQuestions[currentBasic].question;
  	document.getElementById('optionOne').innerHTML = intermediateQuestions[currentBasic].options[0];
	document.getElementById('optionTwo').innerHTML = intermediateQuestions[currentBasic].options[1];
	document.getElementById('optionThree').innerHTML = intermediateQuestions[currentBasic].options[2];
	document.getElementById('optionFour').innerHTML = intermediateQuestions[currentBasic].options[3];
	if (currentBasic === 0) {
	  document.getElementById('optionThree').addEventListener('click', intermediate_question);
	} else if (currentBasic === 1) {
	  document.getElementById('optionThree').addEventListener('click', intermediate_question);
	} else if (currentBasic === 2) {
	  document.getElementById('optionFour').addEventListener('click', intermediate_question);
	} else if (currentBasic === 3) {
	  document.getElementById('optionOne').addEventListener('click', intermediate_question);
	} else if (currentBasic === 4) {
	  document.getElementById('optionThree').addEventListener('click', intermediate_question);
	}
    currentBasic = currentBasic + 1;
}