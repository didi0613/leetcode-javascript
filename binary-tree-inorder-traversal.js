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
var inorderTraversal = function (root) {
    if (root === null) {
        return [];
    }

    var ret = [];
    inorderTraversalBuilder(root, ret);
    return ret;
};

function inorderTraversalBuilder(root, ret) {
    if (root === null) {
        return;
    }

    inorderTraversalBuilder(root.left, ret);
    ret.push(root.val);
    inorderTraversalBuilder(root.right, ret);
}