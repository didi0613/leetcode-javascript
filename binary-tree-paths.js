/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    var res = [];
    if (root && root.val !== undefined) {
        getPaths(root, "");
    }
    return res;

    function getPaths(node, path) {
        if (node.left) {
            getPaths(node.left, path + "->" + node.val);
        }
        if (node.right) {
            getPaths(node.right, path + "->" + node.val);
        }
        if (node.left === null && node.right === null) {
            var tmp = path + "->" + node.val;
            res.push(tmp.substring(2, tmp.length));
        }
    }
};

// DFS
// Solution 2
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (root === null) {
        return [];
    }

    var ret = [];
    binaryTreePathsBuilder(root, "", ret);
    return ret;
};

function binaryTreePathsBuilder(node, path, ret) {
    if (node.left === null && node.right === null) {
        path = path + node.val;
        ret.push(path);
        return;
    } else {
        path = path + node.val + "->";

        if (node.left) {
            binaryTreePathsBuilder(node.left, path, ret)
        }

        if (node.right) {
            binaryTreePathsBuilder(node.right, path, ret);
        }
    }
}