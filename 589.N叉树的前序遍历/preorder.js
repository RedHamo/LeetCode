/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = []
    helper(root)
    return res;
    function helper(node){
        if(!node) return;
        res.push(node.val)
        for(let item of node.children){
            helper(item)
        }
    }
};
// @lc code=end


