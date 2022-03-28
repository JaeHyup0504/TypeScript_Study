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