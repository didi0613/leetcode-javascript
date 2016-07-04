/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    var ret = [];
    if (n === 0) {
        return 0;
    }

    solveNQueensBuilder(n, ret, [], [], 0);
    return ret.length;
};

function solveNQueensBuilder(n, ret, item, visited, irow) {
    if (irow === n) {
        ret.push(item.slice());
        return;
    }

    for (var i = 0; i < n; i++) {
        if (validQueen(visited, irow, i)) {
            var temp = new Array(n);
            temp.fill('.');
            temp[i] = 'Q';
            item.push(temp.join(''));
            visited.push(i);
            solveNQueensBuilder(n, ret, item, visited, irow + 1);
            visited.pop();
            item.pop();
        }
    }
}

function validQueen(visited, irow, i) {
    for (j = 0; j < visited.length; j++) {
        if (visited[j] === i || (irow - j) === Math.abs(i - visited[j])) {
            return false;
        }
    }

    return true;
}