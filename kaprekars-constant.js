// Pick any four digit number and do the following:
// Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
// Take these two numbers and subtract the smaller number from the larger. 
// Suppose we choose the number 8082.
// 8820−0288=8532
// 8532−2358=6174
// 7641−1467=6174 
// It hits 6174 and then stops.
// Count also how many iterations loops are required to get to this point.


const myNum = 9875
let count = 1;

function kaprekar(num){
  let smallest = Array.from(num.toString()).map(Number).sort(function(a, b){return a-b})
  smallest = Number(smallest.join(''))
  let biggest = Array.from(num.toString()).map(Number).sort(function(a, b){return b-a})
  biggest = Number(biggest.join(''))
  const result = biggest - smallest
  if(result != 6174){
    count++;
    return kaprekar(result)
  } else {return`${result}, count: ${count}`;}
}

console.log(kaprekar(myNum))