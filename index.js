/******** DAY 1 ********/
var 이름 = 'kim';
var 이름1 = ['kim', 'park'];
var 이름2 = { name: 'kim' };
// let 이름2 :{name? : string} = { } 옵션
var 이름3 = 123;
var 이름4 = 123;
//함수에 타입 지정 가능
function 함수(x) {
  return x * 2;
}
var john = [123, true];
var jon = { name: 'kim', age: '123' };
// class 타입지정 가능
var User = /** @class */ (function () {
  function User(name) {
    this.name = name;
  }
  return User;
})();
/******** DAY 2 ********/
var my = 'LEE';
var age = 27;
var question = undefined;
var question1 = null;
var 회원 = ['kim', 'park'];
var 번호 = [123, 456];
var 회원들 = { member1: 'kim', member2: 'park' };
// 오늘의 Tip
// 타입지정 문법 생략가능
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
var myName = 'Lee';
var myAge = 27;
var born = 'Korea';
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
var object = { songTitle: '존박', singer: '네 생각' };
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};
