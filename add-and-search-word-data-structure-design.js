/**
 * @constructor
 */
var WordDictionary = function () {
    this.root = new TrieNode('root');
};

var TrieNode = function (key) {
    return {
        key: key,
        isWord: false
    }
}

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function (word) {
    var tree = this.root;
    for (var i = 0; i < word.length; i++) {
        if (!tree[word[i]]) {
            tree[word[i]] = new TrieNode(word[i]);
        }
        tree = tree[word[i]];
    }
    tree.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function (word) {
    return searchBuilder(word, this.root);

    function searchBuilder(word, tree) {
        if (word === "" && tree.isWord) {
            return true;
        }
        if (word[0] !== '.') {
            if (!tree[word[0]]) {
                return false;
            } else {
                return searchBuilder(word.substring(1, word.length), tree[word[0]]);
            }
        } else {
            for (var i in tree) {
                if (i === 'key' || i === 'isWord') {
                    continue;
                }
                if (searchBuilder(word.substring(1, word.length), tree[i])) {
                    return true;
                }
            }
            return false;
        }
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */