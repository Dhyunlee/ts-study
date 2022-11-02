function error(msg: string): never {
  throw new Error(msg);
}

function fail() {
  return error("failed");
  // fail의 리턴 타입을 지정하지 않아도, error 함수를 호출하고
  // 있으므로 never 타입으로 추론이 된다.
}

// 무한 반복을 경우에도 never 타입으로 지정할 수 있다.
function infiniteLoop(): never {
  while (true) {}
}

// 잘못된 타입을 넣는 실수를 막고자 할 때 사용
{
  let a: string = "hello";
  if (typeof a !== "string") {
    let b: never = a; // a에 string이 아닌 다른 타입이 지정되는 않게 처리
  }
}

declare const a: string | number;
if (typeof a !== "string") {
  a; //number 타입이 됨 
  // 특정 타입이 되도록 한정할 수 있다 (typeof 가드라고도 함)
}

// 잘못된 타입을 지정하지 않도록 처리 
type Indexable <T> = T extends string ? T & {[index: string]: any}: never;
// const b: Indexable<{}> = ''; // (x), 잘못된 타입을 넣을 때 무언가 하지 못하게 막음
