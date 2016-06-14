/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Solution 1
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

// Solution 2
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
    for (i = 0; i < 9; i++) {
        var hashRow = [];
        var hashCol = [];
        for (j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (hashRow.includes(board[i][j])) {
                    return false;
                } else {
                    hashRow.push(board[i][j]);
                }
            }

            if (board[j][i] !== '.') {
                if (hashCol.includes(board[j][i])) {
                    return false;
                } else {
                    hashCol.push(board[j][i]);
                }
            }
        }
    }

    // check square
    for (var p = 0; p < 9; p += 3) {
        for (var q = 0; q < 9; q += 3) {
            var hashSquare = [];
            for (var a = 0; a < 3; a++) {
                for (var b = 0; b < 3; b++) {
                    if (board[a + p][b + q] !== '.') {
                        if (hashSquare.includes(board[a + p][b + q])) {
                            return false;
                        } else {
                            hashSquare.push(board[a + p][b + q]);
                        }
                    }
                }
            }
        }
    }

    return true;
};