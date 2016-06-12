/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var len = s.length;
    var start = 0, end = len - 1;
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var sarray = s.split('');

    while (start < end) {
        while (start < len && vowels.indexOf(sarray[start]) === -1) {
            start++;
        }

        while (end >= 0 && vowels.indexOf(sarray[end]) === -1) {
            end--;
        }

        if (start < end) {
            var temp = sarray[end];
            sarray[end] = sarray[start];
            sarray[start] = temp;
            start++;
            end--;
        }
    }

    return sarray.join('');
};