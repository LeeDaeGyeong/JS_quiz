/*
총 문자열의 길이는 50
사용자가 입력한 문자는 가운데 정렬
나머지 빈 칸은 =으로 채우기.
*/

function deletePush(str) {
  const result = Array(50).fill("=");

  const plus = (result.length - str.length) / 2;

  result.splice(plus, str.length, str);

  const resultStr = result.join("");

  return resultStr;
}

console.log(deletePush("Hello"));
