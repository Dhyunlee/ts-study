// 타입 지정
let x: [string, number];

x = ['hello', 1004]

// x = [true, 1004] // (x)

// x[3] = 'world'; (x)

const user: [string, number] = ['Mark', 40];

// 비구조할당
const [first, second] = user;
// const [first, second, third] = user; (x)