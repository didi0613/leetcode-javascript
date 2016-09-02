/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Solution 1
// Recursive way
var preorderTraversal = function (root) {
    var ret = [];
    preorderTraversalBuilder(root, ret);
    return ret;
};

function preorderTraversalBuilder(node, ret) {
    if (node === null) {
        return;
    }

    ret.push(node.val);
    preorderTraversalBuilder(node.left, ret);
    preorderTraversalBuilder(node.right, ret);
}

// Solution 2
// Iterative Way
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (root === null) {
        return [];
    }

    var stack = [root];
    var ret = [];

    while (stack.length > 0) {
        var cur = stack.pop();
        ret.push(cur.val);

        // Push right and left children of the popped node to stack
        if (cur.right) {
            stack.push(cur.right);
        }

        if (cur.left) {
            stack.push(cur.left);
        }
    }
    return ret;
};
