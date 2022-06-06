/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
// 深度优先遍历
 var binaryTreePaths = function(root) {
    const ret = [];
    const iterator = (root, path) => {
        if (!root) return
        path += root.val.toString();
        if (!root.left && !root.right) return ret.push(path)
        iterator(root.left, path + "->")
        iterator(root.right, path + "->")
    }
    iterator(root, "");
    return ret;
};
// @lc code=end

