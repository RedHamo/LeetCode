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
var sumRootToLeaf = function(root) {
    let res = 0
    helper(root, 0)
    return res;
    function helper (node, val){
        val= (val<<1)+node.val
        if(!node.left && !node.right) return res+=val;
        if(node.left) helper(node.left, val)
        if(node.right) helper(node.right, val)
    }
};
