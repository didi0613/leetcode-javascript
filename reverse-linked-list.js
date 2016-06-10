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
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    } else {
        var prev = null;
        var node = head;

        while (node) {
            var next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return prev;
    }
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
var reverseList = function (head) {
    if (head === null) {
        return head;
    }

    var prev = null;
    var node = head;
    while (node.next !== null) {
        var next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    node.next = prev;
    return node;
};