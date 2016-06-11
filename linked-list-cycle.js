/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Solution 1
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }

    var slow = head;
    var fast = head.next.next;

    while (slow && fast) {
        if (slow === fast) {
            return true;
        } else {
            if (slow.next && fast.next && fast.next.next) {
                slow = slow.next;
                fast = fast.next.next;
            } else {
                return false;
            }
        }
    }

    return false;
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
 * @return {boolean}
 */
var hasCycle = function (head) {
    var fast = head;
    var slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }
    return false;
};