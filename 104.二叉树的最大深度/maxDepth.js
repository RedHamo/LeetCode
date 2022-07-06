/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 var maxDepth = function(root) {
    let deep = 0;
    let searchDeep = (deep, node)=>{
        if(node == null) return deep;
        deep++;
        return Math.max(searchDeep(deep, node.left), searchDeep(deep, node.right))
    }
    return searchDeep(deep, root)
};
// @lc code=end

