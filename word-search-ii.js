//
// Solution 1: DFS
// Time Limit Exceeded
//
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Time Complexity: O(m*n*m*n)
 * Space Complexity: O(m*n)
 */
var findWords = function (board, words) {
    var rowNum = board.length;
    var colNum = board[0].length;

    var ret = [];

    // A two dimentional array
    var visited = new Array(rowNum);
    for (var k = 0; k < rowNum; k++) {
        visited[k] = new Array(colNum).fill(false);
    }

    for (var i = 0; i < rowNum; i++) {
        for (var j = 0; j < colNum; j++) {
            findWordsBuilder(board, i, j, ret, words, "", visited);
        }
    }
    return ret;
};

function findWordsBuilder(board, i, j, ret, words, item, visited) {
    var rowNum = board.length;
    var colNum = board[0].length;

    item += board[i][j];
    visited[i][j] = true;

    if (words.includes(item) && !ret.includes(item)) {
        ret.push(item);
    }

    if (i > 0 && !visited[i - 1][j]) {
        findWordsBuilder(board, i - 1, j, ret, words, item, visited);
    }
    if (i < rowNum - 1 && !visited[i + 1][j]) {
        findWordsBuilder(board, i + 1, j, ret, words, item, visited);
    }
    if (j > 0 && !visited[i][j - 1]) {
        findWordsBuilder(board, i, j - 1, ret, words, item, visited);
    }
    if (j < colNum - 1 && !visited[i][j + 1]) {
        findWordsBuilder(board, i, j + 1, ret, words, item, visited);
    }

    visited[i][j] = false;
}

//
// Solution 2: Trie + DFS
//
/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function (key) {
    return {
        key: key,
        isWord: false
    }
};

var Trie = function () {
    this.root = TrieNode('root');
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function (word) {
    var tree = this.root;
    for (var i in word) {
        var cur = word[i];
        if (!tree[cur]) {
            tree[cur] = new TrieNode(cur);
        }
        tree = tree[cur];
    }
    tree.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function (word) {
    var tree = this.root;
    for (var i in word) {
        if (!tree[word[i]]) {
            return false;
        }
        tree = tree[word[i]];
    }
    if (tree.isWord) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function (prefix) {
    var tree = this.root;
    for (var i in prefix) {
        if (!tree[prefix[i]]) {
            return false;
        }
        tree = tree[prefix[i]];
    }
    return true;
};

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

    var rowNum = board.length;
    var colNum = board[0].length;

    // create two dimentional array of visited
    var visited = new Array(rowNum);
    for (var j = 0; j < rowNum; j++) {
        visited[j] = new Array(colNum);
    }

    for (var m = 0; m < rowNum; m++) {
        for (var n = 0; n < colNum; n++) {
            findWordsBuilder(ret, trie, visited, m, n, board, "");
        }
    }

    return ret;
};

function findWordsBuilder(ret, trie, visited, i, j, board, item) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j]) {
        return;
    }

    item += board[i][j];

    if (!trie.startsWith(item)) {
        return;
    }

    if (trie.search(item)) {
        if (!ret.includes(item)) {
            ret.push(item);
        }
    }

    visited[i][j] = true;

    findWordsBuilder(ret, trie, visited, i - 1, j, board, item);
    findWordsBuilder(ret, trie, visited, i + 1, j, board, item);
    findWordsBuilder(ret, trie, visited, i, j - 1, board, item);
    findWordsBuilder(ret, trie, visited, i, j + 1, board, item);

    visited[i][j] = false;
}