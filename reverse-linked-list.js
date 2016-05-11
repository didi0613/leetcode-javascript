/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) {
        return head;
    } else {
        var prev = null;
        var node = head;

        while(node) {
            var next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return prev;
    }
};