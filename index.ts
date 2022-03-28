let 이름 :string = 'kim';
let 이름1 :string[] = ['kim', 'park']
let 이름2 :{name : string} = {name: 'kim'}
// let 이름2 :{name? : string} = { } 옵션
let 이름3 :string | number = 123; 

type myType = string| number;
let 이름4 :myType = 123;

//함수에 타입 지정 가능
function 함수(x: number) : number {
    return x * 2
}

// tuple 타입
type Member = [number, boolean];
let john:Member = [123, true]

type Member2 = {
    // 글자로 된 모든 object 속성의 타입은: string
    [key: string]: string
}
let jon : Member2 = {name:'kim', age: '123'}

// class 타입지정 가능
class User {
    name;
    constructor(name){
        this.name= name;
    }
}