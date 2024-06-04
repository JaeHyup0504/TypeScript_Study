// 함수에 사용하는 never 타입도 있긴 합니다

function 함수() :never {
    // never type 붙일 수 잇는 조건
    // 1. return 값이 없어야한다.
    // 2. endpoint가 없어야한다.
    // 대부분 쓸데 없음 :void 사용
    throw new Error() // 강제로 에러내라는 뜻, 코드실행 중단됨
}
    
function 함수() :never {
   while (true) {
        console.log(123)
        // 내부 코드를 무한히 반복할 경우
    }
}

function 함수(param :string){
    if(typeof param == "string"){
        console.log(param)
    } else {
        console.log(param)
        // 코드 이상하게 짜면 never 나타남 
    }
}

let b = function() {
    throw new Error()
    // 아무것도 return 하지 않고 끝나지도 않을 경우
}

