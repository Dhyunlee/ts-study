declare const maybe: unknown;

// 조건식에 따라 타입을 명시해줄 수 있다.
// 이와 같이 조건식으로 런타임에 타입 검사를 수행해서 해당 
// 타입에 한정되도록 처리하는 걸 타입 가드라 한다. 
if(maybe === true) {
    const aBoolean: boolean = maybe;
    // const aString: string = maybe; //(x) 불린 타입이므로 문자열 타입은 올 수 없음
} 

if(typeof maybe === 'string') {
    const aString: string = maybe;
    // const aBoolean: boolean = maybe; (x)
}

if(typeof maybe === 'number') {
    const aNumber: number = maybe;
}
