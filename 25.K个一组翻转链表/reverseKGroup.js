/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let hair = new ListNode(_,head);
    let scrollArr = [hair, head]

    while(head){
        for(let i=1; i<=k; i++){
            scrollArr[i] = head;
            if(head==null) break;
            head = head.next;
        }
        if(scrollArr[k]==null) break;
        scrollArr[0].next = scrollArr[k]
        for(let i=k; i>1; i--){
            scrollArr[i-1].next = null
            scrollArr[i].next = scrollArr[i-1]
        }
        scrollArr[1].next = head;
        scrollArr = [scrollArr[1],head]
    }
    return hair.next;
};
// @lc code=end


