// Write a function called arrayMultiply that takes two numbers, 
// and callback function as arguments. Return the callback function 
// with the two numbers (those arguments) multiplied together as its argument.

// Define a variable and in it store the result of arrayMultiply 
// when called with 2, 2, [1,2,3], and then an anonymous function 
// that takes the result as an argument, and then multiplies each 
//element in the array by that result. When you console.log this 
// variable to screen it should produce [ 4, 8, 12 ].

function arrayMultiply(x, y, arr, funct){
  const multiplier = x * y
  return funct(arr, multiplier)
}

const results = arrayMultiply(2, 2, [1,2,3], function(arr, multiplier){
  return arr.map( item => item * multiplier)
})