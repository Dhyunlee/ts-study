interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

/* keyof */
{
  // UserKey 타입 별칭(: 사용자 정의 타입 정의)
  type UserKey = keyof User;
  // 이것은 아래 코드와 동일
  // 'id' | 'name' | 'age' | 'gender'

  const uk: UserKey = 'id';
  // User 인터페이스의 key 중 하나를 입력해야 에러가 안남
}

/* Partial<T> */
{
  let admin: Partial<User> = {
    id: 1,
    name: 'Bob',
    // job: '', X
    /* 
        → User 인터페이스에 없는 속성을 사용하면 
        에러 발생
      */
  };
  // 위에 작성한 형태는 아래와 동일하다

  // interface User {
  //   id?: number;
  //   name?: string;
  //   age?: number;
  //   gender?: 'm' | 'f';
  // }
}

/* Required<T> */
{
  interface User2 {
    id: number;
    name: string;
    age?: number;
  }

  // let admin: Required<User2> = {
  //    id: 1,
  //    name: 'Bob'
  // }
  /* 
      User2 인터페이스에 정의한 age 프로퍼티는 옵셔널로 
      입력 해도되고 안해도 된다. 하지만 Required을 
      사용하면 age 프로퍼티도 필수로 입력해야한다. 
    */

  let admin: Required<User2> = {
    id: 1,
    name: 'Bob',
    age: 32,
  };
}

/* Readonly<T> */
{
  interface User3 {
    id: number;
    name: string;
    age?: number;
  }

  let adminUser: Readonly<User3> = {
    id: 1,
    name: 'Bob',
    age: 32,
  };

  // adminUser.id = 3; // 읽기 전용이므로 속성 값을 변경할 수 없음
}

/* Record<K, T> */
{
  // interface Score {
  //   '1': 'A' | 'B' | 'C' | 'D' | 'F';
  //   '2': 'A' | 'B' | 'C' | 'D' | 'F';
  //   '3': 'A' | 'B' | 'C' | 'D' | 'F';
  //   '4': 'A' | 'B' | 'C' | 'D' | 'F';
  // }
  // 위 Score 인터페이스는 Record<K, T> 를
  // 사용해 아래처럼 작성할 수 있다.
  /*  
      const score: Record<
        '1' | '2' | '3' | '4',
        'A' | 'B' | 'C' | 'D' | 'F'
      > = {
        1: 'A',
        2: 'C',
        3: 'B',
        4: 'D',
      }; 
    */

  // 여기서 <K, T> 부분이 보기가 어려우므로
  // 타입 별칭사용해서 넣어주자
  type Grade = '1' | '2' | '3' | '4';
  type Score = 'A' | 'B' | 'C' | 'D' | 'F';

  const score: Record<Grade, Score> = {
    1: 'A',
    2: 'C',
    3: 'B',
    4: 'D',
  };

  /* Record<K, T> 활용 */
  {
    interface User4 {
      id: number;
      name: string;
      age: number;
    }

    // 유효 검사 함수
    function isValid(user: User4) {
      const result: Record<keyof User4, boolean> = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0 && user.age <= 100,
      };
      return result;
    }
  }
}
