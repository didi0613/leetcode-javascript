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
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */