/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array 
and return the average of those values.
*/

// 🟩🟦 User Defined Function 🟦🟩
function make_avg(A, n) {

    console.log('The Size of This Array is >>> ', n);

    let suMofArray = 0;
    let i = 0;
    while (i < A.length) {
        suMofArray = suMofArray + A[i];
        i++;
    }
    const avgOfvalue = suMofArray / 2;
    console.log('The sum of the array elements is..." >> ' , suMofArray);
    return avgOfvalue;
}


/*🟥Main Function🟥*/

// const AvGarray = [11, 22, 33, 44, 55];
// const sizeOFarray = AvGarray.length;

"use strict";
const prosyn = require("prompt-sync");
const prompt = prosyn();

let AvGarray = [];
let input;

while (true) {
    input = parseInt(prompt("Enter array element. Type -1 to finish: "));
    if (input === -1) {
        break;
    }
    AvGarray.push(input);
}
const sizeOFarray = AvGarray.length;
console.log("The Array Inputs Are ->", AvGarray.join(" "));

const fiNalResult = make_avg(AvGarray, sizeOFarray);
console.log('Average Of Those Values', fiNalResult);

