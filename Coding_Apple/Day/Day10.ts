// Object에 타입지정하려면 interface 이것도 있음

interface Square { 
    color : string, 
    width : number
}

let 네모 :Square = { color : "red", width : 100}

// type은 불가능 (엄격)
type Animal = { name : string }

// & 기호 (intersection type) 두 타입을 전부 만족하는 타입
// 미리 에러가 안나서 주의
type Cat = { age : number } & Animal 

// interface 장점 : extends로 복사가능
// 중복선언 가능 (합쳐짐)
// 외부 라이브러리에 많이 씀
interface Student { 
    name : string 
}
// 중복속성이 발생하면 에러를 잡아줌
interface Teacher extends Student{
    age : number
}

let 학생 :Student = { name : "Kee" }
let 선생 :Teacher = { name : "Lee", age : 20 }

// (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
interface Goods {
    brand : string
    serialNumber : number
    model : string[]
}

let 상품 : Goods = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

// (숙제2) array 안에 object 여러개가 필요합니다.
interface Product {
    product : string
    price : number
}

let 장바구니 : Product[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

// (숙제3) 위에서 만든 타입을 extends 해봅시다.
interface Product {
    product : string
    price : number
}

interface Card extends Product {
    card : boolean
}

// (숙제4) object 안에 함수를 2개 넣고 싶은데요 
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
// 이 object 자료를 어떻게 만들면 될까요? 
// interface를 이용해서 object에 타입지정도 해보십시오. 
interface MathObj {
    plus : (a:number, b: number) => number,
    minus :  (a:number, b: number) => number
}

let  오브젝트 :MathObj = {
    plus(a,b){
        return a + b
    },
    minus(a,b){
        return a - b
    }
}