/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(!digits.length || digits.length>= 100) {
        return []
    }
    
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i] == 9) {
            digits[i] = 0
        }else {
            digits[i] ++;
            return digits;
        }
    }

    if(digits[0] == 0) {
        digits.unshift(1)
    }

    return digits
    
};

console.log(plusOne([9,9,9]))