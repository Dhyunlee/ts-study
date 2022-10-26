// Literal Types(리터럴 타입)
{
  const userName1 = 'Bob';
  let userName2 = 'Tom';
  let userName3: string | number = 'Tom';

  userName3 = 3;
  // 이렇게 다른 타입의 값을 사용하려면 위처럼 정의해준다.

  type Job = 'police' | 'developer' | 'teacher';

  interface User {
    name: string;
    job: Job;
  }

  const user: User = {
    name: 'Bob',
    job: 'developer',
    // job: 'student', //type 으로 지정된 값만 사용 가능
  };
}

// 유니언 타입
{
  interface HighSchoolStudent {
    name: string | string;
    grade: 1 | 2 | 3;
    // 이와 같이 유니언 타입을 사용한 적이 있다.
    // Union Types에 대해 자세히 알아보기
  }

  // Union Types (유니온 타입)
  interface Car {
    name: 'car';
    color: string;
    start(): void;
  }

  interface Mobile {
    name: 'mobile';
    color: string;
    call(): void;
  }

  function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if (gift.name === 'car') {
      gift.start();
    } else {
      gift.call();
    }
  }
}

//- Intersection Types(교차 타입)
{
  interface Car {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  // 장난감 자동차
  const toyCar: Toy & Car = {
    name: '타요',
    start() {},
    color: 'blue',
    price: 100,
  };
}
