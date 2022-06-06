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
// 广度优先遍历
 var binaryTreePaths = function(root) {
    const ret = [];
    if (root == null) return ret;
    const node_queue = [root];
    const path_queue = [root.val.toString()];
    while (node_queue.length) {
        const node = node_queue.shift(); 
        const path = path_queue.shift();
        if (node.left == null && node.right == null) {
            ret.push(path);
            continue;
        }
        if (node.left !== null) {
            node_queue.push(node.left);
            path_queue.push(path + "->" + node.left.val.toString());
        }
        if (node.right !== null) {
            node_queue.push(node.right);
            path_queue.push(path + "->" + node.right.val.toString());
        }
    }
    return ret;
}
// @lc code=end

