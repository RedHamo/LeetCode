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
var minDiffInBST = function(root) {
    let min = Infinity;
    let last = -Infinity;
    helper(root)
    return min

    function helper(node){
        if(!node) return
        helper(node.left);
        min = Math.min(min, node.val-last);
        last = node.val;
        helper(node.right);
    }
};
