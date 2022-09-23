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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let memo = {};
    let res = false;
    helper(root);
    return res;
    function helper(node){
        if(!node) return
        if(memo[k - node.val]) {
            res = true;
            return;
        }else{
            memo[node.val] = true;
        }
        helper(node.left);
        helper(node.right);
    }
};
