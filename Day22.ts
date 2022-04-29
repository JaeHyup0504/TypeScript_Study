// implements 키워드
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻

interface CarType {
    model : string,
    price : number
  }
  
  class Cars implements CarType {
    model : string;
    price : number = 1000;
    constructor(a :string){
      this.model = a
    }
  }
  let 붕붕이 = new Cars('morning');