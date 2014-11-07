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

document.getElementById('basicQuestion').innerHTML = basicQuestions[0].question;

var currentBasic = 1;

function basic_question_answers() {
	document.getElementById('optionOne').innerHTML = basicQuestions[currentBasic].options[0];
	document.getElementById('optionTwo').innerHTML = basicQuestions[currentBasic].options[1];
	document.getElementById('optionThree').innerHTML = basicQuestions[currentBasic].options[2];
	document.getElementById('optionFour').innerHTML = basicQuestions[currentBasic].options[3];
}

function basic_question() {
  	document.getElementById('basicQuestion').innerHTML = basicQuestions[currentBasic].question;
  	currentBasic = currentBasic + 1;
  	basic_question_answers();
}

document.getElementById('optionOneOne').innerHTML = basicQuestions[0].options[0];
document.getElementById('optionTwoOne').innerHTML = basicQuestions[0].options[1];
document.getElementById('optionThreeOne').innerHTML = basicQuestions[0].options[2];
document.getElementById('optionFourOne').innerHTML = basicQuestions[0].options[3];

document.getElementById('optionTwoOne').addEventListener('click', basic_question);

