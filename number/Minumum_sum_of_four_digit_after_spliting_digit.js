/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    if(num < 1000 || num > 9999) {
        return 0
    }
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
    return sort[0] + sort[1]
};
console.log(minimumSum(2932))