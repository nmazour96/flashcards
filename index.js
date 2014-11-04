"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

document.getElementById('title');
'title'.style.fontSize = '75px';
'title'.style.textAlign = 'center';
'title'.style.color = '#00F';

document.getElementById('basicQuestionsTitle');
'basicQuestionsTitle'.style.textAlign = 'center';
'basicQuestionsTitle'.style.fontSize = '35px';
'basicQuestionsTitle'.style.color = '#F00';

function correct() {
  document.getElementById('responseOne').innerHTML = 'Correct';
}

function incorrect() {
  document.getElementById('responseOne').innerHTML = 'Incorrect';
}

document.getElementById('four').addEventListener('click',correct);
document.getElementById('five').addEventListener('click',incorrect);
document.getElementById('seven').addEventListener('click',incorrect);
document.getElementById('three').addEventListener('click',incorrect);