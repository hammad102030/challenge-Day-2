// **2nd Day Task Of 30 Days Challenge From Hello Coders Team**
// *Question 3:*
//  First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.
function newArray(num) {
    if (num.length === 0) {
        return [num[0], num[0]];
    }
    else {
        return [num[0], num[num.length - 1]];
    }
}
console.log(newArray([1, 2, 3, 4, 5]));
// *Requirements:*
// If the array has only one element, the function should return an array with that element duplicated.
// Ensure the function handles arrays with a single element correctly.
// *2nd Day Task Of 30 Days Challenge From Hello Coders Team*
// Question: 4 
// Find the Largest Number
// Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.
function largestNum(numbers) {
    var myNum = numbers[0];
    // Array ke har element ko check karne ke liye loop lagay ga.
    for (var i = 1; i < numbers.length; i++)
        if (numbers[i] > myNum) {
            myNum = numbers[i];
        }
    return myNum;
}
// let newArray = [2,3,6,5,10,8,9]
// console.log(largestNum(newArray)); // output 10
