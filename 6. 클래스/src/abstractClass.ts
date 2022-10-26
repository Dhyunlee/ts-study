// 추상 클래스
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('start');
  }

  abstract doSomething(): void;
}

// const car = new Car('red'); X

// tslint:disable-next-line: max-classes-per-file
class Bmw extends Car {
  constructor(color: string) {
    super(color); //Car 클래스의 생성자(부모 생성자)
  }

  showName() {
    console.log(this.color);
  }

  doSomething(): void {
    console.log('추상 클래스 구현부 작성하기...');
  }
}

const z4 = new Bmw('black');
