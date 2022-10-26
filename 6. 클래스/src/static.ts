// static
class Car {
  readonly name: string = 'car';
  color: string;
  static wheels = 4;
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  start() {
    console.log('start');
    console.log(this.name);
    console.log(Car.wheels);
  }
}

// tslint:disable-next-line: max-classes-per-file
class Bmw extends Car {
  constructor(color: string, name: string) {
    super(color, name); //Car 클래스의 생성자(부모 생성자)
  }

  showName() {
    console.log(this.name);
  }
}

const z4 = new Bmw('black', 'zz33');
console.log(z4.name);
console.log(Car.wheels);
