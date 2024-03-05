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
var isUnivalTree = function(root) {
    let val = root.val;
    let result = true;
    helper(root)
    return result;
    function helper(node){
        if(!node) return
        if(node.val!=val) return result = false
        helper(node.left)
        helper(node.right)
    }
};
