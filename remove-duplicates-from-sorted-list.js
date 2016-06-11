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
// Solution 1
var deleteDuplicates = function (head) {
    var cur = head;
    while (cur) {
        var runner = cur.next;
        while (runner && runner.val === cur.val) {
            runner = runner.next;
            cur.next = runner;
        }

        if (runner === null) {
            return head;
        } else {
            cur.next = runner;
            cur = runner;
        }
    }

    return head;
};

// Solution 2
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
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    var node = head;
    var last = node.val;
    while (node.next !== null) {
        if (node.next.val === last) {
            node.next = node.next.next;
        } else {
            last = node.next.val;
            node = node.next;
        }
    }

    if (node.val === last) {
        node = null;
    }

    return head;
};