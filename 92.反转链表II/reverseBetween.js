/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left==right) return head;
    let res = new ListNode(0,head)
    let last = res;
    let no = 1;
    while(head){
        no++;
        if(no>right) break;
        if(no <= left){
            last = last.next;
            head = head.next
        }else{
            if(head.next==null) break;
            let temp = last.next
            last.next = head.next;
            head.next = last.next.next;
            last.next.next = temp
        }
    }

    return res.next;
};
