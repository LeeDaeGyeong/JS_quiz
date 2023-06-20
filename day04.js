/*
원하는 숫자를 입력하면 그 수의 구구단을 출력하는 프로그램 작성하기.
*/

function numTable(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(num + " X " + i + " = " + num * i);
  }
}

numTable(7);
