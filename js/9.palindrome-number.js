/*
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number
 *
 * algorithms
 * Easy (35.47%)
 * Total Accepted:    253.9K
 * Total Submissions: 715.6K
 * Testcase Example:  '-2147483648'
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 * click to show spoilers.
 *
 * Some hints:
 *
 * Could negative integers be palindromes? (ie, -1)
 *
 * If you are thinking of converting the integer to string, note the
 * restriction of using extra space.
 *
 * You could also try reversing an integer. However, if you have solved the
 * problem "Reverse Integer", you know that the reversed integer might
 * overflow. How would you handle such case?
 *
 * There is a more generic way of solving this problem.
 *
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //排除負數與過大的 x
    if (x < 0 || x > Math.pow(2, 32) - 1) return false;

    const keepX = x;
    let ret = 0;

    while (x > 0) {
        ret = ret * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return keepX === ret;
};
