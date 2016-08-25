/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Solution 1
// Recursive Way
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }

    return symmetric(root.left, root.right);
};

function symmetric(left, right) {
    if (left === null && right === null) {
        return true;
    }
    else if (left === null || right === null) {
        return false;
    } else {
        return (left.val === right.val) && symmetric(left.left, right.right) && symmetric(left.right, right.left);
    }
}

// Solution 2
// Iterative Way
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
var isSymmetric = function (root) {
    if (root === null || (root.left === null && root.right === null)) {
        return true;
    }

    if (root.left === null || root.right === null) {
        return false;
    }

    // Guarantee that root has both left and right
    var queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
        var len = queue.length;
        if (len % 2 !== 0) {
            return false;
        }

        var start = 0, end = len - 1;
        while (start < end) {
            if (queue[start] === null && queue[end] === null) {
                start++;
                end--;
            } else if (queue[start] === null || queue[end] === null) {
                return false;
            } else if (queue[start].val !== queue[end].val) {
                return false;
            } else {
                start++;
                end--;
            }
        }

        var currentLevel = [];
        for (var i in queue) {
            if (queue[i] !== null) {
                currentLevel.push(queue[i].left);
                currentLevel.push(queue[i].right);
            }
        }
        queue = currentLevel;
    }

    return true;
};

// Solution 3
// Two queues implementation
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
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }

    if (root.left === null && root.right === null) {
        return true;
    }

    if (root.left === null || root.right === null) {
        return false;
    }

    var q1 = [], q2 = [];
    q1.unshift(root.left);
    q2.unshift(root.right);

    while (q1.length > 0 && q2.length > 0) {
        var temp1 = q1.pop();
        var temp2 = q2.pop();

        if (temp1 === null && temp2 === null) {
            continue;
        }

        if (temp1 === null || temp2 === null) {
            return false;
        }

        if (temp1.val !== temp2.val) {
            return false;
        }

        q1.unshift(temp1.left);
        q1.unshift(temp1.right);
        q2.unshift(temp2.right);
        q2.unshift(temp2.left);
    }

    return true;
};