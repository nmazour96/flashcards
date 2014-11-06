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

var currentBasic = 0

document.getElementById('basicQuestion').innerHTML = basicQuestions[currentBasic].question;

document.getElementById('basicQuestionAnswer') = basicQuestions[currentBasic].answer[currentBasic];

function basic_question() {
  document.getElementById('basicQuestion').innerHTML = basicQuestions[currentBasic].question;
  currentBasic = currentBasic + 1;
}

document.getElementById('optionOne').innerHTML = basicQuestions[currentBasic].options[0];
document.getElementById('optionTwo').innerHTML = basicQuestions[currentBasic].options[1];
document.getElementById('optionThree').innerHTML = basicQuestions[currentBasic].options[2];
document.getElementById('optionFour').innerHTML = basicQuestions[currentBasic].options[3];

document.getElementById('basicQuestionAnswer').addEventListener('click', basic_question);