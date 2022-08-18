/*
 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 
남은 수들을 return하는 solution 함수 완성하기

* 배열의 각 원소는 숫자 0 ~ 9로 이루어져 있음.
* 제거 후 남은 수 반환할 때 원소의 순서는 유지해야함.
* 배열의 크기는 1,000,000 이하 자연수

*/

function solution(arr)
{
    const answer = [];

    for (let n = 0; n < arr.length; n++) {
        if (answer[answer.length - 1] !== arr[n]) {
            answer.push(arr[n]);
        }
    }
    
    return answer;
}


// + 더 효율적으로 => Array.filter 이용하여 효율적으로 반복작업을 함.
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}