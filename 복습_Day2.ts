function 함수(x? : number) :void {

}

function 함수(x : number | string) :void {

}

function 함수(x? : string){
    if(x){
        console.log( '안녕하세요' + x )
    }else {
        console.log("이름이 없습니다")
    }
}

function 함수(x : string | number) :number {
        return x.toString().length
}
