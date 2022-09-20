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
 * @return {string}
 */
var tree2str = function(root) {
    let res = ""
    helper(root)
    return res.replace(/^\((.*)\)$/,"$1");
    function helper(node){
        if(!node) return;
        res += "(" + node.val
        if(node.right && !node.left) res+="()"
        helper(node.left);
        helper(node.right);
        res += ")"
    }
};
