/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 var middleNode = function (head) {
    return getNextAndCount(head, 0).node;
};

const getNextAndCount = (node, num) => {
    if (!node) return { node: node, num: num };
    let tempRet = getNextAndCount(node.next, ++num);
    if (tempRet.num - num == Math.floor((tempRet.num - 1) / 2)) {
        return { node: node, num: tempRet.num }
    } else {
        return { node: tempRet.node, num: tempRet.num }
    }
};
// @lc code=end

