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
var removeNthFromEnd = function(head, n) {
    var runner = head;
    var mark = [];
    var len=0;

    while(runner !== null) {
        mark[len] = runner;
        runner = runner.next;
        len++;
    }

    // The one we will remove mark[len-n]
    if(len-n === 0) {
        return head.next;
    } else {
        mark[len-n-1].next = mark[len-n].next;
        return head;
    }

};