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
    if(!head?.next) return head;
    let first = new ListNode(101, head)
    let res = first
    let flag = false;
    while(first.next.next){
        console.log(first)
        if(first.next.val == first.next.next.val){
            console.log(first.next.val)
            flag = true;
            first.next = first.next.next
        }else{
            
            if(flag){
                flag = false;
                first.next = first.next.next;
            }else{
                first = first.next
            }
                
        }
    }
    if(flag) first.next = first.next.next;
    return res.next;
    
};
