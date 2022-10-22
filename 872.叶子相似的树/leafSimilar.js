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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let temp ="start" 
    let helper = (node)=>{
        if(!node) return;
        if(!node.left&&!node.right) temp += ":"+node.val;
        helper(node.left)
        helper(node.right)
    }
    helper(root1)
    let leaf = temp;
    temp = "start";
    helper(root2)
    console.log(leaf)
    console.log(temp)
    if(leaf==temp) return true;
    return false;
};
