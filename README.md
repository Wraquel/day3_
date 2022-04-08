# day3_

Hello!

This project I coded as a third challenge of #7daysofcode promoted by Alura.

Check the demo here: https://heartfelt-churros-206030.netlify.app/

In case you want to copy and paste into your console to see the logic of this code using just warnings and alerts, here is the javascript code:

let area = prompt("Do you want to move on to the 'Front-end' or 'Back-end' area? Enter the area name");
let language = ""

if (area === "Front-end") {
language = prompt("Do you want to learn React or Vue?"); } 
else if (area === "Back-end"){
language = prompt("Do you want to learn C# or Java?");} 
else alert ("You did not enter a valid area!");

let message = prompt("Do you want to specialize in your chosen area (1) or continue developing to become Fullstack (2)?");

if (message == 1) {
alert (`Great, keep studing ${language} to learn about ${area}!`)} 
else if (message == 2) {
alert (`It's time to start learning languages other than  ${language} if you want to become a fullstack!`)} 
else alert ("You did not enter a valid area!"); 

let newLanguage = prompt("Do you have any other technology that you would like to learn about? If yes type ok");

while (newLanguage == "ok") {
let whichLanguage = prompt ("Which one?"); 
alert (`${whichLanguage} it's a nice language!`); 
newLanguage = prompt("Do you have any other technology that you would like to learn about? If yes type ok"); 
console.log (newLanguage);}


Languages: CSS3, HTML5, Javascript.
