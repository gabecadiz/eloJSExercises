//Eloquent JavaScript Exercise Reversing an Array

//reverseArray takes an array as an argument and produces
// a new array that has the same elements in the inverse order
function reverseArray(array){
  var newReverseArray=[];
  for (var i = 0; i < array.length; i++){
    newReverseArray.unshift(array[i]);
  }
  return newReverseArray;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


//reverseArrayInPlace does what the reverse method does
//it modifies the array given as arguments by reversing its elements

function reverseArrayInPlace(array){
  for(var i = 0; i < Math.floor(array.length/2); i++){
    var old = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-i-1] = old;
    }
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]