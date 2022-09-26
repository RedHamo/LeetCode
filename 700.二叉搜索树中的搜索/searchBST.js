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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let res = null;
    helper(root)
    return res;

    function helper(node){
        if(res || !node) return;
        if(node.val==val) res = node;
        helper(node.left)
        helper(node.right)
    }
};
