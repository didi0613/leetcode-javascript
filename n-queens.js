/**
 * @param {number} n
 * @return {string[][]}
 * 时间O(n!) 空间O(n)
 */
var solveNQueens = function (n) {
    var ret = [];
    if (n === 0) {
        return ret;
    }

    solveNQueensBuilder(n, ret, [], 0, []);
    return ret;
};

function solveNQueensBuilder(n, ret, item, irow, visited) {
    if (irow === n) {
        ret.push(item.slice());
        return;
    }

    for (var j = 0; j < n; j++) {
        if (isValid(visited, irow, j)) {
            var temp = new Array(n);
            temp.fill('.');
            temp[j] = 'Q';
            item.push(temp.join(''));
            visited.push(j);
            solveNQueensBuilder(n, ret, item, irow + 1, visited);
            visited.pop();
            item.pop();
        }
    }
}

function isValid(visited, irow, j) {
    // the newly added point is (irow, j)
    for (var k = 0; k < visited.length; k++) {
        //board第k行的Queen放在visited[k]的位置上, 坐标(k,visited[k])
        if (visited[k] === j || (irow - k) === Math.abs(j - visited[k])) {
            return false;
        }
    }

    return true;
}