/*

* 폰켓몬 

연구실에 있는 총 N 마리의 폰켓몬 중 N/2마리 가져갈 수 있다.
폰켓몬 종류에 따라 번호를 붙여 구분 -> 같은 종류면 같은 번호

TODO 1: N/2마리의 폰켓몬을 선택하는 방법 중 가장 다양한 종류의 폰켓몬을 선택하는 방법 찾기
TODO 2: 그 방법에서의 폰켓몬 종류 번호의 개수를 return하는 solution 함수 작성하기.

? nums: N마리 폰켓몬의 종류 번호가 담긴 1차원 배열. 
? N은 1 이상 10,000 이하, 항상 짝수.
? 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수.

! 가장 다양한 종류의 폰켓몬을 선택하는 방법이 여러 가지여도 
! 종류 개수의 최댓값을 return하면 됨.

*/

// 1. 선택하는 폰켓몬 개수 N/2 구하기
// 2. nums에서 중복되는 번호 제거 -> 서로 다른 번호만 남게
// 3. 2에서 N/2 폰켓몬 선택하면 최대 종류 개수 아닐까?

function solution(nums) {
    let answer = 0;
    let choiceNum = nums.length / 2;
    const newNums = nums.filter((num, index) => nums.indexOf(num) === index);

    switch(choiceNum <= newNums.length) {
        // 선택 수 <= 폰켓몬 종류 수: answer = choiceNum
        case true:
            return answer = choiceNum;

        // 선택 수 > 폰켓몬 종류 수: answer = newNums.length;
        case false:
            return answer = newNums.length;
    }
};

// * 되새기기
// 배열 중복 제거 방법(filter 메소드) -> indexOf 메소드 활용!

// * 더 효율적으로 작성하기
// 배열에서 중복 제거: filter 메소드 외에도 Set을 활용하는 방법도 있다.
// switch문 -> 더 간단한 조건문으로 바로 return하기 
// >> 오늘 배운 switch를 써먹어보고 싶어서 쓰긴 했는데, 비효율적이긴 하다.