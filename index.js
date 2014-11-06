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

document.getElementById('basicQuestionOne').innerHTML = 'basicQuestions'[0].question;

function basicQuestion() {
  for (var current = 0; current < 5; document.getElementById('questionOne').innerHTML = 'basicQuestions'[current].question) {
    current = current + 1;
  }
}

document.getElementById('seven').innerHTML = 'basicQuestions'[0].options[0];
document.getElementById('four').innerHTML = 'basicQuestions'[0].options[1];
document.getElementById('five').innerHTML = 'basicQuestions'[0].options[2];
document.getElementById('three').innerHTML = 'basicQuestions'[0].options[3];
