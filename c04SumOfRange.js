//Eloquent JavaScript Chapter 4 Exercise The Sum of a Range

/*Range function that takes optional third option
returns an array containing all numbers from start to end counting by given step or default*/

function range (start,end, step = 1){
  var array =[];
  if(start < end){
    for(var i=start; i<=end; i = i + step){
      array.push(i);
    }
  return array;
  }
  else {
    for (var j = start; j>=end; j = j + step){
         array.push(j);
   }
  return array;
  }
}


//sum function that takes an array of numbers and returns the sum of the numbers
function sum(array){
  var arraySum=0;
  for(var i=0; i <array.length; i++){
    arraySum += array[i];
  }
  return arraySum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55