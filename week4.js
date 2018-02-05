
/*the lines below are to prevent false errors from jslint or eslint in Brackets*/
/*global document, alert, console*/
/*eslint no-console: 0*/
/*eslint no-unused-vars: 0*/
/*jslint devel: true*/
/*jslint browser: true*/
/*jslint node: true */
"use strict"; // required by jslint

/*
File Name: week4.js
Date: 02/04/18
Programmer: Joe Vaughn
*/


// The line below is to test your link to the .js file. Please comment it out (put // in front).
//alert("the link to the .js file is correct!");

// IMPORTANT:

// - Please follow the main directions in Assignment 4. They will talk you through a 
//   logical progression of writing and testing code for this project in the 
//   week4.html and week4.js files.

// - For full credit, you must enter your code *after* the numbered step that 
//   asks for that code.

// - For full credit, you must put a blank line before *and* after your code.

// - Do not delete my comments in this file. I need them for grading.

// - Note that variable names are shown with *stars* around them in the code below.

// 1. Enter the code to put the cursor in the "a" text box when the page loads.

document.getElementById("a").focus();

// 2. Declare 3 variables, *firstNumber*, *secondNumber* and *answer*. Declare each variable on a separate line.
//    Do not assign any values to the variables. We will do that in future steps.

var firstNumber;
var secondNumber;
var answer;

// 3. Create your function clearBoxes below. It will have 3 lines inside. 
//    The first line will set the "a" box to an empty string. The second line will 
//    set the "b" box to an empty string. The third line will set the "c" box to 
//    an empty string.

function clearBoxes() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
}


// 4. Create your function operator below. Set up the function so it can receive one parameter and name it *button* . Refer to Assignment 4 for detailed instructions.

function operator(button) {
  firstNumber = document.getElementById("a").value;
  firstNumber = parseInt(firstNumber, 10)
    
  secondNumber = document.getElementById("b").value;
  secondNumber = parseInt(secondNumber, 10);

    if (button === "Add") {
        var answer = firstNumber + secondNumber;
    }
    
    else if(button === "Subtract") {
        answer = firstNumber - secondNumber;
    }
    
    else if(button === "Multiply") {
        answer = firstNumber * secondNumber;
    }
    
    else if(button === "Divide") {
        answer = firstNumber / secondNumber;
    }
    
    document.getElementById("c").value = answer;
}