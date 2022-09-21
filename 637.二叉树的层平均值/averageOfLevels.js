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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let memo = {}
    helper(root, 0)
    let res = []

    function helper(node, deep){
        if(!node) return
        if(memo[deep]) memo[deep].push(node.val)
        else memo[deep] = [node.val]
        helper(node.left, deep+1)
        helper(node.right, deep+1)
    }
    return Object.values(memo).map(o=> o.reduce((a,b)=>a+b,0)/o.length)
};
