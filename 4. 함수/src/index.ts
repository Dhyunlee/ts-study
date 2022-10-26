// 함수

// void 타입
function add(num1: number, num2: number): void {
  console.log(num1 + num2);
}

// 옵셔널 타입
function hello(name?: string) {
  return `Hello, ${name || '이름 미지정'}`;
}

/* 
   파라미터가 어떤 값도 전달되지 않을 때 '이름 미지정' 이란
   결과값을 예상하고 실행했지만 1개의 인수가 필요하다는 
   에러가 났다. 
   이처럼 타입스크립트에는 타입을 자세히 명시해줘야한다. 
   이때 파라미터의 타입을 옵셔널로 지정해준다. 
*/
const reulst = hello();
const reulst2 = hello('John');
// const reulst3 = hello(23); // (x)

// 기본 매개변수
function sayHello(
  name: string = '이름 미지정',
  age?: number,
): string {
  if (age) return `hello!, ${name}. You are ${age}`;
  return `hello, ${name}`;
}

console.log(sayHello()); //hello, 이름 미지정
console.log(sayHello('Sam')); //hello, 이름 미지정
console.log(sayHello('Sam', 30)); //hello, 이름 미지정

/* 
   옵셔널 매개변수 주의할점
   → 항상 필수 매개변수보다 뒤에 지정

  function sayBye(age?: number, name: string) { X
    console.log('잘가~'); 
  } 
*/

// 앞에 옵셔널한 매개변수를 선언하고 싶다면
// | 를 사용해야한다.
function sayBye2(
  age: number | undefined,
  name: string,
): void {
  console.log('잘가~');
}

sayBye2(30, '짱구');
sayBye2(undefined, '짱구'); // undefined를 명시적으로 작성

/* 
   rest 매개변수의 타입 지정 
*/
function addNums(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

addNums(1, 2, 3); //6
addNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

/* this 지정하기 */
interface User {
  name: string;
}

const Sam: User = { name: 'Sam' };

function showName(this: User) {
  console.log(this.name);
}

// 매개변수가 존재하면
function showName2(
  this: User,
  age: number,
  gender: 'm' | 'f',
) {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a();

const a2 = showName.bind(Sam);
a2(30, 'm'); // 여기서 전달된 매개변수는 this 다음부터 하나씩 전달됨

/* 함수 오버로딩 */

/* 
   아래 예제에서 join 함수의 리턴 타입은 age에 
   의해서 결정된다. (즉 age 타입에 따른 분기 처리)
   코드 상 문제가 없어 보이지만 실행해보면 
   에러가 난다. 이때 사용할 수 있는 것이 함수
   오버로딩이다. 

   함수 오버로딩 
    → 전달받은 매개변수의 개수나 타입에 따라 
      다른 동작을 하게 하는 것을 의미한다. 
*/
interface User2 {
  name: string;
  age: number;
}

// 함수 오버로딩
function join(name: string, age: string): string;
function join(name: string, age: number): User2;

// 함수 정의
function join(
  name: string,
  age: number | string,
): User2 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요';
  }
}

const sam: User2 = join('sam', 30);
const jane: string = join('jane', '가나다');

/* 
  function join(name: string, age: number): User2;
  이와 같이 함수 오버로딩을 사용하면 된다. 
  
  const sam: User2 = join('sam', 30); 이 예제에서
  age는 숫자 타입으로 join 함수는 User2 타입을 리턴한다고
  판단한다.
  아래 jane 도 같은 방법으로 해결해보자!
*/
