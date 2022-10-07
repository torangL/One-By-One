/*

* 키패드 누르기

스마트폰 전화 키패드
1 2 3
4 5 6
7 8 9
* 0 #

왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력
맨 처음 왼손 엄지는 *, 오른손 엄지는 # 위치에서 시작

엄지 사용 규칙
1. 엄지는 상하좌우 4가지 방향으로만 이동 가능, 키패드 한 칸 === 거리 1
2. 왼쪽 열 3개(1, 4, 7)는 왼손 엄지
3. 오른쪽 열 3개(3, 6, 9)는 오른손 엄지
4. 가운데 열 4개(2, 5, 8, 0)는 두 엄지의 현 위치에서 더 가까운 엄지 사용
4-1. 두 엄지 거리가 같으면 오른손잡이는 오른손 엄지, 왼손잡이는 왼손 엄지

? numbers: 순서대로 누를 번호가 담긴 배열(원소 값 0 ~ 9 정수, 1 이상 1,000 이하 크기)
? hand: "left" - 왼손잡이, "right" - 오른손잡이
TODO: 연속된 문자열 형태로 return하도록 solution 함수 완성 (왼손 엄지 - 'L', 오른손 엄지 - 'R')

*/

function solution(numbers, hand) {
    let answer = '';
    // 맵 생성(휴대폰)
    // 왼엄지 위치 변수 선언
    // 오른엄지 위치 변수 선언
    // 각 위치 좌표 생성 및 할당(x, y)
    const map = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#']
    ];
    let leftPlace = [3, 0];
    let rightPlace = [3, 2];

    // 위치 찾아주는 함수
    // map에서 반복하여 좌표 읽어내리다가 일치하는 숫자 만나면 그 위치 출력
    function findPlace(number) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === number) {
                    return [i, j];
                }
            }
        }
    };

    // 거리 계산하는 함수
    function getDistance(target, handPlace) {
        return Math.abs(target[0] - handPlace[0]) + Math.abs(target[1] - handPlace[1]);
    };

    for (let i = 0; i < numbers.length; i++) {
        // 1, 4, 7 -> 왼엄지, 위치는 해당 숫자로
        // 3, 6, 9 -> 오른엄지, 위치는 해당 숫자로
        // 2, 5, 8, 0 -> 왼엄지 위치 & 오른엄지 위치 중 더 가까운 곳, 위치는 해당 숫자로
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += 'L';
            leftPlace = findPlace(numbers[i]);
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += 'R';
            rightPlace = findPlace(numbers[i]);
        } else {
            let target = findPlace(numbers[i]);
            let leftDistance = getDistance(target, leftPlace);
            let rightDistance = getDistance(target, rightPlace);

            if (leftDistance < rightDistance) {
                answer += 'L';
                leftPlace = findPlace(numbers[i]);
            } else if (rightDistance < leftDistance) {
                answer += 'R';
                rightPlace = findPlace(numbers[i]);
            } else {
                hand === 'left' ? answer += 'L' : answer += 'R';
                hand === 'left' ? leftPlace = findPlace(numbers[i]) : rightPlace = findPlace(numbers[i]);
            }
        }
    }
    return answer;
};

// * 되새기기
// * 더 효율적으로 작성하기