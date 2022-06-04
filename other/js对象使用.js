// 1.为了解两数之和问题
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    l1.val = 7;
    l1.next.val = 0;
    l1.next.next.val = 8;
    return l1
};

let res = addTwoNumbers(l1,l2)