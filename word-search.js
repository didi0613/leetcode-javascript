/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 时间复杂度 m*n*m*n
 * 空间复杂度 m*n
 */
var exist = function (board, word) {
    if (word.length === 0) {
        return true;
    }

    if (board.length === 0) {
        return false;
    }

    var rowNum = board.length;
    var colNum = board[0].length;

    var visited = new Array(rowNum);
    for (var k = 0; k < visited.length; k++) {
        visited[k] = new Array(colNum);
    }
    for (var i = 0; i < rowNum; i++) {
        for (var j = 0; j < colNum; j++) {
            if (existBuilder(board, word, visited, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

function existBuilder(board, word, visited, i, j, pos) {
    if (pos === word.length) {
        return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word[pos]) {
        return false;
    }

    visited[i][j] = true;
    var res = existBuilder(board, word, visited, i - 1, j, pos + 1)
        || existBuilder(board, word, visited, i + 1, j, pos + 1)
        || existBuilder(board, word, visited, i, j - 1, pos + 1)
        || existBuilder(board, word, visited, i, j + 1, pos + 1);
    visited[i][j] = false;

    return res;
}