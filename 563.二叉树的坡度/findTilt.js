/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
    let sum = 0;
    helper(root)
    return sum;
    function helper(node){
        if(!node) return 0;
        let left = helper(node.left);
        let right = helper(node.right)
        sum += Math.abs(left-right)
        return node.val + left + right;
    }
};
// @lc code=end


