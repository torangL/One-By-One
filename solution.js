function solution(lottos, win_nums) {
    const bestNum = lottos.filter(el => {
        return win_nums.includes(el) || el === 0;
    }).length;

    const worstNum = lottos.filter(el => {
        return win_nums.includes(el);
    }).length;

    function rank(num) {
        let rank;
        if (num === 6) rank = 1;
        else if (num === 5) rank = 2;
        else if (num === 4) rank = 3;
        else if (num === 3) rank = 4;
        else if (num === 2) rank = 5;
        else rank = 6;
        return rank;
    }

    const best = rank(bestNum);
    const worst = rank(worstNum);

    var answer = [best, worst];
    return answer;
};

// 44, 1, 0, 0, 31, 25 -> 1, 0, 0, 31
// 31, 10, 45, 1, 6, 19 -> 1, 6, 10, 19, 31, 45

// 최고 순위: 가능한 모든 숫자 일치
// 최저 순위: 가능한 모든 숫자 불일치

/*
lottos -> 구매한 로또 번호 담은 배열
win_nums -> 당첨 번호 담은 배열

당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return하도록
solution 함수 완성하기
return -> [최고 순위, 최저 순위]

배열 안의 모든 원소는 정수, 
lottos는 0 이상 45 이하: 0 제외 같은 숫자X, 0은 알아볼 수 없는 숫자, 정렬X
win_nums는 1 이상 45 이하: 같은 숫자X, 정렬X


1등: 6개 모두 일치
2등: 5개 일치
3등: 4개 일치
4등: 3개 일치
5등: 2개 일치
6(낙첨): 그 외

*/



/*

매개변수: 문자열 s
s가 의미하는 원래 숫자를 return하도록 solution 함수 완성하기

zero -> 0
one -> 1
two -> 2
three -> 3
four -> 4
five -> 5
six -> 6
seven -> 7
eight -> 8
nine -> 9

"one4seveneight"	1478 -> one 4 seveneight
"23four5six7"	234567 -> 23 four 5 six 7
"2three45sixseven"	234567 -> 2 three 45 sixseven
"123"	123 -> 123

*/

function solution(s) {
    const match = s.match(/zero|one|two|three|four|five|six|seven|eight|nine|[0-9]/g);
    const numArr = match.map(el => {
        if (el === 'zero') el = '0';
        else if (el === 'one') el = '1';
        else if (el === 'two') el = '2';
        else if (el === 'three') el = '3';
        else if (el === 'four') el = '4';
        else if (el === 'five') el = '5';
        else if (el === 'six') el = '6';
        else if (el === 'seven') el = '7';
        else if (el === 'eight') el = '8';
        else if (el === 'nine') el = '9';
        return el;
    });
    let answer = Number(numArr.join(''));
    return answer;
}


/* 
* 신규 아이디 추천
매개변수 new_id: 신규 유저가 입력한 아이디
1 ~ 7단계를 거쳐 입력한 아이디가 규칙에 맞지 않으면 새 아이디를 추천함.
1 ~ 7단계를 거친 후의 추천 아이디를 return하도록 solution 함수를 완성하기.

1단계: 대문자 -> 소문자
2단계: 알파벳 소문자, 숫자, -, _, . 제외 모든 문자 제거
3단계: .가 2번 이상 연속된 부분을 하나의 .로 치환
4단계: 처음이나 끝에 위치한 . 제거
5단계: 아이디가 빈 문자열이면 'a' 대입
6단계: 아이디가 16자 이상이면 첫 15개 문자 제외한 나머지 모두 제거.
제거 후 .가 끝에 위치하면 .도 제거
7단계: 아이디가 2자 이하면 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임.

*/

function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
    new_id = new_id.replace(/\.{2,}/g, '.');
    new_id = new_id.replace(/^\.|\.$/, '');
    if (new_id.length === 0) new_id = 'a';
    while (new_id[new_id.length - 1] === '.' || new_id.length >= 16) {
        new_id = new_id.slice(0, -1);
    }
    while (new_id.length <= 2) {
        new_id += new_id[new_id.length - 1];
    }
    return new_id;
}