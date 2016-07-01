/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * Serialization
 * time: O(n), space: O(1)
 * Deserialization
 * time: O(n), space: O(n)
 */
var serialize = function (root) {
    if (root === null) {
        return "";
    }

    var ret = "";
    ret += root.val;
    var left = serialize(root.left);
    var right = serialize(root.right);
    ret += "," + left;
    ret += "," + right;
    return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    var arr = data.split(",");
    var q = [];
    for (var i in arr) {
        q.unshift(arr[i]);
    }

    return deserializeBuilder(q);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function deserializeBuilder(q) {
    var tmp = q.pop();
    if (tmp.length === 0) {
        return null;
    }

    var root = new TreeNode(parseInt(tmp));
    root.left = deserializeBuilder(q);
    root.right = deserializeBuilder(q);

    return root;
}

// Follow up: 如果tree的值是任意string该怎么办。
// Ans: 就是加value的长度在value前面