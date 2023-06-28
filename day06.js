// 0 부터 1000까지의 1의 개수를 세는 프로그램
// ex) 11은 1이 2번 들어간 셈.

const arr = [];

for (let i = 0; i <= 1000; i++) {
  arr.push(i);
}

const arrStr = arr.join("");

const checkArr = [];

for (let i = 0; i < arrStr.length; i++) {
  const number = parseInt(arrStr[i]);
  checkArr.push(number);
}

const resultArr = checkArr.filter((item) => item === 1);

console.log(resultArr.length); // 301

// 정답 : 301
