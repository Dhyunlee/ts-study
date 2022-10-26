// 기존 자스 언언
if (false) {
  function add(num1, num2) {
    return num1 + num2;
  }

  //1) 타입 지정을 맘대로 하거나 값을 넣지 

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
}
if(true) {
  function showItems(arr) {
    arr.forEach(item => {
       console.log(item)
    });
  }

  showItems([1,10,20]);
  showItems(1,2,3) //Uncaught TypeError

  /* 
    코드를 실행할 때, 해당 타입이 아니면 Uncaught 
    TypeError가 생긴다. 

    이렇게 자바스크립트는 실행되는 시점(= 런타임)에 타입이
    결정되고 이때 오류를 발견한다. 

    반대로 Java, TypeScript 같은 정적언어에서는 
    컴파일 타임에 타입이 결정되고 컴파일 시점에 오류를 
    발견한다. 
  */
}

