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
var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    var mid = findMid(head);
    var second = mid.next;
    mid.next = null;

    var n1 = sortList(head);
    var n2 = sortList(second);
    return merge(n1, n2);
};

var findMid = function (node) {
    var fast = node.next, slow = node;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

var merge = function (node1, node2) {
    var newhead = new ListNode(-1);
    var cur = newhead;

    while (node1 && node2) {
        if (node1.val < node2.val) {
            cur.next = node1;
            cur = cur.next;
            node1 = node1.next;
        } else {
            cur.next = node2;
            cur = cur.next;
            node2 = node2.next;
        }
    }

    if (node1) {
        cur.next = node1;
    }

    if (node2) {
        cur.next = node2;
    }

    return newhead.next;
};
