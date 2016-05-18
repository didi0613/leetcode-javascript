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
var levelOrder = function(root) {
    if(root === null) {
        return [];
    }

    var lastLevel = [root];
    var ret = [];

    while(lastLevel.length > 0) {
        var levelData = [];
        var level = [];
        for(var i=0;i<lastLevel.length;i++) {
            if(lastLevel[i].left) {
                level.push(lastLevel[i].left);
            }

            if(lastLevel[i].right) {
                level.push(lastLevel[i].right);
            }
            levelData.push(lastLevel[i].val);
        }

        ret.push(levelData);
        lastLevel = level;
    }

    return ret;
};