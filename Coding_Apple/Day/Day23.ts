// object index signatures

interface StringOnly {
    [key : string] : string,
}

let user23 : StringOnly = {
    name : "Lee",
    age : "20",
    location : "lisan",
}

interface StringOnly1 {
    age : number
    [key : string] : string | number,
}

let user23_1 : StringOnly1 = {
    name : "Lee",
    age : 20,
    location : "lisan",
}

interface StringOnly2 {
    [key : string] : string | number,
}

let user23_2 : StringOnly2 = {
    0 : "Lee",
    1 : 20,
    2 : "lisan",
}

// Recursive Index Signatures
interface MyType {
    'font-size' : MyType | number
}

let css : MyType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

// (숙제1) 다음 자료의 타입을 지정해보십시오. 

interface test1 {
    [key : string] : string | number,
}

let testObj : test1 = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
  }

  // (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오. 
interface test2 {
    'font-size' : number,
    [key : string] : test2 | number,
}

  let testObj2 : test2 = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }