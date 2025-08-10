/*
Task-2
* -   Take a number if the number is odd multiply it by 2 and return the result.
* -   If the number is even divide it by two and return the result.


*/

// 🟩🟦 User Defined Function 🟦🟩//
function calcULAtion(NumBer) {
    if (NumBer % 2 !== 0) {
        const oddResult = NumBer * 2;
        return oddResult;
    }
    else {
        const evenRsult = NumBer / 2;
        return evenRsult;
    }
}

// 🟥Main Function🟥 //

"use strict";
const prosyn = require("prompt-sync");
const prompt = prosyn();

const userNumber = parseInt(prompt("Please Enter Your Integer Number >>> "));
const ansWer = calcULAtion(userNumber);
console.log('The Final Result is : ' , ansWer);

// Some Extra Practice //
if (userNumber % 2 !== 0) {
    console.log("Your Number is an Odd Number")
    console.log("Your final result after multiply by 2 is " + ansWer.toFixed(2));
}
else {
    console.log("Your Number is an Even Number")
    console.log("Your final result after Divided by 2 is " + ansWer.toFixed(2));
}
