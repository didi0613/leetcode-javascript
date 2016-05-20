/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var hashmap = [];
    var ret = null;
    while(headA) {
        hashmap.push(headA.val);
        headA = headA.next;
    }

    while(headB) {
        if(hashmap.includes(headB.val)) {
            ret = headB;
            break;
        } else {
            headB = headB.next;
        }
    }

    return ret;
};