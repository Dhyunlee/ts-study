let isDone: boolean = false;

isDone = true;

console.log(typeof isDone)  //boolean
console.log(isDone && '구성원이 맞습니다.') //구성원이 맞습니다.

/* boolean vs Boolean 타입 비교 */
let isOk: Boolean = true;
let isNotOk: boolean = new Boolean(false);

console.log(typeof isOk) //boolean
console.log(typeof isNotOk) //object