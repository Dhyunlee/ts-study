// readonly
class Car {
  readonly name: string = 'car';
  color: string;
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }

  start() {
    console.log('start');
    console.log(this.name);
  }
}

// tslint:disable-next-line: max-classes-per-file
class Bmw extends Car {
  constructor(color: string, name) {
    super(color, name); //Car 클래스의 생성자(부모 생성자)
  }

  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw('black', 'zzz333');
// z4.name = 'zzz33';

console.log(z4.name);
