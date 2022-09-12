/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root || root.length==0) return 0;
    return helper(root?.children)
    function helper(nodes){
        if(!nodes || nodes.length==0) return 1;
        let max = 0;
        for(let i=0; i<nodes.length; i++){
            max = Math.max(helper(nodes[i].children), max)
        }
        return max + 1;
    }
};
// @lc code=end


