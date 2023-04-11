// ! Leetcode 1: Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // nums 배열에 있는 2개 수의 합으로 target 값 만드는 함수 작성
    
    // nums에서 element 2개 추출
    for (let i = 0; i < nums.length; i+=1) {
      for (let j = i + 1; j < nums.length; j+=1) {
        // 추출한 2개의 합이 target과 같으면 그 element의 index 출력
        if (nums[i] + nums[j] === target) {
          return [i, j];      
        };
        // 같지 않으면 다른 element 2개 찾기
      };
    };
};


// ! Leetcode 2: Add Two Numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function (l1, l2) {
    // linked list를 처음 접해봐서 다른 답안 참고
    // 단순한 array가 아닌 Linked list라는 것에 유의

    // 더한 값을 저장할 새로운 linked list 선언
    const node = new ListNode();
    let tmpNode = node;

    // 올림값이 있는지 여부 (0이면 없음, 1이면 있음)
    let carry = 0;

    // l1 or l2 or carry 값이 true일 때
    while (l1 || l2 || carry) {
        // node 다음값 계속 재할당
        tmpNode.next = new ListNode();
        tmpNode = tmpNode.next;
        
        // l1의 node 값이 0이 아닐 때 변수 left에 값 할당
        const left = l1 ? l1.val : 0;
        // l2의 node 값이 0이 아닐 때 변수 right에 값 할당
        const right = l2 ? l2.val : 0;
        
        // l1 node 값 + l2 node 값 + 올림값
        let sum = left + right + carry;

        // 더한 값이 10 이상이면 다음으로 넘길 올림값 계산하기
        const value = sum < 10 ? sum : sum % 10;
        // 올림값 있으면 변수 carry에 값 재할당
        carry = sum < 10 ? 0 : 1;

        // 더한 값을 tmpNode에 새로 추가하고 각 list의 다음 node로 이동
        tmpNode.val = value;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    };

    // .next를 안 붙이면 제일 처음 기본값 0(undefined)이 추가되어서 그런 듯?
    return node.next;
};

// ! Leetcode 3: Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // 문자열 s에서 가장 긴 부분열의 길이 구하기(연속으로 같은 문자가 올 수는 없음)

    // 사용된 문자열을 저장하는 배열 usedChar 선언
    const usedChar = [];

    // 출력할 값을 할당할 변수 longest 선언
    let longest = 0;

    // 문자열 s에서 하나씩 살펴보기
    for (let i = 0; i < s.length; i+=1) {
        // 사용되지 않은 문자열이면 길이 +1
        if (!usedChar.includes(s[i])) {
            usedChar.push(s[i]);
        } 
        // 사용된 문자열이면
        else {
            // 그 부분열의 길이가 가장 길다면
            // 그 길이를 저장하고
            longest = usedChar.length > longest ? usedChar.length : longest;

            // 배열 usedChar 초기화하고 다음으로 이동
            // 초기화: 현재 index의 문자열만 저장
            usedChar.splice(0, usedChar.length, s[i]);
        };
    };

    // 가장 긴 length 값 출력
    return longest;
};