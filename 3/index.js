// 3. 과일 배열에서 특정 과일이 있는지 확인하는 함수를 만들어보세요
const fruits = ["사과", "바나나", "오렌지", "포도"];

function hasFruit(fruitArray, targetFruit) {
  // 이곳에 코드를 작성합니다.
  return fruitArray.includes(targetFruit);
}

console.log(hasFruit(fruits, "바나나")); // true
console.log(hasFruit(fruits, "딸기")); // false
