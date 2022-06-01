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
// 递归思路,代码简洁
var addTwoNumbers = function(l1, l2) {
    return add(l1,l2,0);
};

var add = (l1, l2, carry) => {
    let point;
    if (l1 || l2) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        point = new ListNode(sum%10)
        point.next = add(l1?.next, l2?.next, sum>=10?1:0);
    }else{
        point = carry==1?new ListNode(carry):null;
    }
    return point;
}
// @lc code=end
