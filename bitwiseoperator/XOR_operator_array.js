var xorOperation = function(n, start) {
    let ans = 0;
    for(let i=0;i<n;i++){
        ans = ans ^ (start + 2 * i)
    }
    return ans
};

console.log(xorOperation(5,0))