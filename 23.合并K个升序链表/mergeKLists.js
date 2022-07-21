/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    lists = lists.filter(o=>o!=null)
    lists = lists.sort((a,b)=>a.val-b.val)
    let ans = new ListNode()
    let node = ans;
    while(true){
        if(lists[0]==null) break;
        node.next = lists[0];
        node = node.next;
        lists[0] = lists[0].next;
        lists = lists.filter(o=>o!=null)
        lists = lists.sort((a,b)=>a.val-b.val)
    }
    return ans.next;
};
// @lc code=end


