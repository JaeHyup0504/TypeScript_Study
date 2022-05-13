// Type Narrowing 
function day4(x : number | string){
    if(typeof x === "string"){
        return x + 1
    }
}

function day4_1(x : number | string){
    let array : number[] = [];
    array[0] = x as number;
}


function test7(x :(number | string)[]) {
    let arr :number[] = [];
    x.forEach((el) => {
        if(typeof el === "string"){
            arr.push(Number(el))
        } else {
            arr.push(el)
        }
    });
    return arr
}

function test8(x: {subject : string | string[]}) {
    if(typeof x.subject === "string"){
        return x.subject
    }else if(Array.isArray(x.subject)){
        return x.subject[x.subject.length-1]
    }else {
        return "err"
    }
}