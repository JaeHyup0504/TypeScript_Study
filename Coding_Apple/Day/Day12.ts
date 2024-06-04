// Narrowing 할 수 있는 방법 더 알아보기

// null & undefined 체크하는 법
function 함수(a? :string | undefined){
    if( a && typeof a === 'string' ){
        // a가 undefined if문 실행 x
        // a가 string이면 if문 실행 o
    }
}

// in 연산자로 object 자료 narrowing
// 서로 배타적인 속성을 가져와야 narrowing이 가능
type Fish = { swim: string };
type Bird = { fly: string };

function 함수(animal: Fish | Bird) {
    if( "swim" in animal ){
        // Fish 타입인지 검사 가능
        animal.swim
    }
}

// class로부터 생산된 object라면 instanceof로 narrowing
let 날짜 = new Date()
if(날짜 instanceof Date){
    console.log(날짜)
}

// literal type이 있으면 narrowing 쉬움 
type Bus = {
    wheel : '4개',
    color : string
  }
type Bike = {
    wheel : '2개',
    color : string
  }
  
function 함수(x :Bus | Bike){
  if(x.wheel === "4개"){
    console.log('x는 Bus 타입이에요')
  }else{
      console.log('x는 Bike 타입이에요')
  }
}