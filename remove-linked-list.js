// Solution 1
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        return head;
    }

    if (head.val === val) {
        return removeElements(head.next, val);
    }

    var prev = new ListNode(-1);
    prev.next = head;
    var cur = head;
    while (cur !== null) {
        if (cur.val === val) {
            prev.next = cur.next;
            cur = prev.next;
        } else {
            prev = cur;
            cur = cur.next;
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        return head;
    }

    // **********
    if (head.val === val) {
        return removeElements(head.next, val);
    }

    var node = head;
    var prev = null;
    while (node) {
        if (node.val === val) {
            prev.next = node.next;
            node = prev.next;
        } else {
            prev = node;
            node = node.next;
        }
    }

    return head;
};