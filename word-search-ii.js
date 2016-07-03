/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    var ret = [];
    var trie = new Trie();

    // save words into trie
    for (var i in words) {
        trie.insert(words[i]);
    }

    // create two dimentional array of visited
    var visited = new Array(board.length);
    for (var j = 0; j < board.length; j++) {
        visited[j] = new Array(board[0].length);
    }

    for (var m = 0; m < board.length; m++) {
        for (var n = 0; n < board[0].length; n++) {
            findWordsBuilder(ret, trie, visited, m, n, board, "");
        }
    }

    return ret;
};

function findWordsBuilder(ret, trie, visited, i, j, board, item) {
    item += board[i][j];
    visited[i][j] = true;

    if (trie.startsWith(item)) {
        // if item is already a word
        if (trie.search(item)) {
            if (!ret.includes(item)) {
                ret.push(item.slice());
            }
        }

        // if item is not a word yet, keep searching up right down left
        var dirx = [0, 0, 1, -1];
        var diry = [1, -1, 0, 0];
        for (var k = 0; k < 4; k++) {
            var newi = i + dirx[k];
            var newj = j + diry[k];

            if (isValid(newi, newj, board)) {
                if (!visited[newi][newj]) {
                    findWordsBuilder(ret, trie, visited, newi, newj, board, item);
                }
            }
        }
    }
    item = item.substring(0, item.length - 1);
    visited[i][j] = false;
}

function isValid(x, y, board) {
    if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
        return true;
    } else {
        return false;
    }
}