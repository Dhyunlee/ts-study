// 인터페이스

let user: object;

user = {
  name: 'Mike',
  age: 30,
};

// console.log(user.name);
/*
  user.name 으로 접근하게 되면 object에는 특정 
  속성 값에 대한 정보가 없어 에러가 발생한다.
   
  이런경우에는 객체의 속성에 타입을 지정해야 한다. 
  
  객체의 프로퍼트에 타입을 정의해서 객체를 
  표현하고자 할 때는 인터페이스를 사용한다. 
*/

// 문자열 리터럴 타입
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string;
  //   1?: string;
  //   2?: string;
  //   3?: string;
  //   4?: string;
  //   5?: string;
  //   [grade: number]: string;
  // 위 주석처리 부분을 간단하게 문자열 인데싱으로 할 수 있다.
  [grade: number]: Score;
}

let user2: User = {
  // user2를 User 타입으로 정의한다.
  name: 'angel',
  age: 30,
  3: 'A', // 3학년 A 학점, 3
};

/* 
   여기서 학점은 string으로 받기에 범위가 넓다.
   이때 사용하는 것이 문자열 리터럴 타입을 지정해서
   범위를 제한할 수 있다. 

   type Score = 'A' | 'B' | 'C' | 'F'; 이와 같이
   문자열 리터럴 타입을 지정한 후 
   [grade: number]: string; 여기 string 부분을 
   Score 타입으로 지정하면 된다. 
*/

user2.name = 'Mike';
console.log(user2.age);
// user2.만 입력해도 어떤 속성이 있는 지 확인할 수 있다.

console.log(user2.name); //Mike

/* 
   만약 정의되지 않는 프로퍼티를 사용한다면 
   에러가 난다. 
   
   이번에는 User 인터페이스에 gender를 
   추가해준다. 그랬더니 user2에 에러가 
   표시되는데 이때는 인터페이스에는 존재하지만
   user2에 지정하지 않아 에러가 표시된다. 
   
   옵셔널 속성
    - 인터페이스에 정의되어 있는 속성을 객체에
      꼭 사용하지 않아도 되도록 정의한다.
      (사용해도 되고 안해도 되도록 설정)

    - 인터페이스 속성 끝에 ? 를 붙이면 된다. 
    
   인터페이스 gender 속성에 옵셔널 속성을 지정했더니
   아까 같은 에러가 발생되지 않는다. 

   만약 gender 속성을 동적으로 추가할 때는 
   인터페이스에 정의한 속성의 타입으로 해줘야한다.
*/

// user2.gender = 12; // (x)
user2.gender = 'male';

/* 
   읽기 전용 속성
   - 인터페이스로 정의된 속성을 객체에 처음 생성할 
     때만 값을 할당하고 그 이후에는 (동적으로) 변경
     할 수 없는 속성이다.
     (말그대로 읽기만 가능한 속성)

   - 변경하지 않을 데이터일 때 사용  
*/
interface Characters {
  readonly name: string;
  readonly actor: string;
}

let cast: Characters = {
  name: 'Captin',
  actor: 'Robert',
};

// cast.name = 'Marvel';
// 읽기 전용 속성으로 수정이 불가능

/*
   인터페이스로 함수 정의
*/
interface Add {
  (num1: number, num2: number): number;
  /* 
    파라미터 타입을 지정: 리턴 타입 지정
    함수를 정의할 때 매개변수는 꼭 인터페이스에서
    정의한 키워드(num1, num2)로 할 필요는 없다.
  */
}

// 방금 만든 인터페이스로 함수 정의
const add: Add = function (x, y) {
  return x + y;
};

console.log(add(22, 33));

// console.log(add(22, 33, '44')); // (x)
// console.log(add(22, 'rk')); // (x)

// 앞에서 언급한 했듯이 전달받는 파라미터보다 많은 인수를
// 전달하거나 정의된 타입이 아닌 타입을 전달할 때
// 에러가 난다.

// 나이를 받아서 성인인지를 불린값으로 리턴하는 함수 정의
interface IsAult {
  (age: number): boolean;
}

const isAult: IsAult = age => age > 19;
console.log(isAult(20)); //true

/* 
   인터페이스로 클래스 정의 
   이때는 implements 라는 키워드를 사용한다. 
*/
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// 확장
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: '',
  wheels: 4,
  door: 5,
  start() {
    console.log('start');
  },
  stop() {
    console.log('stop');
  },
};

class Bmw implements Car {
  color = '';
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('go ..');
  }
}

const myCar = new Bmw('white');

console.log(myCar); //Bmw {color: 'white', wheels: 4}
myCar.start(); //go ..

/* 
  클래스 인터페이스의 확장(상속)
  이때는 extends 키워드를 사용한다.
*/

/* 
   확장은 여러개 정의할 수 있다.
*/

interface car2 {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends car2, Toy {
  price: number;
  play(): void;
}

class myToyCar {
  wheels = 4;
  color = '';
  price = 0;
  constructor(c: string, p: number) {
    this.color = c;
    this.price = p;
  }
  viewProduct() {
    console.log(
      `이 ${this.color} 차는 가격이 ${this.price}원 이다.`,
    );
  }
}

const myTC = new myToyCar('흰색', 3000);
myTC.viewProduct(); //이 흰색 차는 가격이 3000원 이다.
