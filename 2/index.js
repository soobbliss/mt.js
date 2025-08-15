// 2. 태어난 년도를 입력받아 현재 나이를 계산하는 함수를 만들어보세요
function calculateAge(birthYear) {
  // 이곳에 코드를 작성합니다.
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log(calculateAge(1995)); // 30이 출력되어야 함
