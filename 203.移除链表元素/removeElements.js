/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let hair=pre=new ListNode(_,head);
    while (pre.next) {
        if (pre.next.val==val){
            pre.next = pre.next.next;
        }else{
            pre = pre.next;
        }
    }
    return hair.next
};
// @lc code=end


