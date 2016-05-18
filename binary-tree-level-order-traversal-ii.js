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
var levelOrderBottom = function(root) {
    if(root.left === null && root.right === null) {
        return [[root]];
    } else {
        var lastLevel = [root];
        var ret = [root];

        var i=0;
        while(lastLevel) {
             var len = lastLevel.length;
             var level = [];
             for(;i<len;i++) {
                 if(lastLevel[i].val !== '#') {
                     level.push(lastLevel.left);
                     level.push(lastLevel.right);
                     i+=2;
                 }
             }
             ret.unshift(level);
             lastLevel = level;
        }
    }
};