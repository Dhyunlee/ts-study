// 1) 원시 자료형
let car: string = 'bmw';
let isAdult: boolean = true;
let aa: null = null;
let bb: undefined = undefined;

// 2) 참조 자료형
const arrNumber: number[] = [1, 2, 3];

// tslint:disable-next-line: array-type
const arrNumber2: Array<number> = [10, 20, 30];

const week1: string[] = ['월', '화', '수'];
// tslint:disable-next-line: array-type
const week2: Array<string> = ['월', '화', '수'];
// week1.push(3); //(x)

// 3) 튜플 (Tuple)
let b: [string, number];
b = ['강아지', 5];
// b = [5, "강아지"]; //(x)

b[0].toLocaleLowerCase();
// b[1].toLocaleLowerCase(); //(x) number타입에는 toLocaleLowerCase 속성이 없으므로 에러

/* void, never */

/* 
  void 
  : 함수가 어떤 타입도 리턴되지 않는 타입
*/
function sayHello(): void {
  console.log('hello!');
}

/* 
  never 
  : 끝나지 않는 타입
*/

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something..
  }
}

/* 
  enum
  : 비슷한 값끼리 묶어주는 타입
    해당 속성에 값을 주지 않으면 0부터 지정되고 
    값을 넣으면 해당 값부터 지정된다.
   → 해당 값에 마우스를 올려서 확인해보기
*/
enum Os {
  Window, // (enum member) Os.Window = 0
  Ios,
  Android,
}

enum Os2 {
  Window = 3, // (enum member) Os.Window = 3
  Ios,
  Android,
}

enum Os3 {
  Window = 3, // (enum member) Os.Window = 3
  Ios = 5,
  Android, // (enum member) Os.Window = 6
}

console.log(Os3[5]); // "Ios"
// tslint:disable-next-line: no-string-literal
console.log(Os3['Ios']); // "Ios"

enum os4 {
  // 숫자뿐만 아니라 문자열 값도 가능
  Window = 'win',
  Ios = 'ios',
  Android = 'and',
}

let myOs: os4;
// 이렇게 설정하면 os4에 설정한 속성만 사용 가능
myOs = os4.Window;

/* 
 특정 값만 입력하도록 강제하고 싶을 때, 그리고 그 값이
 공통점이 있을 때 enum이란 타입을 사용한다.
*/
