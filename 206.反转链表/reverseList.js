/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let tail = new ListNode()

    while(head!=null){
        let node = head;
        head = head.next;
        node.next = tail.next;
        tail.next = node;
    }

    return tail.next;
};
