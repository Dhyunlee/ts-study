// 기존 자스 언언
if (false) {
    function add2(num1: number, num2: number) {
      return num1 + num2;
    }

    const result = add2(1, 2);
    console.log(result); //3
  }
  if(true) {
    function showItems2(arr: number[]) {
      arr.forEach((item: number) => {
         console.log(item)
      });
    }
  
    showItems2([1,10,20]);
  }