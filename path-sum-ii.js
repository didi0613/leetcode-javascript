/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    var ret = [];

    if (root === null) {
        return ret;
    }

    pathSumBuilder(root, sum, ret, [root.val]);
    return ret;
};

function pathSumBuilder(root, sum, ret, item) {
    if (root === null) {
        return;
    }

    if (root.val === sum && root.left === null && root.right === null) {
        ret.push(item.slice());
    }

    if (root.left !== null) {
        item.push(root.left.val);
        pathSumBuilder(root.left, sum - root.val, ret, item);
        item.pop();
    }

    if (root.right !== null) {
        item.push(root.right.val);
        pathSumBuilder(root.right, sum - root.val, ret, item);
        item.pop();
    }
}