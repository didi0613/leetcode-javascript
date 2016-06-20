function depthSum() {
    var arr = [[1, 1], 2, [1, 1]];
    return depthSumBuilder(arr, 1);
}

function depthSumBuilder(arr, level) {
    var ret = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            ret += arr[i] * level;
        } else {
            ret += depthSumBuilder(arr[i], level + 1);
        }
    }

    return ret;
}

console.log(depthSum());

// DFS Solution
// Time Complexity: O(n)
// Space Complexity: O(n)