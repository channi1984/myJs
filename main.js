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
//[1,2,3]

//배열 끝에 요소를 추가한다.
var arr = [1, 2, 3, 4];
arr.push(5);
//[1,2,3,4,5]

//배열 앞에 요소를 추가한다.
var arr = [1, 2, 3, 4];
arr.unshift(0);
//[0,1,2,3,4]

//배열 앞에 요소를 제거한다.
var arr = [1, 2, 3, 4];
arr.shift();
// [2,3,4]

//4번째 자리부터 2자리 위까지 제거한다
var arr = [1, 2, 3, 4, 5, 6, 7];
var arr2 = arr.splice(3, 2);
// [4,5]

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 1, "a", "b");
//[1,2,'a','b',4,5,6,7]

var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.slice(3, 6);
//4,5,6,

//arr2에 arr1을 합친다
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr2.concat(arr1);
//[4,5,6,1,2,3]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isEven = function (value) {
    return value % 2 === 0;
};
//false

var arr = [1, 2, 3];
arr.forEach(function (value) {
    //1
    //2
    //3
})

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isEven = function (value) {
    return value % 2 === 0;
}
var newArr = arr.map(isEven);
//false, true, false, true, false, true, false, true, false, true

var newArr2 = arr.filter(isEven);
//2,4,5,6,8,10

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var value = arr.reduce(function (previousValue, currentValue, index) {
    return previousValue + currentValue;
});
//55

//배열 요소 반전
var arr = [1, 2, 3, 4];
arr.reverse();
[4, 3, 2, 1]

//배열 정렬
var arr = [13, 12, 11, 10, 5, 3, 2, 1];
arr.sort();
// [1, 10, 11, 12, 13,  2,  3,  5]

//배열 정렬 2
var arr = [13, 12, 11, 10, 5, 3, 2, 1];
arr.sort(function (a, b) {
    return a - b;
})
// [1,  2,  3,  5, 10, 11, 12, 13]

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//비구조화 할당
var [a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a2);
// 2
// console.log(rest_a);
// [ 3, 4, 5, 6, 7, 8 ]

var { a1, a2, ...rest_a } = { a1: 10, a2: 20, a3: 30, a4: 40 };
// console.log(a1);
// 10
// console.log(a2);
// 20
// console.log(rest_a);
// { a3: 30, a4: 40 }

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//전개연산자
let pre = ["apply", "orange", 100];
let newData = [...pre];
// console.log(pre);
// [ 'apply', 'orange', 100 ]
// console.log(newData);
// [ 'apply', 'orange', 100 ]
// console.log(newData === pre)
// False

let pre2 = [100, "hello", null];
let newData2 = [...pre2, 0, 10, 4];
// console.log(newData2);
// 100, 'hello', null, 0, 10, 4 ]

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

//배열 얕은 복사
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.slice();

// console.log(arr1);
// console.log(arr2);

arr2[0] = 0;

// console.log(arr1);
// [ 1, 2, 3, 4 ]
// console.log(arr2);
// [ 0, 2, 3, 4 ]

//객체 얕은 복사 (Object.assign)
var person = {
    age: 10,
    name: {
        first: 'channi',
        last: 'son',
    }
}

var copied = Object.assign({}, person)

person.age = 1000
person.name.first = 'dongchan'

// console.log(copied.age);
// 10
//객체 안의 객체까지 완전한 복사가 이루어 지지 않는다, 같이 변경된걸 볼 수 있다.
//console.log(copied.name.first);
// ongchan
//console.log(person === copied)
// false

//객체 얕은 복사 (ES6 전개연산자)
var original = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    }
}

var copied = { ...original };

original.a = 1000
original.c.d = 3000

//console.log(copied.a)
// 1
//마찬가지로 객체 안의 객체까지 복사가 이루어 지지 않고 참조해 버린다.
// console.log(copied.c.d)
// 3000

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
//console.log(sum15(5));
//20

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//this

//단독으로 쓴 this

var x = this;
//console.log(x);
//Window

//함수 안에서 쓴 this
function myFunction() {
    return this;
}

//console.log(myFunction());
//Window


//메서드 안에서 쓴 this
var person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        //console.log(this.firstName + this.lastName);
    },
};

person.fullName();
//John Doe

//이벤트 안에서 쓴 this
//var btn = document.querySelector('#btn');
//btn.addEventListener('click',function(){
    //console.log(this);
//});
//#btn

//생성자 안에서 쓴 this

function Person(name) {
    this.name = name;
}

var kim = new Person('kim');

//console.log(kim.name);
//kim

//명시적 바인딩을 한 this
function whoisThis() {
    //console.log(this);
}

whoisThis();
//window

var obj = {
    x : 123
}

whoisThis.call(obj);
//{x:123}