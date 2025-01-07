let uninitialized;
console.log(uninitialized); // 결과값 < undigined : 선언만 해두고 값을 할당하지않아서 >


let apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable 
//const는 상수로 값이 변하면 안되고, 재할당이 안된다.
//오류가 안나려면 var 나 let을 써야한다.


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
//배열의 0번째 : 3 , 배열의 1번째 : 8, 배열의 2번째 : 13, 배열의3번째 : 19


let mySchedule = "";
console.log(typeof mySchedule)
console.log(mySchedule || false); // < mySchedule 빈값 : false || false = false >
console.log(!!mySchedule); // < !!false / !!는 불리언 형태ㅀ 겅제 변환해준다. 
// !false > true
// !true  > false
