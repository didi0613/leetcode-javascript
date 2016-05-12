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
var deleteDuplicates = function(head) {
    var cur = head;
    while(cur) {
        var runner = cur.next;
        while(runner && runner.val === cur.val) {
            runner = runner.next;
            cur.next = runner;
        }

        if(runner === null) {
            return head;
        } else {
            cur.next = runner;
            cur = runner;
        }
    }

    return head;
};