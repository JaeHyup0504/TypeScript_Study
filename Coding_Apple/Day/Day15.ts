// class에서 사용가능한 protected, static 키워드

class User1 {
    // class {} 안에서 + extends 된 class {} 안에서 사용가능
    // 자식은 사용 불가능
    protected x = 10;
}

class NewUser extends User1 {
    doThis() {
        this.x = 20;
    }
}

class User2 {
    // 부모 class에 직접 부여됨
    // 자식에게 물려주지 않음
    // extends하면 잘따라옴
     static x = 10;
     y = 20; // 자식만 사용가능
}
let child = new User2();

// static은 private, protected, public 키워드와 동시 사용가능
class User3 {
     private static x = 10;
     y = 20;
}
let child2 = new User2();

class User4 {
    static skill = 'js';
    intro = User4.skill + '전문가입니다.';
}
let Lee = new User4();

User4.skill = "ts"
let Park = new User4();
console.log(Park)

// (숙제1) 다음 x,y 속성의 특징을 설명해보십시오.
class HW1 {
    private static x = 10;
    public static y = 20;
  }

//   1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 
//   x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
//   User의 자식들은 x와 y를 쓸 수 없습니다.
   
//   2. private static x는 class 내부에서만 수정가능합니다. 
  
//   3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯 
  
//   4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 
//   약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다. 
  
  
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class HW2 {
    private static x = 10;
    public static y = 20;
    static addOne(a :number) {
        HW2.x += a
    }
  }
  HW2.addOne(3) //이렇게 하면 x가 3 더해져야함
  HW2.addOne(4) //이렇게 하면 x가 4 더해져야함


// (숙제3) 이런거 어떻게 만들게요
class Square {
    static x = 30;
    static y = 30;
    static color = 'red'
}