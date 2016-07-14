/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var runner1 = l1, runner2 = l2;
    var carry = 0;
    var head = new ListNode(-1);
    var ret = head;

    while (runner1 !== null && runner2 !== null) {
        var sum = runner1.val + runner2.val + carry;
        carry = parseInt(sum / 10);
        ret.next = new ListNode(sum % 10);

        ret = ret.next;
        runner1 = runner1.next;
        runner2 = runner2.next;
    }

    while (runner1 !== null) {
        sum = runner1.val + carry;
        carry = parseInt(sum / 10);
        ret.next = new ListNode(sum % 10);

        ret = ret.next;
        runner1 = runner1.next;
    }

    while (runner2 !== null) {
        sum = runner2.val + carry;
        carry = parseInt(sum / 10);
        ret.next = new ListNode(sum % 10);

        ret = ret.next;
        runner2 = runner2.next;
    }

    if (carry > 0) {
        ret.next = new ListNode(carry);
    }

    return head.next;
};