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
var isValidBST = function (root) {
    if (root === null) {
        return true;
    }

    // inorder sort
    var ret = [];
    var stack = [root];
    var cur = root;

    while (stack.length > 0) {
        if (cur && cur.left) {
            cur = cur.left;
            stack.push(cur);
        } else {
            if (stack.length > 0) {
                var temp = stack.pop();
                ret.push(temp.val);
                cur = temp.right;
                if (cur) {
                    stack.push(cur);
                }
            }
        }
    }

    // check whether the result is in order sequence
    for (var i = 0; i < ret.length; i++) {
        if (i > 0 && ret[i] <= ret[i - 1]) {
            return false;
        }
    }
    return true;
};