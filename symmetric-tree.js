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
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }

    return symmetric(root.left, root.right);
};

function symmetric(left, right) {
    if (left === null && right === null) {
        return true;
    }
    else if (left === null || right === null) {
        return false;
    } else {
        return (left.val === right.val) && symmetric(left.left, right.right) && symmetric(left.right, right.left);
    }
}