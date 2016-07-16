/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var dummy = new ListNode(-1);
    dummy.next = head;
    var p1 = dummy, p2 = dummy;

    while (n-- > 0) {
        p1 = p1.next;
    }

    while (p1.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    p2.next = p2.next.next;

    return dummy.next;
};