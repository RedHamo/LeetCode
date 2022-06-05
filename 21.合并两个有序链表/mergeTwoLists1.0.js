/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let ret = point = new ListNode(0);
    while (list1 || list2) {
        if (list1 && list2) {
            if (list2.val > list1.val) {
                point.next = list1
                list1 = list1.next;
            }else{
                point.next = list2
                list2 = list2.next;
            }
            point = point.next
        }else{
            point.next = list1 || list2
            list1 = null
            list2 = null
        }
    }
    return ret.next
};
// @lc code=end

