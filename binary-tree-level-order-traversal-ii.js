/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (root === null) {
        return [];
    } else {
        var lastLevel = [];
        var ret = [];
        var lastLevelData;

        lastLevel.push(root);

        while (lastLevel.length > 0) {
            lastLevelData = [];
            var level = [];

            for (var i in lastLevel) {
                if (lastLevel[i].left) {
                    level.push(lastLevel[i].left);
                }
                if (lastLevel[i].right) {
                    level.push(lastLevel[i].right);
                }
                lastLevelData.push(lastLevel[i].val);
            }
            ret.unshift(lastLevelData);
            lastLevel = level;
        }

        return ret;
    }
};