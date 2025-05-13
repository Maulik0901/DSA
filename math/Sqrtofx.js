var mySqrt = function(x) {
    if(x == 0 || x == 1) {
        return x;
    }

    x = parseInt(x/2);
    return x;
};

console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(4))
console.log(mySqrt(15))
