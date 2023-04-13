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




// ! Leetcode 9: Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     // 앞에서 뒤로, 뒤에서 앞으로 읽어도 같은 숫자인지 여부를 출력하는 함수 작성

//     // 숫자 -> 문자열로 변환
//     x = String(x);
    
//     // x의 길이의 절반만큼 반복해서
//     // x[n]과 x[x.length - n]이 같으면 palindrome
//     for (let n = 0; n < parseInt(x.length / 2); n += 1) {
//         if (x[n] !== x[x.length - 1 - n]) {
//             return false;
//         };
//     };
//     return true;
// };

// x를 문자열로 변환하지 않고 해보기
var isPalindrome = function (x) {
  // x % 10을 하면 일의 자리 수를 구할 수 있다.
  // Math.floor(x / 10)을 하면 일의 자리 수를 제외한 나머지 숫자가 남는다.
  // 이를 반복하여 일의 자리 수부터 가장 큰 자리 수까지 숫자를 뒤집어 구한다.
  // 뒤집은 숫자가 x의 값과 같으면 palindrome

  // x가 음수면 false
  if (x < 0) { return false; }

  // 뒤집어 구할 숫자를 할당할 변수 reversNum 선언
  let reverseNum = 0;
  
  // x가 변하는 값을 저장할 변수 num 선언
  let num = x; 

  // 10으로 나눈 몫이 0이 될 때까지 반복 -> 모든 자리수를 살펴봄
  while (num !== 0) {
      // 일의 자리 수부터 숫자를 거꾸로 구함 -> reverNum에 10씩 곱하고, num을 10씩 나눔
      reverseNum = (reverseNum * 10) + (num % 10);
      num = Math.floor(num / 10);
  };
  // 거꾸로 구한 숫자 = x면 palindrome
  return x === reverseNum;
};

// 121 -> 
// 0 + 1 = 1, num = 12
// 10 + 2 = 12, num = 1
// 120 + 1 = 121, num = 0 => 121

// 10 ->
// 0 + 0 = 0, num = 1
// 0 + 1 = 1, num = 0 => 1

// 323 ->
// 0 + 3, num = 32
// 30 + 2 = 32, num = 3
// 320 + 3, num = 0 => 323


// 다른 방법 -> 메소드 적극 활용하기
/**
const reverseNum = x.toString().split("").reverse().join("");
return Number(reverseNum) === x;
*/



// ! 프로그래머스 달리기 경주
/**
 * ? players: 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열
 * ? callings: 해설진이 부른 이름을 담은 문자열 배열
 * TODO: 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return하는 solution 함수 완성하기
 * 해설진이 이름을 부른다 -> 선수가 자기 바로 앞의 선수를 추월할 때, 추월한 선수의 이름을 부름
 */


// * 시간 초과
//  function solution(players, callings) {
//   // 현재 등수
//   var answer = [...players];

//   // callings 배열에서 언급된 선수와 그 선수의 index - 1에 있는 선수를 교체
//   // 반복문과 splice 메소드 사용

//   for (let n = 0; n < callings.length; n += 1) {
//     // answer의 callings[n]의 index -> index - 1 로 변경
//     // answer의 callings[n]의 index + 1의 선수 -> index + 1 로 변경
//     answer.splice(answer.indexOf(callings[n]) - 1, 2, 
//     callings[n], answer[answer.indexOf(callings[n]) - 1]);
//   }

//   return answer;
// }

// [a, b, c]  -> b -> [b, a, c]


function solution(players, callings) {
  var answer = [...players];
  // 현재 등수
  const count = {};
  players.forEach((player, index) => {
    count[player] = index;
  });

  for (let n = 0; n < callings.length; n += 1) {
    // 추월한 선수: callings[n]
    let faster = callings[n];

    // 추월하기 전 선수의 등수: count[callings[n]]
    let fasterIdx = count[faster];
    
    // 추월당한 선수: answer[count[callings[n]] - 1]
    let slower = answer[fasterIdx - 1];

    // 현재 등수 업데이트(answer 배열)
    answer[fasterIdx - 1] = faster;
    answer[fasterIdx] = slower;

    // 현재 등수 업데이트(count 객체)
    count[faster] -= 1;
    count[slower] += 1;
  };

  return answer;
};

// indexOf 메소드가 시간을 꽤 잡아먹는 듯?
// 그래서 객체를 이용해서 선수 등수 관리


// ! Leetcode 735 Asteroid Collision
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

 var asteroidCollision = function(asteroids) {
  let i = 0;
  while (i < asteroids.length) {
      // 두 운석을 비교하여 나오는 경우의 수: 충돌하거나 충돌하지 않는다.
      // 비교하는 운석
      let a1 = asteroids[i];
      let a2 = asteroids[i + 1];
      if (a2 === undefined) { break; };

      // 충돌하지 않는 경우의 수: a1+, a2+ || a1-, a2- || a1-, a2+
      if (a1 * a2 > 0 || (a1 < 0 && a2 > 0)) { 
          i += 1;
          continue;
      }

      // 충돌했을 때의 경우의 수: a1+, a2-
      // a1 > a2 -> a2 제거, 기준점은 a1의 index
      if (a1 > Math.abs(a2)) {
          asteroids.splice(i + 1, 1);
          continue;
      }

      // a1 < a2 -> a1 제거, 기준점은 a2의 index - 1
      else if (a1 < Math.abs(a2)) {
          asteroids.splice(i, 1);
          i = i === 0 ? 0 : i - 1; // i >= 0을 유지
          continue;
      }
      
      // a1 = a2 -> a1과 a2 모두 제거, 기준점은 a2의 index - 1
      // 충돌 후 둘 다 사라졌으므로 이전 운석과 그 다음 운석 다시 비교
      else if (a1 = Math.abs(a2)) {
          asteroids.splice(i, 2);
          i = i === 0 ? 0 : i - 1; // i >= 0을 유지
          continue;
      }
  };
  return asteroids;
};