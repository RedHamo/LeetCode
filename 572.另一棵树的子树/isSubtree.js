/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let ret = false;
    helper(root)
    return ret;
    function helper(node){
        if(!node) return 0;
        if(subRoot.val == node.val) ret ||= checkIsSame(node, subRoot)
        helper(node.left)
        helper(node.right)
    }

    function checkIsSame(node1, node2){
        //return JSON.stringify(node1) == JSON.stringify(node2)
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        if(node1.val != node2.val) return false;
        let l = checkIsSame(node1.left, node2.left)
        let r = checkIsSame(node1.right, node2.right)
        return l&&r;
    }
};
// @lc code=end


