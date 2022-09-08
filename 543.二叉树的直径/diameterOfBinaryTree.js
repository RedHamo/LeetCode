/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let ret = 0
    helper(root)
    return ret;
    function helper(node){
        if(!node) return -1
        let left = helper(node.left) + 1
        let right = helper(node.right) + 1
        ret = Math.max(left+right,ret)
        return Math.max(left,right)
    }
};
// @lc code=end


