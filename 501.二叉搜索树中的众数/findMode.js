/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
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
var findMode = function(root) {
    // 中序遍历二叉搜索树，等于遍历有序数组
    function helper(node){
        if(!node) return
        let val = node.val
        helper(node.left)
        hash[val]>0?hash[val]++:hash[val]=1
        helper(node.right)
    }

    let hash = {}
    helper(root)
    let max = Math.max(...Object.values(hash))
    let res = []
    for(let i in hash){
        if(max == hash[i]) res.push(i)
    }
    return res
};
// @lc code=end


