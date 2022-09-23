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
var findSecondMinimumValue = function(root) {
    let res = 1.0/0.0;
    helper(root)
    return res==Infinity?-1:res;
    function helper(node){
        
        if(!node || !node.left) return
        console.log(node.val,node.left.val,node.right.val)
        if(node.left.val != node.right.val) {
            let temp = Math.max(node.left.val,node.right.val)
            res = Math.min(res, temp)
        }
        if(node.left.val == node.val) helper(node.left)
        if(node.right.val == node.val) helper(node.right)
    }
};
