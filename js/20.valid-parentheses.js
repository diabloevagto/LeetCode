/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses
 *
 * algorithms
 * Easy (33.58%)
 * Total Accepted:    247.2K
 * Total Submissions: 736.4K
 * Testcase Example:  '"["'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}" are all
 * valid but "(]" and "([)]" are not.
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    s = s.split('');
    let stack = [];

    while (s.length > 0) {
        switch (s[0]) {
            case '(':
            case '{':
            case '[':
                stack.push(s.shift());
                break;
            case ')':
                if ('(' !== stack.pop()) return false;
                s.shift();
                break;
            case '}':
                if ('{' !== stack.pop()) return false;
                s.shift();
                break;
            case ']':
                if ('[' !== stack.pop()) return false;
                s.shift();
                break;
            default:
                return false;
                break;
        }
    }
    return true && s.length === 0 && stack.length === 0;
};
