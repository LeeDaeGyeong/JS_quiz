/*
문제 1 : 배열의 삭제

다음 배열에서 400,500을 삭제하는 code를 입력하세요

*/
let num = [100, 200, 300, 400, 500];

num.splice(3);

console.log(num);

/*
문제 2 : 배열의 내장함수

다음 배열에서 인덱스 2번 위치에 1000을 추가하세요
*/

let arr = [200, 100, 300];

arr.splice(2, 0, 1000);

console.log(arr);
