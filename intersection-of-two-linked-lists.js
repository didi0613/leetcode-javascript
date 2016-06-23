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
var getIntersectionNode = function (headA, headB) {
    var lenA = 0, lenB = 0;
    var pa = headA;
    var pb = headB;
    while (pa) {
        lenA++;
        pa = pa.next;
    }

    while (pb) {
        lenB++;
        pb = pb.next;
    }

    if (lenA >= lenB) {
        var diff = lenA - lenB;
        pa = headA;
        pb = headB;
        while (diff) {
            pa = pa.next;
            diff--;
        }
    } else {
        var diff2 = lenB - lenA;
        pa = headA;
        pb = headB;
        while (diff2) {
            pb = pb.next;
            diff2--;
        }
    }

    while (pa !== pb) {
        pa = pa.next;
        pb = pb.next;
    }

    return pa;
};

// 时间 O(N) 空间 O(1)