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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var runner = head;
    var mark = [];
    var len = 0;

    while (runner !== null) {
        mark[len] = runner;
        runner = runner.next;
        len++;
    }

    // The one we will remove mark[len-n]
    if (len - n === 0) {
        return head.next;
    } else {
        mark[len - n - 1].next = mark[len - n].next;
        return head;
    }

};

// solution 2
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
var removeNthFromEnd = function (head, n) {
    // Create two pointers.
    // Make them depart n distance

    if (head.next === null || head === null) {
        return null;
    }

    var slow = head, fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }

    // Remove head situation
    if (fast === null) {
        return head.next;
    }

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return head;
};