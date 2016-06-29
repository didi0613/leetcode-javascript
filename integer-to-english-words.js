/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    var dict = {};
    dict[0] = "Zero";
    dict[1] = "One";
    dict[2] = "Two";
    dict[3] = "Three";
    dict[4] = "Four";
    dict[5] = "Five";
    dict[6] = "Six";
    dict[7] = "Seven";
    dict[8] = "Eight";
    dict[9] = "Nine";
    dict[10] = "Ten";
    dict[11] = "Eleven";
    dict[12] = "Twelve";
    dict[13] = "Thirteen";
    dict[14] = "Fourteen";
    dict[15] = "Fifteen";
    dict[16] = "Sixteen";
    dict[17] = "Seventeen";
    dict[18] = "Eighteen";
    dict[19] = "Nineteen";
    dict[20] = "Twenty";
    dict[30] = "Thirty";
    dict[40] = "Forty";
    dict[50] = "Fifty";
    dict[60] = "Sixty";
    dict[70] = "Seventy";
    dict[80] = "Eighty";
    dict[90] = "Ninety";
    dict[100] = "Hundred";
    var dict2 = ["Thousand", "Million", "Billion"];

    if (num === 0) {
        return dict[0];
    }

    var res = "";
    var c = -1;
    while (num > 0) {
        hundreds(num % 1000);
        num = parseInt(num / 1000);
        c++;
    }
    return res.trim();

    function hundreds(n) {
        var str = "", count = 0;
        // 100 - 999
        if (n >= 100) {
            count = parseInt(n / 100);
            n = n % 100;
            str += dict[count] + " " + dict[100];
        }

        // 1-99
        if (n !== 0) {
            if (str) {
                str += " ";
            }

            // 1-20
            if (n <= 20) {
                str += dict[n];
            } else {
                // 21 - 99
                var unitdigit = n % 10;
                n = n - unitdigit;
                str += unitdigit === 0 ? dict[n] : dict[n] + " " + dict[unitdigit];
            }
        }

        if (c >= 0 && str !== "") {
            str += " " + dict2[c] + " ";
        }

        res = (str + res).trim();
    }
};