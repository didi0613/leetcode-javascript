/**
 * @param {character[][]} board
 * @return {boolean}
 */

function ValidRow(i, board) {
    var hashmap = [];

    for (var p = 0; p < 9; p++) {
        if (board[i][p] !== '.') {
            if (hashmap.includes(board[i][p])) {
                return false;
            } else {
                hashmap.push(board[i][p])
            }
        }
    }
    return true;
}

function ValidCol(i, board) {
    var hashMap = [];

    for (var q = 0; q < 9; q++) {
        if (board[q][i] !== '.') {
            if (hashMap.includes(board[q][i])) {
                return false;
            } else {
                hashMap.push(board[q][i]);
            }
        }
    }
    return true;
}

function ValidSquare(row, col, board) {
    var history = [];

    for (var m = row * 3; m < (row + 1) * 3; m++) {
        for (var n = col * 3; n < (col + 1) * 3; n++) {
            if (board[m][n] !== '.') {
                if (history.includes(board[m][n])) {
                    return false;
                } else {
                    history.push(board[m][n]);
                }
            }
        }
    }
    return true;
}

var isValidSudoku = function (board) {
    for (var i = 0; i < 9; i++) {
        if (!(ValidRow(i, board) && ValidCol(i, board))) {
            return false;
        }
    }

    for (var j = 0; j < 3; j++) {
        for (var jj = 0; jj < 3; jj++) {
            if (!ValidSquare(j, jj, board)) {
                return false;
            }
        }
    }

    return true;
};