/**
 * @param {number} n
 * @return {number}
 */
/*
 再看一遍三个元素的数组，可以发现BST的取值方式如下：
 Count[3] = Count[0]*Count[2]  (1为根的情况)
 + Count[1]*Count[1]  (2为根的情况)
 + Count[2]*Count[0]  (3为根的情况)

 所以，由此观察，可以得出Count的递推公式为
 Count[i] = ∑ Count[0...k] * [ k+1....i]     0<=k<i-1
 问题至此划归为一维动态规划。
 * */
var numTrees = function (n) {
    var f = new Array(n + 1).fill(0);
    f[0] = 1;
    f[1] = 1;

    for (var i = 2; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            f[i] += f[j] * f[i - j - 1];
        }
    }

    return f[n];
};