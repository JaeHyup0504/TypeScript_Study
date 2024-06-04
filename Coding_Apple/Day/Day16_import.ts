export let 이름 = "Lee";
export let 나이 = 20;
export type Name = string;
export interface 인터페이스 {}

// 구버전 타입변수 숨기기 문법
// 중복 방지
// module도 가능
namespace 네임스페이스 {
    export type Name = string | number;
}

let a : 네임스페이스.Name = "kim";

// (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요 
export type Car = {
    wheel : number,
    model : string
  }
export interface Bike {
    wheel : 2,
    model : string
}

// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
// 아무것도 return 해주지 않아야합니다. 
// 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
// 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
export type objFunction = (a? :object) => void

// (숙제3) 타입 중복이 너무 많이 발생합니다.
namespace HW4 {
   export type Dog = string
}

namespace HW5 {
    export interface Dog { name : string };
 }

let dog1 :HW4.Dog = 'bark';
let dog2 :HW5.Dog = { name : 'paw' }