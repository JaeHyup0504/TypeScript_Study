/**** 타입스크립트 기본 타입 정리 (primitive types) ****/

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
