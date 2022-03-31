/**** 타입을 미리 정하기 애매할 때 (union type, any, unknown) ****/

// Union Type (타입 2개 이상 합친 새로운 타입)

// 이 변수엔 string 또는 number가 들어올 수 있습니다.
let str :number | string = 123;
str = 'kim'
let str1 :(number | string) = 'kim';

// array와 object 자료에 number 또는 string이 들어올 수 있습니다.
let str2 :(number | string)[] = [1,'2',3];
let obj : { a:string | number } = { a :'123' }

// 아무 자료나 집어넣을 수 있는 타입입니다. 
// 타입실드 해제문법임 일반 JS 변수로 만들고 싶을 때 쓰자.
let str3: any = 'kim';
str3 = 123;
str3 = undefined;
str3 = [];

// 요즘 타입스크립트는 unknown 타입을 사용
// any와 똑같이 모든 타입을 집어넣을 수 있습니다.
// any보다 안전성이 있다.
let str4: unknown = 'kim';
str4 = 123;
str4 = undefined;
str4 = [];

// 타입스크립트는 언제나 확실한걸(엄격) 좋아한다

// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
let user:string = 'kim';
let age1:undefined | number = undefined;
let married:boolean = false; 
let 철수:(string | number | undefined | boolean)[] = [user, age, married];

// (숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교:{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[] 
} 

= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


/**** 함수에 타입 지정하는 법 & void 타입 ****/

// 함수에 타입지정하려면 2곳 가능
//1. 함수로 들어오는 자료 (파라미터)
//2. 함수에서 나가는 자료 (return)
function test1(x :number) :number {
    return x * 2
}

test1(10)

// 함수는 void 타입이 있음
function test2(x? :number) :void {
    
}
// 자바스크립트와 다른 점 - 타입지정된 파라미터는 필수임 (안쓰면 오류남)
// ? 옵션
// x : number | undefined 이거랑 똑같은 의미
test2() 

function test3(x :number | string) :void {
    // console.log(x + 3) // 오류남 타입스크립트는 엄격 !
}

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 

function test4(x? : string){
    if(x) {
        console.log("안녕하세요" + x)
    }else {
        console.log("이름이 없습니다")
    }
}

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function test5(x : number | string): number{
    return x.toString().length
}


// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다

function test6(money:number, house:boolean, attractiveness:string): string | void{
    let score = 0
    score += money
    if(house === true){
        score += 500
    }
    if(attractiveness === "상"){
        score += 100
    }
    if(score >= 600){
        return "결혼가능"
    }
}