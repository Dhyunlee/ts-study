// 타입스크립트 사용 이유?
if (false) {
  function add(num1: number, num2) {
    return num1 + num2;
  }

  //1) num1, num2는 any 타입이다.
  /* 
       any 타입은 아무 타입이란 뜻으로 어떤 타입이든 사용할 수 있는
       타입이다. 즉, 도저히 어떤 타입인지 모를 때 사용한다. 
       되도록 사용하지 않는 걸 권장한다. 
    */

  let result = add();
  console.log(result); //NaN (undefined + undefined)

  result = add(1);
  console.log(result); //NaN (1 + undefined)

  result = add(1, 2);
  console.log(result); //3

  result = add(3, 4, 5);
  console.log(result);
  //7 -> 파라미터에 맞지 않은 인수는 무시됨
  //12의 결과값을 예상한 개발자는 어디서 버그가 생겼는지 찾아야한다.

  result = add('hello', 'world');
  console.log(result); //helloworld

  result = add('hello', 3);
  console.log(result); //hello3 -> 연결연사자로 인식

  console.log(add());
  console.log(add(1));
  console.log(add(1, 2));
  console.log(add(1, 3, 5));
  console.log(add('hello', 'world'));
  console.log(add('hello', '20'));
}

if (true) {
  function showItems(arr: number[]) {
    arr.forEach(item => {
      console.log(item);
    });
  }

  showItems([1, 10, 20]);
  showItems(1, 2, 3); //Uncaught TypeError
}

// 에러를 확인해보자!!
