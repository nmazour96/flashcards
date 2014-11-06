"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var title = document.getElementById('title');
title.style.fontSize = '75px';
title.style.textAlign = 'center';
title.style.color = '#00F';

var questionSectionTitle = document.getElementById('questionSectionTitle');
questionSectionTitle.style.textAlign = 'center';
questionSectionTitle.style.fontSize = '50px';
questionSectionTitle.style.color = '#F00';

document.getElementById('basicQuestion').innerHTML = basicQuestions[0].question;

function basic_question() {
  for (var current = 0; current < 5; document.getElementById('basicQuestion').innerHTML = basicQuestions[current].question) {
    current = current + 1;
  }
}

document.getElementById('optionOne').innerHTML = basicQuestions[0].options[0];
document.getElementById('optionTwo').innerHTML = basicQuestions[0].options[1];
document.getElementById('optionThree').innerHTML = basicQuestions[0].options[2];
document.getElementById('optionFour').innerHTML = basicQuestions[0].options[3];

document.getElementById(basicQuestions[0].answer).addEventListener('click', basic_question);
