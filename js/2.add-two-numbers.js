/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers
 *
 * algorithms
 * Medium (27.95%)
 * Total Accepted:    362.1K
 * Total Submissions: 1.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //給定初始 list，並且用 result 記得初始 list
    let list = new ListNode(0);
    const result = list;
    let carry = 0;

    //因為 li 跟 l2 數量並非相同，所以在執行時有可以其中一個是 null 情況，在存取時都要先判斷
    while (l1 || l2 || carry !== 0) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        list.next = new ListNode(sum % 10);

        l1 = (l1 ? l1.next : null);
        l2 = (l2 ? l2.next : null);

        list = list.next;
    }

    //result 的 next 才是真正的答案開頭
    return result.next;
};
