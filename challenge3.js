// *Implement your own version of .map*
// Define a function that takes a callback and provides the same 
// functionality as the .map function inbuilt into ES6. You can do 
// this as a function that extends the array prototype (which takes 
// a callback function as an argument), or more simply as a function 
// that takes an array as an argument, as well as a callback function.


Array.prototype.mappyMap = function(callback){
    this.forEach(function(item){
      return callback(item);
    })
  }
  
  
  const myArray = [1,3,5];
  
  myArray.mappyMap(function(num){
    return num * 5;
  })