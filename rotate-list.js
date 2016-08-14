/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) {
        return head;
    }
    var len = 0;
    var p = head;
    while (p !== null) {
        p = p.next;
        len++;
    }
    k = k % len;
    if (k === 0) {
        return head;
    }

    var slower = head, faster = head;
    while (k > 0) {
        faster = faster.next;
        k--;
    }

    while (faster.next) {
        faster = faster.next;
        slower = slower.next;
    }

    var newHead = slower.next;
    faster.next = head;
    slower.next = null;

    return newHead;
};