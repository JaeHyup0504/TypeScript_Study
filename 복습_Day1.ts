let 복습_이름 :string = 'Lee'
let 복습_나이 :number = 27
let 복습_졸리니 :boolean = true
let 복습_회원들 : string[] = ["Lee", "Park"]
let 복습_회원들정보 : {name: string, age: number} = {name: "Lee", age: 27}
let 복습_project : {member : string[], days : number, started : boolean}= {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

let 복습_회원 : number | string = 27
let 복습_회원1 : (number | string) []
let 복습_오브젝트 : { a : string | number }
let 복습_any :any
let 복습_unknown :unknown
let 복습_age : string | number
let 복습_학교 : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}