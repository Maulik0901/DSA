// var totalHammingDistance = function(nums) {
//     let ans = 0;

//     for(let i=0;i<nums.length;i++) {
//         for(let j=i+1;j<nums.length;j++) {
//             let pair_ans = 0
//             for(let k=0;k<32;k++){
//                 const a = nums[i] & (1 << k);
//                 const b =  nums[j] & (1 << k);
//                 if(a !== b) {
//                     pair_ans ++
//                 }
//             }
//             ans = ans + pair_ans;
//         }
//     }

//     return ans;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let ans = 0;

    for(let i=0;i<32;i++) {
        let bit0 = 0;
        let bit1 = 0;

        for(let j=0;j<nums.length;j++) {
           let bool_bit = nums[j] & (1 << i);
           if(bool_bit == 0) {
            bit0 ++
           } else {
            bit1 ++
           }
        }
        ans += bit0*bit1;
    }

    return ans;
};