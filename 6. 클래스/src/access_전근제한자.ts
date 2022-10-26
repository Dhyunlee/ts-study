// 접근 제한자(Access modifier) - public, private, protected

// private
{
  class Car {
    private name: string = 'car';
    color: string;
    constructor(color: string) {
      this.color = color;
    }

    start() {
      console.log('start');
      console.log(this.name);
    }
  }

  // tslint:disable-next-line: max-classes-per-file
  class Bmw extends Car {
    constructor(color: string) {
      super(color); //Car 클래스의 생성자(부모 생성자)
    }

    showName() {
      // console.log(super.name); // 접근 불가능
    }
  }

  const z4 = new Bmw('black');
}

// #속성
{
  // tslint:disable-next-line: max-classes-per-file
  class Car {
    #name: string = 'car';
    color: string;
    constructor(color: string) {
      this.color = color;
    }

    start() {
      console.log('start');
      console.log(this.#name);
    }
  }

  // tslint:disable-next-line: max-classes-per-file
  class Bmw extends Car {
    constructor(color: string) {
      super(color); //Car 클래스의 생성자(부모 생성자)
    }

    showName() {
      // console.log(super.#name); // private와 동일함, 외부에서 접근할 수 없음
    }
  }

  const z4 = new Bmw('black');
}

// protected
{
  // tslint:disable-next-line: max-classes-per-file
  class Car {
    protected name: string = 'car';
    color: string;
    constructor(color: string) {
      this.color = color;
    }

    start() {
      console.log('start');
      console.log(this.name);
    }
  }

  // tslint:disable-next-line: max-classes-per-file
  class Bmw extends Car {
    constructor(color: string) {
      super(color); //Car 클래스의 생성자(부모 생성자)
    }

    showName() {
      console.log(super.name);
    }
  }

  const z4 = new Bmw('black');
}
