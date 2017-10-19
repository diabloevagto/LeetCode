/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum
 *
 * algorithms
 * Easy (35.45%)
 * Total Accepted:    647.8K
 * Total Submissions: 1.8M
 * Testcase Example:  '[3,2,4]\n6'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 */
var twoSum = function (nums, target) {
    let result = [];

    nums.some((num, idx) => {
        //找到剩餘的數字，並且要避免同 idx。(test case: '[3,2,4]\n6')
        const ret = nums.indexOf(target - num, idx + 1);
        if (ret != -1) {
            result = [idx, ret];
        }
        return ret != -1;
    });

    return result;
};
