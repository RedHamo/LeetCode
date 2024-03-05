/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxDistance = 0, // 存储可跳跃的最大长度
    endOfCanReach = 0, // 存储当前要抵达的位置
    steps = 0; // 存储步数

    // 当要抵达的位置大于等于数组长度-1，则已经获取到最小的步数了
    for(let i=0; i<nums.length-1; i++){
        //i+nums[i]当前位置加本格的数据，等于，在本格最远跳到的位置
        maxDistance = Math.max(maxDistance, i+nums[i]) // 判断获取最大的长度
        //如果能跳到最后，则直接步数+1退出
        if(maxDistance>=nums.length-1) return ++steps;
        if(i == endOfCanReach){ // 当当前位置为要抵达的位置时，更新最大位置，step++
            endOfCanReach = maxDistance;
            steps++;
        }
    }
    return steps
};
