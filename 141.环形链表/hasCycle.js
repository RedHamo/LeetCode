/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let map = new Map();
    while (head) {
        if (map.has(head)) return true;//如果当前节点在map中存在就说明有环
        map.set(head, true);//否则就加入map
        head = head.next;//迭代节点
    }
    return false;//循环完成发现没有重复节点，说明没环
};
// @lc code=end


