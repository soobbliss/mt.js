// 5. 숫자 배열에서 짝수만 골라서 새로운 배열을 만드는 함수를 작성하세요
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = [];

function getEvenNumbers(numArray) {
  // 이곳에 코드를 작성합니다.
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      newNumbers.push(numArray[i]);
    }
  }
}

getEvenNumbers(numbers);
console.log(newNumbers); // [2, 4, 6, 8, 10]이 출력되어야 함

//질문사항 : 새로운 배열을 만들라고 제시되어있으니 새로운 배열 변수를 생성해야하나요?
//그러기엔 콘솔로그에 기존 배열 이름이 적혀져 있습니다.
