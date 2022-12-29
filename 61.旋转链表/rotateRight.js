/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(k==0||!head||!head.next) return head;

    let len = 0;
    let first = head
    let beforeHead;
    while(true){
        len++
        head = head.next;
        if(!head.next){
            len++
            beforeHead = head;
            head = first;
            break;
        }
    }

    let moveDistance = k%len;
    if(moveDistance==0) return head;
    beforeHead.next = first;
    for(let i=0; i<len-moveDistance; i++){
        beforeHead = head
        head=head.next;
    }
    if(beforeHead) beforeHead.next = null;
    
    return head
};
