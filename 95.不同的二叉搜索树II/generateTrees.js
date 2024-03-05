/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return helper(1,n)

    function helper(start, end){
        if(start>end) return [null]
        const res = []
        for(let i=start; i<=end; i++){
            const leftTree = helper(start, i-1)
            const rightTree = helper(i+1, end)
            for(const left of leftTree){
                for(const right of rightTree){
                    const item = new TreeNode(i);
                    item.left = left
                    item.right = right
                    res.push(item)
                }
            }
        }
        return res;
    }
    
};
