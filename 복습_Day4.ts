interface 네모 { 
    color : string,
    width : number
}

let 복습4: 네모 = { color : 'red', width : 100}

// interface 중복선언 가능
interface student {
    name : string
}

interface teacher extends student {
    age : number
}

// Type 중복선언 불가능
type Animals2 = {
    name : string
}

type Hours = {
    age : number
} & Animal2

interface 복습4 {
    brand : string,
    serialNumber : number,
    model : string[]
}

let 상품4 : 복습4 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface 복습4_1 {
    product : string,
    price : number
}

let 장바구니4 : 복습4_1[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

interface 복습4_2 extends 복습4_1 {
    card : boolean
}

interface 복습4_3 {
    plus : (a: number, b: number) => number,
    minus : (a:number, b: number) => number
}

let result4 : 복습4_3 = {
    plus(a,b){
        return a + b
    },
    minus(a,b) {
        return a- b
    }
}