// Generic(제네릭) - 함수에서 사용하기

{
  // 다양한 매개변수 타입 지정: 유니언 타입 사용
  function getSize1(arr: number[] | string[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize1(arr1); //3

  const arr2 = ['a', 'b', 'c'];
  getSize1(arr2); //3
}

// 다양한 매개변수 타입 지정: 제네릭 사용
{
  function getSize2<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1a = [1, 2, 3];
  getSize2<number>(arr1a);

  const arr1b = [1, 2, 3];
  getSize2<number | string>(arr1b);

  const arr2 = ['a', 'b', 'c'];
  getSize2<string>(arr2);

  const arr3 = [false, true, true];
  getSize2<boolean>(arr3);

  const arr4 = [{}, {}, { name: 'Tim' }];
  getSize2(arr4);
}
