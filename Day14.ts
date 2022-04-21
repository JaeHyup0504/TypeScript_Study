// public, private 쓰는거 보니까 타입스크립트 귀여운편

class Users {
    public name = "Lee" // 모든 자식들이 이용가능, 생략 가능, 함수에서도 사용 가능
    constructor(a){ // 파라미터 입력 가능
        this.name = a
    }
}
let 유저1 = new Users("park")
유저1.name = "안녕";

class Users2 {
    name :string;
    // 데이터를 외부로부터 보호하고싶을 때 사용
    private familyName :string = "Lee" // class 안에서만 수정, 이용 가능 (수정 방지)
    constructor(a){ 
        this.name = a + this.familyName
    }

    // 자식들이 바꾸고 싶으면 class안에 변경 함수 제작
    이름변경함수(){
        this.familyName = "park"
    }
}
let 유저2 = new Users2("park")
유저2.이름변경함수() // 자식들이 사용

class Person2 {
    constructor(public name :string){
                // 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해주세요
    }
}
let 자식 = new Person2('kim')