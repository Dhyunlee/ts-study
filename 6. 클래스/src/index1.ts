// 타입스크립트에서 클래스 타입 지정하기

class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('start');
  }
}

const bmw = new Car('red');
