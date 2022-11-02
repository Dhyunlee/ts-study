// 타입 지정 방법
let list: number[] = [1, 11, 21, 31]; // 일반적인 방법
let list2: Array<number> = [1, 11, 21, 31]; // 사용 지양

let list_: (number | string)[] = [1, '가방', 21, 31]; // 유니언 타입으로 각 요소의 타입을 지정할 수 있다.


