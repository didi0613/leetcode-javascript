/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// Trie Implementation
/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function (key) {
    return {
        key: key,
        isWord: false
    };
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
    var tree = this.root, i, curr, tmp;
    for (i = 0; i < word.length; i++) {
        curr = word[i];
        if (!tree[curr]) {
            tree[curr] = new TrieNode(curr);
        }
        tree = tree[curr];
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
    for (var i = 0; i < word.length; i++) {
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
    for (var i = 0; i < prefix.length; i++) {
        if (!tree[prefix[i]]) {
            return false;
        }
        tree = tree[prefix[i]];
    }
    return true;
};

// Main
var findWords = function (board, words) {
    var ret = [];
    var trie = new Trie();
    var visited = [];

    // Two Dimensional Array of visited
    for (var p = 0; p < board[0].length; p++) {
        visited[p] = [];
    }

    for (var word in words) {
        trie.insert(word);
    }

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            findWordsBuilder(board, ret, visited, i, j, trie, []);
        }
    }

    return ret;
};

function findWordsBuilder(board, ret, visited, i, j, trie, item) {
    item.push(board[i][j]);
    visited[i][j] = true;

    if (trie.startsWith(item)) {
        if (trie.search(item)) {
            if (!ret.includes(item)) {
                ret.push(item.slice());
            }
        }

        var dirx = [0, 0, 1, -1];
        var diry = [1, -1, 0, 0];

        for (i = 0; i < 4; i++) {
            var newx = x + dirx[i];
            var newy = y + diry[i];
            if (isValid(newx, newy, board) && !visited[newx][newy]) {
                findWordsBuilder(board, ret, visited, newx, newy, trie, item);
            }
        }
    }

    visited[i][j] = false;
    item.pop();
}

function isValid(x, y, board) {
    if (x >= 0 && x <= board.length - 1 && y >= 0 && y <= board[0].length - 1) {
        return true;
    }
    else {
        return false;
    }
}