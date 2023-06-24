// 콜백 함수
//  -> 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수

function repeat(n, func) {
  for (let i = 0; i < n; i++) {
    func(i);
  }
}

// repeat() 고차 함수의 매개변수로 들어갈 콜백함수 call().
const call = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, call);
