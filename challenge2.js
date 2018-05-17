// Write a function called arrayMultiplyAgain that takes a number and 
// an array as arguments, and returns each element in the array 
// multiplied by the number. 

// Now write a second function called moreArrayMultiply that takes 
// three arguments: a number, an array, and a function: (eg. num, arr, funct).
// Have this function return the result of number and array when  called 
// as arguments to arrayMultiplyAgain which you passed in as an argument.

// Define a variable and in it store the result of the second function 
// when called with 2, [1,2,3], and the first function you created. 
// When you console.log this variable to screen it should produce [ 2, 4, 6 ].




function arrayMultiplyAgain(num, arr){
    const inputArray = arr;
    const inputNum = num;
    const results = [];
    inputArray.forEach(function(item, i){
      results.push(item * num);
    })
    console.log(results);
    return results;
  }
  
  function moreArrayMultiply(num, arr, funct){
    const store = funct(num, arr);
  }
  
  moreArrayMultiply(2, [1,2,3], arrayMultiplyAgain);