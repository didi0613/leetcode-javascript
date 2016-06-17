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
// Recursive Solution
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

// Iterative Solution
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
    /*
     1) Create an empty stack S.
     2) Initialize current node as root
     3) Push the current node to S and set current = current->left until current is NULL
     4) If current is NULL and stack is not empty then 
     a) Pop the top item from stack.
     b) Print the popped item, set current = popped_item->right 
     c) Go to step 3.
     5) If current is NULL and stack is empty then we are done.
     */
    var stack = [], ret = [];
    var cur = root;

    stack.push(cur);
    while (stack.length > 0 || cur !== null) {
        if (cur && cur.left) {
            stack.push(cur.left);
            cur = cur.left;
        } else if (stack.length > 0) {
            var tmp = stack.pop();
            ret.push(tmp.val);
            cur = tmp.right;
            if (cur !== null) {
                stack.push(cur);
            }
        }
    }

    return ret;
};