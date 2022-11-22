/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = []
    for(let i=0; i<nums.length; i++){
        let el = nums[i];
        if(el%2==0) {
            result.unshift(el)
        }else{
            result.push(el)
        }
    }
    return result;
};
