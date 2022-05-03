// object 타입 변환기 만들기
let obj24 = {name : 'kim', age : 20}
Object.keys(obj)

interface Person24 {
    age : number,
    name : string
}

// key값을 전부 가져오는 keyof
type PersonKeys = keyof Person24
let a24 :PersonKeys = 'name'

interface Person24_1 {
    [key :string] : number
}

// key값을 전부 가져오는 keyof
type PersonKeys_1 = keyof Person24_1
let a24_1 :PersonKeys = 'name'

type Car24 = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

// 맵핑해주는 함수
type TypeChanger<MyType> = {
    [key in keyof MyType] :string
}
type NewType24 = TypeChanger<Car24>

// (숙제1) 다음 타입을 변환기를 돌려보십시오.
type test24_1 = {
    color : string,
    model : boolean,
    price : number
  }

type TestTypeChager<Mytype> = {
    [key in keyof Mytype] : string | number
}
type NewTest24 = TestTypeChager<test24_1>

// (숙제2) 이런 변환기는 어떻게 만들어야할까요?
// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
type test24_2 = {
    color : string,
    model : boolean,
    price : number
  }

type TestTypeChager2<Mytype, T> = {
    [key in keyof Mytype] : T;
}
type NewTest24_1 = TestTypeChager2<test24_2, boolean>;
type NewTest24_2 = TestTypeChager2<test24_2, string[]>;