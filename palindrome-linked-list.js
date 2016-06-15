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