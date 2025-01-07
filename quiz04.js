function calFun(a, b, c) {
    if(b === "+"){
        return console.log(Number(a + c));
    }else if(b === "-"){
        return console.log(Number(a - c));
    }else if(b === "*"){
        return console.log(Number(a * c));
    }else if(b ==="/"){
        return console.log(Number(a / c));
    }

}

calFun(3, "+", 6); // 결과값 9
calFun(11, "-", 6); // 결과값 5
calFun(6, "*", 3); // 결과값 18
calFun(15, "/", 3); // 결과값 5