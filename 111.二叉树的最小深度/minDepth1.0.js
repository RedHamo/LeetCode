/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    const search = (node, deep)=>{
        deep++;
        if(!node) return Infinity;
        if(node.left==null && node.right==null) return deep;
        return Math.min(search(node.left, deep),search(node.right, deep))
    }
    return search(root, 0)
};
// @lc code=end

