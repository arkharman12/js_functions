/**********
TITLE: Functions
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Functions Lab
ORIGINALLY CREATED ON: 27 Jan 2019
LAST MODIFIED ON: 27 Jan 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function(){
    var strMessageOne; //holds the first part of the command message
    var strMessageTwo; //holds the second part of the command message
    var intMessage; // holds the integer part of the command message

    strMessageOne = "Throw ";
    intMessage = 36;
    strMessageTwo = " kilos of meat and pray for the kraken's blessings. Arrr!";
    writeToPage("command1", strMessageOne, intMessage, strMessageTwo); //calling the function first time with 4 arguments

    strMessageOne = "Get ";
    intMessage = 15;
    strMessageTwo = " hooks n' invade their ship.";
    writeToPage("command2", strMessageOne, intMessage, strMessageTwo); //calling the function second time with 4 arguments

    strMessageOne = "Steer the ship ";
    intMessage = 25; 
    strMessageTwo = " degrees port!";
    writeToPage("command3", strMessageOne, intMessage, strMessageTwo); //calling the function third time with 4 arguments

    strMessageOne = "Steered to ";
    intMessage = 5;
    strMessageTwo = " o'clock, now give 'em a good ol' broadside.";
    writeToPage("command4", strMessageOne, intMessage, strMessageTwo); //calling the function fourth time with 4 arguments

    strMessageOne = "Arrrrgh, ";
    intMessage = 15;
    strMessageTwo = " cannons shot!";
    writeToPage("command5", strMessageOne, intMessage, strMessageTwo); //calling the function fifth time with 4 arguments

}); 

//writeToPage function is responsible for writing each command to the page by concatenating two strings and a number
function writeToPage(strId, strMessageOne, intMessage, strMessageTwo) { //passing in 4 parameters
    var elOutput = document.getElementById(strId); //grabbing the ID for each command
    var strFinalMsg = strMessageOne + intMessage + strMessageTwo; //concatenating the final message
    elOutput.textContent = strFinalMsg //output final message to the page
} //end writeToPage