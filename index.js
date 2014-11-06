"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var title = document.getElementById('title');
title.style.fontSize = '75px';
title.style.textAlign = 'center';
title.style.color = '#00F';

var questionSectionTitle = document.getElementById(questionSectionTitle);
questionSectionTitle.style.textAlign = 'center';
questionSectionTitle.style.fontSize = '50px';
questionSectionTitle.style.color = '#F00';

var question = document.getElementById(question);
question.style.fontSize = '35px';
question.style.color = '#0F0';

var response = document.getElementById(response);
response.style.fontSize = '35px';

function correct() {
  document.getElementById('response').innerHTML = 'Correct';
}

function incorrect() {
  document.getElementById('response').innerHTML = 'Try Again';
}

document.getElementById('four').addEventListener('click',correct);
document.getElementById('five').addEventListener('click',incorrect);
document.getElementById('seven').addEventListener('click',incorrect);
document.getElementById('three').addEventListener('click',incorrect);