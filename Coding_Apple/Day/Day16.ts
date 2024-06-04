// 타입도 import export 해서 씁니다 그리고 namespace

import { 이름, 나이, Name, 인터페이스, Car, Bike, objFunction } from "./Day16_import"

let 변수 :Name = 'Lee'

// 구버전 import 해오는 법
/// <reference path = "./a"/>

// (숙제1)
let car :Car = { wheel: 4, model: "BMW" }

// (숙제2)
let 함수 :objFunction = (a) => console.log(a)