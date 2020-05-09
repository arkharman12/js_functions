/**********
TITLE: Conversions
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Conversions Lab
ORIGINALLY CREATED ON: 20 Jan 2019
LAST MODIFIED ON: 20 Jan 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function(){
    var elResponse = document.getElementById("name"); //grabbing the HTML id element so I can work with it
    var strQuestion = "What is your pirate name?"; //default prompt question
    var strDefaultAns = "Dobbs \'One Leg\' Yardly"; //default prompt answer
    var strAnswer = ""; //user's answer will be stored here but empty for now
    var strMessage = "I, "; //a useful string for the final answer
    strAnswer = prompt(strQuestion, strDefaultAns); //finally storing the user's answer


    var strQuestionTwo = "How many gold doubloons have you plundered?"; //default prompt question
    var strDefaultAnsTwo = "10"; //default prompt answer
    var strAnswerTwo = ""; //user's answer will be stored here but empty for now
    strAnswerTwo = prompt(strQuestionTwo, strDefaultAnsTwo); //finally storing the user's answer
    var intAnswerTwo = parseInt(strAnswerTwo); //converting the answer to an integer and storing it
    var intCalculation = intAnswerTwo * 287; //performing the calculation
    var strMessageTwo = "have plundered " //a useful string for the final answer
    
    elResponse.textContent = strMessage + strAnswer + ", " + strMessageTwo + strAnswerTwo + " gold plunders for a total profit of $" + intCalculation + ". Argh!"; 

}); 