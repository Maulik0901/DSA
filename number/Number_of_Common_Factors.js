/**
 * Problem Statement :

    Given two positive integers a and b, return the number of common factors of a and b.

    An integer x is a common factor of a and b if x divides both a and b.

    Example 1:
        Input: a = 12, b = 6
        Output: 4
        Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
    
    Example 2:
        Input: a = 25, b = 30
        Output: 2
        Explanation: The common factors of 25 and 30 are 1, 5.

    Constraints: • 
        1 <= a, b <= 1000
 */

var number_of_common_factor = function(x,y)  {
  if((x <= 1 || x > 1000) || (y <= 1 || y > 1000))  {
    return 0;
  }

  const ans = []; 
  const min = x > y ? y : x;

  for(let i=1;i<=min;i++){
    if(x % i === 0 && y % i === 0) {
      ans.push(i);
    }
  }

  return ans.length;
}

const num = 2436
const aryPairs = []
for(let i=num.toString().length;i>=1;i--){
    let firstChar = String(num).charAt(i-1);
    for(let j=1;j<=num.toString().length;j++) {
        if(i == j) {
            continue;
        }
        let secondChar = String(num).charAt(j-1);
        let number = Number(firstChar)*10+Number(secondChar);
        if(number !== 0 && firstChar !== secondChar) {
            aryPairs.push(number)
        }
        
    }
}
const unique = [...new Set(aryPairs)];
const sort = unique.sort((a,b) => a-b)
console.log(sort)
console.log(sort[0] + sort[1])
// console.log(number_of_common_factor(12,6));