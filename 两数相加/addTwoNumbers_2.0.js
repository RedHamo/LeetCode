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
// 官方题解,好像没1.0快
var addTwoNumbers = function(l1, l2) {
    let ret = point = new ListNode(0);
    let carry = 0;
    while (l1 || l2) {
        let new_point = new ListNode(0);
        if(l1 && l2){
            let sum = l1.val + l2.val + carry;
            console.log(ret);
            console.log(new_point);
            console.log(sum);
            new_point.val = sum % 10;
            carry = sum>=10?1:0; 
            l1 = l1.next;
            l2 = l2.next;
        }else if(l1){
            let sum = l1.val + carry;
            new_point.val = sum % 10;
            carry = sum>=10?1:0; 
            l1 = l1.next;
        }else if(l2){
            let sum = l2.val + carry;
            new_point.val= sum % 10;
            carry = sum>=10?1:0; 
            l2 = l2.next;
        }else{
            console.log("never");
        }

        point.next = new_point;
        point = point.next;
    }
    if (carry == 1) {
        point.next = new ListNode(1);
    }
    return ret.next;
};
// @lc code=end

