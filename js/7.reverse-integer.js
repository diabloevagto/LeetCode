/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer
 *
 * algorithms
 * Easy (24.46%)
 * Total Accepted:    301.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '0'
 *
 * Reverse digits of an integer.
 *
 *
 * Example1: x =  123, return  321
 * Example2: x = -123, return -321
 *
 *
 * click to show spoilers.
 *
 * Have you thought about this?
 *
 * Here are some good questions to ask before coding. Bonus points for you if
 * you have already thought through this!
 *
 * If the integer's last digit is 0, what should the output be? ie, cases such
 * as 10, 100.
 *
 * Did you notice that the reversed integer might overflow? Assume the input is
 * a 32-bit integer, then the reverse of 1000000003 overflows. How should you
 * handle such cases?
 *
 * For the purpose of this problem, assume that your function returns 0 when
 * the reversed integer overflows.
 *
 *
 *
 *
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should
 * return 0 when the reversed integer overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const INT_MIN = -2147483647; //-1 * Math.pow(2, 31) + 1;
    const INT_MAX = 2147483647; //Math.pow(2, 31) - 1;
    const isNegative = x < 0;

    //將負數轉成正數，處理掉 '-'
    x = (isNegative) ? -1 * x : x;

    //轉字串反轉
    let ret = x.toString().split('').reverse().join('');

    //字串轉回 number 並且判斷是否補上 '-'
    ret = (isNegative) ? -1 * ret : 1 * ret;

    //上下限判斷
    return (INT_MIN <= ret && ret <= INT_MAX) ? ret : 0;
};
