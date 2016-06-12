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

function Symmetric(left, right) {
    if (left === null && right === null) {
        return true;
    } else if (left !== null && right !== null) {
        if (left.val === right.val) {
            return Symmetric(left.left, right.right) && Symmetric(left.right, right.left);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }

    return Symmetric(root.left, root.right);
};