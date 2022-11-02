function retrunVoid(msg: string | number): void {
  console.log(msg);
}

retrunVoid("hello");
retrunVoid(12);

function getAge(age: number): void {
  // 10살 이상이면 출력 안됨
  if (age > 10) {
    return;
  }
  console.log(`나이: ${age}`);
}
getAge(9)
getAge(10)
getAge(11)


// const getAgeMsg = getAge(9); (x) 리턴 타입이 없으므로 이렇게 변수로 담으면 에러가 난다.

// 리턴에 undefined만 가능
{
  function getAge_(age?: number): void {
    // 10살 이상이면 출력 안됨
    if (!age) {
      return undefined;
    }
    console.log(`입력한 나이: ${age}`);
  }

  getAge_(20);
  getAge_();
}
