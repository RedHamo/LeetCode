/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    let first = new ListNode(_,head)
    let pre = first;
    while(head?.next ?? false){
        let temp = head.next;
        pre.next = temp;
        pre = head;
        head.next = head.next.next
        temp.next = head
        head = head.next
    }
    return first.next;
};
// @lc code=end


