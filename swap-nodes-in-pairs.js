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
// Solution 1
function swapnode(h, r1, r2) {
    var next = r2.next;
    h.next = r2;
    r2.next = r1;
    r1.next = next;

    return r1;
}

var swapPairs = function (head) {
    var newhead = new ListNode(-1);
    newhead.next = head;
    start = newhead;

    while (start.next && start.next.next) {
        start = swapnode(start, start.next, start.next.next);
    }


    return newhead.next;
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    var node = head;
    var newNode = new ListNode(-1);
    var prev = newNode;
    prev.next = head;

    while (node && node.next) {
        var next = node.next.next;
        prev.next = node.next;
        node.next.next = node;
        node.next = next;

        prev = node;
        node = prev.next;
    }

    return newNode.next;
};

/* Summarize
 * Dummy Node 可以认为是一个假的头结点。
 * 我们可以构造一个Dummy Node ，使他的next指针指向Head node。
 * 使用Dummy Node目的是，在单向链表中，保正head不会再删除操作中丢失。
 * 此外，比较特殊的方法是用来进行删除head。
 * Dummy Node可以处理对于head Node变化的情况。
 */