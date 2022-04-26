// 타입을 파라미터로 입력하는 Generic

function 함수<MyType>(x :MyType[]) :MyType {
    return x[0]
}
let c = 함수<number>([4,2])
let d = 함수<string>(['4','2'])
console.log(c)
console.log(d)

// extends 키워드로 넣을 수 있는 타입파라미터 제한두기
// MyType이 우측에 있는 속성을 가지고 있는지 체크
function 함수<MyType extends number>(x :MyType){
    return x - 1
}
let test = 함수<number>(100)

// 커스텀 타입으로도 타입파라미터 제한가능
interface LegnthCheck {
    length : number
}
function 함수<MyType extends LegnthCheck>(x :MyType){
    return x.length
}
let e = 함수<string[]>(['100'])

// class에도 타입파리미터 넣을 수 있음

// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 
// (동작 예시)
// 함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
// 함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 
function 함수<Test1 extends string | string[]>(x: Test1) {
    console.log(x.length)
}

// (숙제2) Animal 이라는 타입이 있습니다.
//   그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 
//   data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
//   근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
//   오늘 배운 Generic을 이용해서 구현해보도록 합시다.   
//   (동작 예시)  
//   함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임
interface Animals {
    name : string,
    age : number
}
let data = '{"name" : "dog", "age" : 1 }';

function 함수(x : string) {
    return JSON.parse(x)
}
let results = 함수(data)

// (숙제3) class 를 수정해봅시다.

class Persons <T> {
    name;
    constructor(a){
      this.name = a;
    }
  }
  let f = new Persons<string>('어쩌구');
  f.name //any 타입이 되었넹 