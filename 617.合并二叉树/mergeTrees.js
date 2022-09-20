/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1) return root2;
    helper(root1, root2)
    return root1
    function helper(node1, node2){
        if(!node1 || !node2) return;
        node1.val += node2.val;
        if(!node1.left) {
            node1.left = node2.left
        }else{
            helper(node1.left, node2.left)
        }
        if(!node1.right) {
            node1.right = node2.right
        }else{
            helper(node1.right, node2.right)
        }
        //if(!node1||!node2) 
    }
};
