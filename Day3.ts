/**** 타입을 미리 정하기 애매할 때 (union type, any, unknown) ****/

// Union Type (타입 2개 이상 합친 새로운 타입)

// 이 변수엔 string 또는 number가 들어올 수 있습니다.
let str :number | string = 123;
str = 'kim'
let str1 :(number | string) = 'kim';

// array와 object 자료에 number 또는 string이 들어올 수 있습니다.
let str2 :(number | string)[] = [1,'2',3];
let obj : { a:string | number } = { a :'123' }

// 아무 자료나 집어넣을 수 있는 타입입니다. 
// 타입실드 해제문법임 일반 JS 변수로 만들고 싶을 때 쓰자.
let str3: any = 'kim';
str3 = 123;
str3 = undefined;
str3 = [];

// 요즘 타입스크립트는 unknown 타입을 사용
// any와 똑같이 모든 타입을 집어넣을 수 있습니다.
// any보다 안전성이 있다.
let str4: unknown = 'kim';
str4 = 123;
str4 = undefined;
str4 = [];

// 타입스크립트는 언제나 확실한걸(엄격) 좋아한다

// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
let user:string = 'kim';
let age1:undefined | number = undefined;
let married:boolean = false; 
let 철수:(string | number | undefined | boolean)[] = [user, age, married];

// (숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교:{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[] 
} 

= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


/**** 함수에 타입 지정하는 법 & void 타입 ****/