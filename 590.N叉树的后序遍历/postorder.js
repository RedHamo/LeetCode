/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = []
    helper(root)
    return res;
    function helper(node){
        if(!node) return;
        for(let item of node.children){
            helper(item)
        }
        res.push(node.val)
    }
};
