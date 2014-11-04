"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

document.getElementById(title);
title.style.fontSize = '75px';
title.style.textAlign = 'center';
title.style.color = '#00F';

document.getElementById(questionSectionTitle);
questionSectionTitle.style.textAlign = 'center';
questionSectionTitle.style.fontSize = '50px';
questionSectionTitle.style.color = '#F00';

document.getElementById(question);
question.style.fontSize = '35px';
question.style.color = '#0F0';

function correct() {
  document.getElementById('responseOne').innerHTML = 'Correct';
}

function incorrect() {
  document.getElementById('responseOne').innerHTML = 'Try Again';
}

document.getElementById('four').addEventListener('click',correct);
four.style.fontSize = '25px';
document.getElementById('five').addEventListener('click',incorrect);
five.style.fontSize = '25px';
document.getElementById('seven').addEventListener('click',incorrect);
seven.style.fontSize = '25px';
document.getElementById('three').addEventListener('click',incorrect);
three.style.fontSize = '25px';