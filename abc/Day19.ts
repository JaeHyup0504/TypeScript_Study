// array 자료에 붙일 수 있는 tuple type

// tuple type 자료의 위치까지 정확히 지정할 수 있는 타입
let 멍멍 :[string, boolean] = ['dog', true]

// 조금더 엄격한 rest parameter 타입지정 가능
function 함수(...x :[number, string]) {
             // 배열로 저장 됨
}
함수(1, "Lee")

let arr = [1,2,3];
let arr2 : [number, number, ...number[]] = [4,5, ...arr]

// (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
let tes1 : [string, number, boolean] = ['핫도그', 7000, true]

// (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
let test2 : [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

// (숙제3) 함수에 타입지정을 해보도록 합시다.
function test3(...x : [string, boolean, ...(number|string)[]]) {
}

// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오
function test4(...x : [...(number|string)[]]){
    
    let result : [string[], number[]] = [[],[]]

    x.forEach((el) => {
        if(typeof el === "string"){
            result[0].push(el)
        }else {
            result[1].push(el)
        }
    })

    return result
}
