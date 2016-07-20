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
