// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

//TC O(N)
//SC O(N)
function removeSmallest(numbers = []) {
const arr = [...numbers]
  let index = 0;
  let minValue = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
      index = i;
      minValue = numbers[i];
    }
  }
  arr.splice(index, 1);
  return arr;
}

//TC O(NlogN)
//SC O(1)
function removeSmallestAltSolution(numbers = []) {
   const index = numbers.indexOf(Math.min(...numbers)) //NLogN
   return [...numbers.splice(0,index),...numbers.splice(index+1,numbers.length-1)]
    }


console.log(removeSmallest([2,2,1,2,2,1]))