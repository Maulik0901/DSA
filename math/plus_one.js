/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(!digits.length || digits.length>= 100) {
        return []
    }
    // if(digits[digits.length-1] >= 0 || digits[digits.length-1] < 9) {
    //     digits[digits.length-1] = digits[digits.length-1] + 1;        
    //     return digits;
    // }

    for(let i=digits.length-1;i>=0;i--){
        if(digits[i] == 9) {
            digits[i] = 0
        }else {
            digits[i] ++;
            return digits;
        }
    }
    
};

console.log(plusOne([0,2,8]))