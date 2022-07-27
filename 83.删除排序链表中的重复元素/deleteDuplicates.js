/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let headbak = pre = head;
    head = head?.next ?? null;
    while(head!=null){
        if(pre.val==head.val) {
            pre.next = head.next
        }else{
            pre=pre.next;
        }
        head = head.next;
    }
    return headbak;
};
