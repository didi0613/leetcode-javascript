// Solution 1
// Space Complexity O(N)
// Time Complexity O(N)
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
var isPalindrome = function (head) {
    var arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    var len = arr.length;
    if (len <= 1) {
        return true;
    } else {
        var start = 0, end = len - 1;
        while (start < end) {
            if (arr[start] !== arr[end]) {
                return false;
            } else {
                start++;
                end--;
            }
        }

        return true;
    }
};

// Solution 2
// Space Complexity O(1)
// Time Complexity O(N)
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
var isPalindrome = function (head) {
    if (head === null || head.next === null) {
        return true;
    }

    // Find the mid of the linked list
    var slow = head;
    var fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of the list
    var node = slow;
    var prev = null;
    while (node.next) {
        var next = node.next;
        node.next = prev;

        prev = node;
        node = next;
    }
    node.next = prev;

    // compare head and node
    var runner1 = head, runner2 = node;
    while (runner1 && runner2) {
        if (runner1.val !== runner2.val) {
            return false;
        } else {
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
    }

    return true;
};