// Generic(제네릭) - 인터페이스에서 사용하기(2)
interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  preice: number;
}

const user: User = { name: 'Mike', age: 10 };
const car: Car = { name: 'bmw', color: 'black' };
const book: Book = { preice: 9000 };

function showName<T extends { name: string }>(
  data: T,
  // 어떤 타입이 전달되는데 이 타입은 { name: string } 객체를 확장한 형태임을 알려줌
  // 다양한 모습의 객체가 전달될 수 있지만 name(타입: string) 속성이 반드시 있어야한다.
  // 이때 name의 타입이 다른 것이 온다면 에러가 생긴다.
): string {
  return data.name;
}

console.log(showName(user));
console.log(showName(car));
// showName(book);
