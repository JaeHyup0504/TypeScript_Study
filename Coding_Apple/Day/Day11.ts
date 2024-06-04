// 함수 rest 파라미터, destructuring 할 때 타입지정

// 점 3개 붙이면 rest parameter
// 다른 파라미터 있으면 맨 뒤에만 사용가능
function 함수(...a :number[]) {
    console.log(a) // array 타입으로 지정
}
함수(1,4,5,6,3,2)

let arr = [1,2,3]
let arr2 = [4,5]
let arr3 = [...arr, ...arr2] // 괄호 벗겨주세요 문법

let [변수1, 변수2] = ["안녕", 100] // destructuring 개념설명
let a = { student : true, age : 20} 

//  함수 파라미터 작명할 때 destructuring 쓰면 object 넣기 쉬어짐
let person = { student :  true, age : 20 }
function 함수({student, age} : { student : boolean, age : number }) {
    console.log(student, age)
}
함수 ({ student : true, age : 20})

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 
function MaxNum(...a : number[]) {
    let result = 0
    a.forEach((el) => {
        if(el > result ){
            result = el
        }
    })
    return result
}

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
function 함수({user, comment, admin} : {user : string, comment : number[], admin : boolean}) {
    console.log(user, comment, admin)
}

함수( { user : 'kim', comment : [3,5,4], admin : false } )


// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
type UserType = (number | string | boolean)[]

function 함수([a,b,c] : UserType){
    console.log(a,b,c)
}

함수( [40, 'wine', false] )