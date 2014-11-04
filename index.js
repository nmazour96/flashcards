"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

function correct() {
  document.getElementById('response').innerHTML = 'Correct';
}

function incorrect() {
  document.getElementById('response').innerHTML = 'Incorrect';
}

document.getElementById('4').addEventListener('click',correct);
document.getElementById('5').addEventListener('click',incorrect);
document.getElementById('7').addEventListener('click',incorrect);
document.getElementById('3').addEventListener('click',incorrect);