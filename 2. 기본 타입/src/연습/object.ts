const person = { name: "Mark", age: 39 };
// type은 object가 아닌 { name: string; age: number;}이다.

const person2 = Object.create({ name: "Mark", age: 39 });

let obj_: object = {};
obj_ = { name: "Mark" };
obj_ = [{ name: "Mark" }];
// obj_ = 39 // Error
// obj_ = 'Mark'; // Error
// obj_ = true; // Error
// obj_ = 100n; // Error, es2020 이상에서 사용 가능
// obj_ = null; // Error
// obj_ = undefined; // Error


declare function create(o: object | null): void;
// 원시 타입은 사용하지 않음
// 유니언 타입을 사용하여 null은 허용

create({ props: 0 });
create(null);
// create(42); //Error
// create("hello"); //Error
// create(false); //Error
// create(undefined); //Error

// Object.create(0) //Error
