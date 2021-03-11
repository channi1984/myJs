//변수 var let const
var a = 1;
var a = 2;

let b = 1;
//let b = 2; let은 재선언 불가능
//b = 2; let은 재할당 가능

const c = 1;
//const c = 2; const는 재선언 불가능
//c = 3 const는 재할당 불가능

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//배열 끝에 요소를 제거한다.
var arr = [1, 2, 3, 4];
arr.pop();
// console.log(arr);

//배열 끝에 요소를 추가한다.
var arr = [1, 2, 3, 4];
arr.push(5);
// console.log(arr);

//배열 앞에 요소를 추가한다.
var arr = [1, 2, 3, 4];
arr.unshift(0);
// console.log(arr);

//배열 앞에 요소를 제거한다.
var arr = [1, 2, 3, 4];
arr.shift();
// console.log(arr);

//4번째 자리부터 2자리 위까지 제거한다
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
// console.log(arr);

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 1, "a", "b");
// console.log(arr);

var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.slice(3, 6);
// console.log(newArr);

//arr2에 arr1을 합친다
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr2.concat(arr1);
// console.log(arr3);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isEven = function (value) {
    return value % 2 === 0;
};
// console.log(arr.every(isEven));

var arr = [1, 2, 3];
arr.forEach(function (value) {
    // console.log(value);
})

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isEven = function (value) {
    return value % 2 === 0;
}
var newArr = arr.map(isEven);
// console.log(newArr);

var newArr2 = arr.filter(isEven);
// console.log(newArr2);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var value = arr.reduce(function (previousValue, currentValue, index) {
    return previousValue + currentValue;
});
// console.log(value);

//배열 요소 반전
var arr = [1, 2, 3, 4];
arr.reverse();
// console.log(arr);

//배열 정렬
var arr = [13, 12, 11, 10, 5, 3, 2, 1];
arr.sort();
// console.log(arr);

//배열 정렬 2
var arr = [13, 12, 11, 10, 5, 3, 2, 1];
arr.sort(function (a, b) {
    return a - b;
})
// console.log(arr)

var arr = [1, 2, 3, 4];
// console.log(arr.toString());

var arr = [1, 2, 3, 4];
// console.log(arr.valueOf());

var arr = [1, 2, 3, 4];
// console.log(arr.join());
// console.log(arr.join('+'));

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//비구조화 할당
var [a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8];
//console.log(a2);
// console.log(a2);
// console.log(rest_a);

var { a1, a2, ...rest_a } = { a1: 10, a2: 20, a3: 30, a4: 40 };
// console.log(a1);
// console.log(a2);
// console.log(rest_a);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//전개연산자
let pre = ["apply", "orange", 100];
let newData = [...pre];
// console.log(pre);
// console.log(newData);
// console.log(newData === pre);

let pre2 = [100, "hello", null];
let newData2 = [...pre, 0, 10, 4];
// console.log(newData2);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//프로미스
var timeAttack = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var ran = Math.random() * 10;
        if (ran >= 5) {
            resolve(ran);
        } else {
            reject();
        }
    }, 1000);
});

timeAttack.then(function (num) {
    // console.log(num + 'complete');
}, function () {
    // console.log('error');
})

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Apply , Call
obj1 = {
    name: 'WEB',
    getName: function () {
        return this.name;
    }
}

obj2 = {
    name: 'FREE',
    getName: function () {
        return this.name;
    }
}
var result1 = obj1.getName();
// console.log(result1)

var result2 = obj1.getName.call(obj2);
// console.log(result2)

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//커링예제
var sumCurry = function (a, b) {
    return a + b;
}

Function.prototype.curry = function () {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments);
    var that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
}

var sum15 = sumCurry.curry(15);
// console.log(sum15(5));