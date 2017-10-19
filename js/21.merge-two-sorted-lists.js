/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists
 *
 * algorithms
 * Easy (39.26%)
 * Total Accepted:    267.9K
 * Total Submissions: 682.3K
 * Testcase Example:  '[]\n[]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
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
var mergeTwoLists = function (l1, l2) {
    //給定初始 list，並且用 result 記得初始 list
    let list = new ListNode(0);
    const result = list;

    //因為 li 跟 l2 數量並非相同，所以在執行時有可以其中一個是 null 情況，在存取時都要先判斷
    while (l1 || l2) {
        let value;

        if (l1 == null) {
            value = l2.val;
            l2 = l2.next;
        } else if (l2 == null) {
            value = l1.val;
            l1 = l1.next;
        } else {
            if (l1.val > l2.val) {
                value = l2.val;
                l2 = l2.next;
            } else {
                value = l1.val;
                l1 = l1.next;
            }
        }

        list.next = new ListNode(value);
        list = list.next;
    }

    //result 的 next 才是真正的答案開頭
    return result.next;
};
