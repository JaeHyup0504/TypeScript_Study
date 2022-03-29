/******** DAY 1 ********/

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

/******** DAY 2 ********/

let my :string = 'LEE';
let age :number = 27;
let question :undefined = undefined;
let question1 :null = null;

let 회원 :string[] = ['kim', 'park'];
let 번호 :number[] = [123, 456];
let 회원들 :{member1: string, member2: string} = {member1:'kim', member2:'park'}

// 오늘의 Tip
// 타입지정 문법 생략가능

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let myName = "Lee";
let myAge = 27;
let born = 'Korea';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let object : {songTitle :string, singer :string} = {songTitle: '존박', singer:'네 생각'}

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.

let project : {
    member :string[],
    days :number,
    started :boolean,
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }