/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let map = new Map();
    let a = headA,b = headB;
    while(a){
        map.set(a, true);
        a = a.next;
    }
    while(b){
        if(map.has(b)) return b;
        b = b.next;
    }
    //tijiao
    return null;
};
// @lc code=end


