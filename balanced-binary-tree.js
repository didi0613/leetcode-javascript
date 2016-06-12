/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function maxHeight(node) {
    if (node === null) {
        return 0;
    }

    if (node.left === null && node.right === null) {
        return 1;
    }

    return Math.max(maxHeight(node.left), maxHeight(node.right)) + 1;
}

var isBalanced = function (root) {
    if (root === null || (root.left === null && root.right === null)) {
        return true;
    }

    return (Math.abs(maxHeight(root.left) - maxHeight(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right);
};