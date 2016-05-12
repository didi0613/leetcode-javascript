/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null || head.next === null) {
        return false;
    }

    var slow = head;
    var fast = head.next.next;

    while(slow && fast) {
        if(slow === fast) {
            return true;
        } else {
            if(slow.next && fast.next && fast.next.next) {
                slow = slow.next;
                fast = fast.next.next;
            } else {
                return false;
            }
        }
    }

    return false;
};