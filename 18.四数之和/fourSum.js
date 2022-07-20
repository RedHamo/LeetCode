/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let list = []
    let len = nums.length;
    let temp = []

    nums.sort((a,b)=>a-b)
    // 参数：数组索引从 0 开始，4 个数字，目标
    dfs(0, 4, target)
    return list;

    function dfs(index, count, target){
        //终止条件,第四个数字且目标被消耗为0
        if(count === 0 && target==0) return list.push([...temp])

        // 剪枝：剩下可选的数字 < 需要的数字个数
        if(len-index < count) return;

        // 剪枝：count 个最小值都大于 target
        if(target< count*nums[index]) return;

        // 剪枝：count 个最大值都小于 target
        if(target>count*nums[len-1]) return;

        for(let i=index; i<len; i++){
            if(i>index && nums[i]===nums[i-1]) continue;

            temp.push(nums[i])
            dfs(i+1, count-1, target-nums[i])
            temp.pop()
        }
    }
};
// @lc code=end

