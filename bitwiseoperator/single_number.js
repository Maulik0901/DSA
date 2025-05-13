/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0
    for(let i=0;i<nums.length;i++) {
        console.log(nums[i] , ans,' ====> ', ans ^ nums[i])
        ans = ans ^ nums[i]
       
    }
    return ans
};

console.log(singleNumber([1,2,1,2,4]));
console.log("=================")
// console.log(singleNumber([1,2,3,1,2,4]));