/*
문자열 압축하기

ex)
입력 : aaababcccbb

출력 : a4b4c3
*/

const user_s = 'abcabcabc'
let result_s = '';
let store_s = user_s[0];
let count = 0;

for (let i of user_s){
  if (i === store_s){
    count += 1;
  } else{
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);