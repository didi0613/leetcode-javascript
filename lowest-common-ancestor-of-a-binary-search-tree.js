/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root === p || root === q) {
        return root;
    }

    if(root.val < p.val) {
        if(root.val > q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    } else {
        if(root.val < q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.left, p, q);
        }
    }
};