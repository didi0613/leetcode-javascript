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
var mergeTwoLists = function (l1, l2) {
    var start1 = l1, start2 = l2;
    var ret = [];

    while (start1 && start2) {
        if (start1.val < start2.val) {
            ret.push(start1.val);
            start1 = start1.next;
        } else {
            ret.push(start2.val);
            start2 = start2.next;
        }
    }

    while (start1) {
        ret.push(start1.val);
        start1 = start1.next;
    }

    while (start2) {
        ret.push(start2.val);
        start2 = start2.next;
    }

    return ret;
};

// Time Complexity: O(m+n)
// Space Complexity: O(m+n)