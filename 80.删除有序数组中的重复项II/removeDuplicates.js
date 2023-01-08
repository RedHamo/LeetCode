/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let obj = {
        current : nums[0],
        num : 1
    };
    let len = nums.length
    for(let i=1; i<len; ){
        if(nums[i] == obj.current && obj.num==2){
            nums.splice(i,1);
            len--;
        }else{
            if(nums[i] == obj.current){
                obj.num++;
            }else{
                obj.current = nums[i]
                obj.num = 1;
            }
            i++;
        }
    }
    return nums.length;
};
