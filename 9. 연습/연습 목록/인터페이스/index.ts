/* 
  타입스크립트 연습하기 
   - 인터페이스 예제(by 벨로버트 블러그)
*/

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number; //맴버 변수 선언
  constructor(radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 메서드
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

// tslint:disable-next-line: max-classes-per-file
class Rectangle implements Shape {
  width: number;
  heigth: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.heigth = height;
  }
  getArea() {
    return this.width * this.heigth;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(10, 5),
];

shapes.forEach(shape => console.log(shape.getArea()));
