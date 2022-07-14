/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    let ret = true;
    let helper = (node)=>{
        if(!node) return 0;
        let left = helper(node.left);
        let right = helper(node.right);
        if(Math.abs(left - right)>1) ret=false
        return Math.max(left,right) + 1;
    }
    helper(root);
    return ret;
};
// @lc code=end

