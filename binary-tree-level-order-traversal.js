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

//时间复杂度： O(N)
//空间复杂度： O(w) where w is maximum width of Binary Tree.

// LinkedIn Follow up
// Print with spaces
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

    var last = [];
    var ret = [];
    last.push(root);
    var level = getHeight(root);

    while (last.length > 0) {
        var current = [];
        var lastData = [];

        for (var i in last) {
            lastData.push(last[i].val);

            if (last[i].left) {
                current.push(last[i].left);
            }

            if (last[i].right) {
                current.push(last[i].right);
            }
        }
        ret.push(lastData);

        var str = "";
        for(var j in lastData) {
             str += lastData[j] + " ";
        }
        console.log(new Array(level).join(' ') + str);

        level--;
        last = current;
    }

    return ret;
};

function getHeight(node) {
    if(node === null) {
        return 0;
    }

    if(node.left === null && node.right === null) {
        return 1;
    }

    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}