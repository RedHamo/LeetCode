/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划，滚动数组
// 根据状态转移方程和边界条件，可以得到时间复杂度和空间复杂度都是 O(n)O(n) 的实现。
// 由于 F(n)F(n) 只和 F(n-1)F(n−1) 与 F(n-2)F(n−2) 有关，
    // 因此可以使用「滚动数组思想」把空间复杂度优化成 O(1)。
var fib = function(n) {
    if (n<2) return n
    let arr = [0,1,1];
    for (let i = 2; i < n; i++) {
        arr.shift()
        arr[2] = arr[0] + arr[1]
    }
    return arr[2]
};
// @lc code=end

