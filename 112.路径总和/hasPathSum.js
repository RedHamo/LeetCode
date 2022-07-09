/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let sum = 0,
    ret = false;
    const find = (node, sum)=>{
        if(node==null || ret) return;
        sum += node.val;
        if(node.left==null && node.right==null) ret=ret||sum==targetSum;
        find(node.left, sum)
        find(node.right, sum)
    }
    find(root, sum)
    return ret;
};
// @lc code=end


