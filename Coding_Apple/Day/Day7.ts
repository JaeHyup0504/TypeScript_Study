// Literal Types
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성 가능
// const 변수와 유사하게 사용가능 업글버전
let 접니다 :"대머리" | "솔로";

function 함수(a :"hello") : 1 | 0{
    return 1
}
함수("hello")

function 함수(x :"가위" | "바위" | "보") : ("가위" | "바위" | "보")[]{
    return ["보"] 
}
함수('가위')

// Literal Types의 문제점
var 자료 = {
    name : "LEE"
} as const
자료.name

function 내함수(a : "LEE"){

}
내함수(자료.name)

// 해결책
// 1. object 만들 때 타입지정을 확실히하자
// 2. as 문법으로 타입을 작성
// 3. as const 사용 (object 자료를 완전히 잠그고 싶을 때 사용)
//    이 object value 값을 그대로 타입으로 지정해준다.
//    object 속성들을 모두 readonly 붙여줌
