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
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }

    var lastLevel = [root];
    var ret = [];

    while (lastLevel.length > 0) {
        var levelData = [];
        var level = [];
        for (var i = 0; i < lastLevel.length; i++) {
            if (lastLevel[i].left) {
                level.push(lastLevel[i].left);
            }

            if (lastLevel[i].right) {
                level.push(lastLevel[i].right);
            }
            levelData.push(lastLevel[i].val);
        }

        ret.push(levelData);
        lastLevel = level;
    }

    return ret;
};

// Second try
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
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }

    if (root.left === null && root.right === null) {
        return [root];
    }

    var ret = [];
    var lastLevel = [root];
    while (lastLevel.length > 0) {
        var currentLevel = [];
        var lastLevelData = [];

        for (var i in lastLevel) {
            lastLevelData.push(lastLevel[i].val);

            if (lastLevel[i].left) {
                currentLevel.push(lastLevel[i].left);
            }

            if (lastLevel[i].right) {
                currentLevel.push(lastLevel[i].right);
            }
        }

        ret.push(lastLevelData);
        lastLevel = currentLevel;
    }

    return ret;
};