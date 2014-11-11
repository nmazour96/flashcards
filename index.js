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

var currentBasic = 1;

function basic_question_answers() {
	document.getElementById('optionOne').innerHTML = basicQuestions[currentBasic].options[0];
	document.getElementById('optionTwo').innerHTML = basicQuestions[currentBasic].options[1];
	document.getElementById('optionThree').innerHTML = basicQuestions[currentBasic].options[2];
	document.getElementById('optionFour').innerHTML = basicQuestions[currentBasic].options[3];
}

function basic_question() {
  	document.getElementById('basicQuestion').innerHTML = basicQuestions[currentBasic].question;
  	basic_question_answers();
    currentBasic = currentBasic + 1;
}

<<<<<<< HEAD
document.getElementById('basicQuestion').innerHTML = basicQuestions[0].question;
=======
document.getElementById('optionOne').innerHTML = basicQuestions[0].options[0];
document.getElementById('optionTwo').innerHTML = basicQuestions[0].options[1];
document.getElementById('optionThree').innerHTML = basicQuestions[0].options[2];
document.getElementById('optionFour').innerHTML = basicQuestions[0].options[3];
>>>>>>> 468b1115e82f4aa1f055ab8eed93268ee3f9f3b7

document.getElementById('optionOne').innerHTML = basicQuestions[0].options[0];
document.getElementById('optionTwo').innerHTML = basicQuestions[0].options[1];
document.getElementById('optionThree').innerHTML = basicQuestions[0].options[2];
document.getElementById('optionFour').innerHTML = basicQuestions[0].options[3];

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
