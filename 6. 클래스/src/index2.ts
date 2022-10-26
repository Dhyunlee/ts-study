// 맴버변수 미리 타입 지정하지 않기

class Car2 {
  constructor(readonly color: string) {
    // constructor(public color: string) {
    this.color = color;
  }

  start() {
    console.log('start');
  }
}

const bmw = new Car2('red');
