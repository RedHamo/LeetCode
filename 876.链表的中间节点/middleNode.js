/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head, num = 0) {
    if (!head) return num;
    let ret = middleNode(head.next, ++num);
    if (ret.val || (Math.ceil((ret + 1) / 2) != num)) return ret;
    return head;
};
// @lc code=end

