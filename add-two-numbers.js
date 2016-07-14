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
    var len1 = 0, len2 = 0;

    while (runner1 !== null) {
        runner1 = runner1.next;
        len1++;
    }

    while (runner2 !== null) {
        runner2 = runner2.next;
        len2++;
    }

    runner1 = l1, runner2 = l2;
    var ret = new ListNode(-1);
    if (len1 > len2) {
        var diff = len1 - len2;
        while (diff > 0) {
            ret.next = runner1;
            runner1 = runner1.next;
            ret = ret.next;
        }
    } else if (len1 < len2) {
        diff = len2 - len1;
        while (diff > 0) {
            ret.next = runner2;
            runner2 = runner2.next;
            ret = ret.next;
        }
    }

    // runner1 and runner 2 at the same point
    var carry = 0;
    while (runner1 !== null && runner2 !== null) {
        var sum = runner1.val + runner2.val + carry;
        carry = sum / 10;
        ret.next = new ListNode(sum % 10);

        ret = ret.next;
        runner1 = runner1.next;
        runner2 = runner2.next;
    }

    if (carry > 0) {
        ret.next = new ListNode(carry);
    }

    return ret;
};