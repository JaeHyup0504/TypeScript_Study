// 조건문으로 타입만들기 & infer

// type if 문은 삼항연산자로
// 조건식은 extends로 써야함
type Age25<T> = T extends string ? string : unknown;
let a_25 :Age25<string>
let a_26 :Age25<number>

type FirstItem<T> = T extends any[] ? T[0] : any

// 왼쪽에서 타입을 추출
type Person25<T> = T extends (infer R)[] ? R : unknown
type a = Person25<string[]>

type Person25_1<T> = T extends (() => infer R) ? R : unknown
type b = Person25_1<() => void>

// ReturnType<> 이런 예약 타입이 있는데 여기에 함수타입 집어넣으면 return 타입만 뽑아서 알려줌 
type c = ReturnType<() => void>

// (숙제1) 타입 파라미터로 
// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
type Test25<T> = T extends [string, ...any] ? T[0] : unknown

// (숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 
type Test25_2<T> = T extends (x: infer R) => any ? R : any