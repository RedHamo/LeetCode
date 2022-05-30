/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let ret = temp = new ListNode(l1.val + l2.val);
    let over;
    if (temp.val >= 10) {
        temp.val = temp.val % 10
        over = 1;
    }else{
        over = 0;
    }
    while (l1.next || l2.next || over == 1) {
        
        if (l1.next && l2.next) {
            let add = l1.next.val + l2.next.val + over
            temp.next = new ListNode(add);
            l1 = l1.next;
            l2 = l2.next;
        }else if(l1.next){
            temp.next = new ListNode(l1.next.val + over);
            l1 = l1.next;
        }else if(l2.next){
            temp.next = new ListNode(l2.next.val + over);
            l2 = l2.next;
        }else{
            temp.next = new ListNode(over);
        }
        temp = temp.next;
        if (temp.val >= 10) {
            temp.val = temp.val % 10
            over = 1;
        }else{
            over = 0;
        }
    }
    return ret;
};
// @lc code=end

