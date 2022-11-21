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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let head = new TreeNode();
    let point = head;
    helper(root)
    return head.right;
    function helper(node){
        if(!node) return;
        helper(node.left)
        point.right = node;
        point = point.right;
        point.left = null;
        helper(node.right)
    }
};
