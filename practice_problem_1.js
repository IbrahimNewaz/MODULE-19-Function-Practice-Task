/*
Simple function Related Practice Tasks
Task-1
Take four parameters. Multiply the four numbers and then return the result
*/

// 🟩🟦 User Defined Function 🟦🟩//
function multiplyTask(a, b, c, d)
{
    const multi = a * b * c * d;
    return multi;
}

// 🚩 Main Function 🚩 //
"use strict";
const prosyn = require("prompt-sync");
const prompt = prosyn();
let NumbersA = parseInt(prompt("Please Enter Your 1st Positive Integer Number in Here >>>  "))
let Numbersb = parseInt(prompt("Please Enter Your 2nd Positive Integer Number in Here >>>  "))
let Numbersc = parseInt(prompt("Please Enter Your 3rd Positive Integer Number in Here >>>  "))
let Numbersd = parseInt(prompt("Please Enter Your 4th Positive Integer Number in Here >>>  "))

const result = multiplyTask(NumbersA, Numbersb, Numbersc, Numbersd);
