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
// 带备忘录的递归解法（自顶向下）
// 带「备忘录」的递归算法，把一棵存在巨量冗余的递归树通过「剪枝」，
    // 改造成了一幅不存在冗余的递归图，极大减少了子问题（即递归图中节点）的个数。
var fib = function(n) {
    let memo = {};
    const helper = (memo, n) => {
        if (n<2) return n;
        // 已经计算过
        if (memo[n]) return memo[n];
        memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
        return memo[n];
    }
    return helper(memo, n);
};
// @lc code=end

