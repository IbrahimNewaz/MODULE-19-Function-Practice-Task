/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array 
and return the average of those values.
*/

// 🟩🟦 User Defined Function 🟦🟩
function make_avg(A, n)
{
    let suMofArray = 0;
    let i = 0;
    while(i < A.length)
    {
        suMofArray = suMofArray + A[i];
        i++;
    }
    const avgOfvalue = suMofArray / 2;
    return avgOfvalue;
}


/*🟥Main Function🟥*/

const AvGarray = [11, 22, 33, 44, 55];
const sizeOFarray = AvGarray.length;

const fiNalResult = make_avg(AvGarray , sizeOFarray);
