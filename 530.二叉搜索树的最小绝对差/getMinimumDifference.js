/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min = Infinity;
    let last = Infinity;
    helper(root)
    return min;
    function helper(node){
        if(!node) return
        helper(node.left)
        if(last != Infinity) min = Math.min(min, node.val - last);
        last = node.val;
        helper(node.right)
    }
};
// @lc code=end


