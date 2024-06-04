// 타입 정의가 너무 길면 Type Aliases (별칭)

// type 작명할 때 대문자로 시작 (일반 변수랑 차별화를 두기 위해서)
type AnimalType = string | number | undefined
let 동물 :AnimalType

type Animal2 = { name : string, age : number }
let 동물2 : Animal2 = { name : 'Lee', age : 26 }

// readonly로 잠그기

// 읽기전용으로 바꿔줌 (수정 x)
type BornType = {
    readonly region : string
}

const 출생지역 :BornType = { 
    region : "seoul" 
}

// 속성 몇개가 선택사항이라면
// 물음표연산자만 추가

type BornType2 = {
    region? : string // region : string | undefined (같은 의미)
}

// type 키워드 여러개를 합칠 수 있습니다.
// extend 한다
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number }
type PositionY = { y : number }
type NewType = PositionX & PositionX
// { x : number, y : number }

// type 키워드는 재정의가 불가능합니다.
// 같은 이름의 type 변수 재정의 불가능

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈 

type Test1 = {
    color : string | undefined, 
    size : number,
    readonly position : number[]
}


// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type Test2 = {
    name : string,
    phone: number,
    email: string
}

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

type Test3 = {
    age: boolean
}
type Right = Test2 & Test3