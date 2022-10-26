/* 
   Generic(제네릭) - 인터페이스에서 사용하기(1)
    : 객체의 속성을 제약하는 방법
*/

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  name: 's22',
  price: 1000,
  option: {},
};

// option 객체가 정해져있다면 아래와 같이 사용
const m2: Mobile<{ color: string; coupon: boolean }> = {
  name: 's22',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m3: Mobile<string> = {
  name: 's22',
  price: 900,
  option: 'good',
};
