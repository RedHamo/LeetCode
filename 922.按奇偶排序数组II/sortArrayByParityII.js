/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let notOkIndex = []
    for(let i=0; i<nums.length; i++){
        if(isNotOK(i)){
            if(i%2==1) notOkIndex.push(i);
            if(i%2==0) notOkIndex.unshift(i);
        }
    }
    let len = notOkIndex.length;
    for(let i=0; i<len/2; i++){
        let index = notOkIndex[i];
        let index2 = notOkIndex[len-i-1];
        let temp = nums[index]
        nums[index] = nums[index2];
        nums[index2] = temp;
    }
    return nums;

    function isNotOK(index){
        return index%2!=nums[index]%2;
    }
};
