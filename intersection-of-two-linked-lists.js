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
    var array_a = [];
    var array_b = [];
    var ret = null;

    while(headA) {
        array_a.push(headA);
        headA = headA.next;
    }

    while(headB) {
        array_b.push(headB);
        headB = headB.next;
    }

    var a_len = array_a.length;
    var b_len = array_b.length;

    if(a_len < b_len) {
        return getIntersectionNode(headB,headA);
    }

    for(var i=b_len-1,j=a_len-1;i>=0,j>=0;i--,j--) {
        if(array_b[i] === array_a[j]) {
            ret = array_b[i];
        } else {
            return ret;
        }
    }
};