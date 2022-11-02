function retrunAny(message: any): any {
  console.log(message);
}

const any1 = retrunAny("아무거나 리턴");
any1.toString();

let looselyType: any = {};

// any는 개체를 통해 전파
const d = looselyType.a.b.c;

// any타입이 될 수 있는 누수를 방지하기
{
  function leakingAny(obj: any) {
    const a = obj.num;
    const b = a + 1;
    return b;
  }

  const c = leakingAny({ num: 0 });

  c.indexOf("0");
}

// c 의 타입은 number를 예상했지만 indexOf로 요소의
// 타입을 문자열 형태로 찾아도 에러가 나지 않음

// 따라서 c는 number 타입으로 규정되어 반환되어야 한다
// 함수 내에서 a에 number 타입으로 지정하게 되면
// any 타입이 전파되는 것을 방지할 수 있다.

{
  function leakingAny(obj: any) {
    const a: number = obj.num;
    const b = a + 1;
    return b;
  }

  const c = leakingAny({ num: 0 });
  //   c.indexOf("0"); //Error

  // leakingAny의 매개변수의 타입이 any로 지정되어도
  // a에 number 타입으로 지정하면, b에도 number로 
  // 지정되어 위와 같은 any 타입이 전파되는 걸 막을 수 있다. 
  // 이와같이 any타입이 될 수 있는 누수를 방지할 수 있지만
  // 더 좋은 방법은 매개변수의 타입을 사용하기 전에 
  // 타입가드의 형식으로  갈라내서 타입이 지정되도록 
  // unknown 형식으로 사용하는 걸 추천하고 있다. 
}
