// 12. [심화문제] 배열에서 중복된 값을 제거하고 오름차순으로 정렬하는 함수를 만들어보세요.

function removeDuplicatesAndSort(arr) {
  // 이곳에 코드를 작성합니다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplicatesAndSort([3, 1, 4, 1, 5, 9, 2, 6, 5]));
// [1, 2, 3, 4, 5, 6, 9]가 출력되어야 함
