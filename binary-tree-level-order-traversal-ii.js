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
    }

    var ret = [];
    var lastLevel = [root];

    while (lastLevel.length > 0) {
        var lastLevelData = [];
        var currentLevel = [];

        for (var i in lastLevel) {
            lastLevelData.push(lastLevel[i].val);

            if (lastLevel[i].left !== null) {
                currentLevel.push(lastLevel[i].left);
            }

            if (lastLevel[i].right !== null) {
                currentLevel.push(lastLevel[i].right);
            }
        }
        ret.unshift(lastLevelData);
        lastLevel = currentLevel;
    }

    return ret;
};