/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    let hash = {};
    let headbak = head;
    let pre = head;
    while(head!=null){
        if(hash[head.val]==1) {
            pre.next = head.next
        }else{
            hash[head.val] = 1;
            pre = head;
        }
        head = head.next;
    }
    return headbak;
};
// @lc code=end


