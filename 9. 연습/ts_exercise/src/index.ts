/* 타입스크립트 연습하기 */

/* 기본 타입 */
let idx: number = 0;
let text: string = '';
let isAuth: boolean = false;
let isNull: null = null;
let aa: undefined;

/* 참조 타입 */
function getName(): void {
  console.log('이동현');
}

const num: number[] = [1, 2, 3, 4, 5];
const str: string[] = ['a'];
const bl: boolean[] = [false, true];

let user: object = {};
