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