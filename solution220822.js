/* 

* 성격 유형 검사하기

! 성격 유형 검사지
1번 지표: R, T
2번 지표: C, F
3번 지표: J, M
4번 지표: A, N

! 한 질문당 7개의 선택지
매우 비동의: ? 유형 3점
비동의: ? 유형 2점
약간 비동의: ? 유형 1점
모르겠음: X(0점)
약간 동의: ? 유형 1점
동의: ? 유형 2점
매우 동의: ? 유형 3점
* ? 유형: 비동의쪽은 survey[i]의 0번째, 동의쪽은 survey[i]의 1번째 성격 유형.

각 지표에서 더 높은 점수 받은 성격 유형이 검사자의 성격 유형.
각 성격 유형 점수가 같으면 둘 중 사전 순으로 빠른 성격 유형이 검사자의 성격 유형.

? survey: 질문마다 판단하는 지표, 1차원 문자열 배열
예) ["AN", "CF", "MJ", "RT", "NA"]

? choices: 검사자가 각 질문마다 선택한 선택지, 1차원 정수 배열
1: 매우 비동의 ~ 4: 모르겠음 ~ 7: 매우 동의
예) [5, 3, 2, 7, 5]

TODO: 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return하는 solution 함수


입출력 예
survey	choices	result
["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
["TR", "RT", "TR"]	[7, 1, 3]	"RCJA"

*/

function solution(survey, choices) {
    let answer = '';
    let R, T, C, F, J, M, A, N;

    for(let i = 0; i < choices.length; i++) {
        if (choices[i] === 1) {
            
        }
        
        // survey[i][0];
    }
    // for (let choice of choices) {
    //     console.log(choice);
        
    // }
// 몇 번 선택했는지 알아내서 -> 어느 지표에 점수가 들어가는지 확인 -> 점수 추가
// 마지막에 점수 합산해서 성격 유형 결과내기


    return answer;
}