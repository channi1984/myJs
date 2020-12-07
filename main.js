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

console.log(sum15(5));
//20


//배열 메소드
var arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);
//[1,2,3]

var arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
//[1,2,3,4,5]

var arr = [1, 2, 3, 4];
arr.unshift(0);
console.log(arr);
//[0,1,2,3,4]

var arr = [1, 2, 3, 4];
arr.shift();
console.log(arr);
//[2,3,4]

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);
//[1,2,3,6,7]

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 1, "a", "b");
console.log(arr);
//[1,2,"a","b",4,5,6,7]

var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.slice(3, 6);
console.log(newArr);
//[4,5,6]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr2.concat(arr1);
console.log(arr3);
//[4,5,6,1,2,3]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isEven = function (value) {
    return value % 2 === 0;
};
console.log(arr.every(isEven));
//false

var arr = [1, 2, 3];
arr.forEach(function (value) {
    console.log(value);
})
//1
//2
//3

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isEven = function (value) {
    return value % 2 === 0;
}
var newArr = arr.map(isEven);
console.log(newArr);
//[false, true, false, true, false, true, false, true, false, true]
var newArr2 = arr.filter(isEven);
console.log(newArr2);
//[2, 4, 6, 8, 10]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var value = arr.reduce(function (previousValue, currentValue, index) {
    return previousValue + currentValue;
});
console.log(value);
//55

var arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);
//[4, 3, 2, 1]

var arr = [13, 12, 11, 10, 5, 3, 2, 1];
arr.sort();
console.log(arr);
//[1, 10, 11, 12, 13, 2, 3, 5]

var arr = [13, 12, 11, 10, 5, 3, 2, 1];
arr.sort(function (a, b) {
    return a - b;
})
console.log(arr)
//[1, 2, 3, 5, 10, 11, 12, 13]

var arr = [1, 2, 3, 4];
console.log(arr.toString());
//1,2,3,4

var arr = [1, 2, 3, 4];
console.log(arr.valueOf());
//[1, 2, 3, 4]

var arr = [1, 2, 3, 4];
console.log(arr.join());
//1,2,3,4
console.log(arr.join('+'));
//1+2+3+4


//비구조화 할당
var [a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a1);
//1
console.log(a2);
//2
console.log(rest_a);
//[3, 4, 5, 6, 7, 8, 9]

var { a1, a2, ...rest_a } = { a1: 10, a2: 20, a3: 30, a4: 40 };
console.log(a1);
//10
console.log(a2);
//20
console.log(rest_a);
//{a3: 30, a4: 40}

let pre = ["apply", "orange", 100];
let newData = [...pre];
console.log(pre);
//["apply", "orange", 100]
console.log(newData);
//["apply", "orange", 100]
console.log(newData === pre);
//false

let pre2 = [100, "hello", null];
let newData2 = [0, 10, ...pre, 4];
console.log(newData2);
//[0, 10, "apply", "orange", 100, 4]

//기존 ajax 통신코드
// function getDate(callbackFunc) {
//     $.get('url주소/products/1', function (response) {
//         callbackFunc(response);
//     });
// }

// getData(function (tableData) {
//     console.log(tableData);
// })

//프로미스를 통한 ajax 통신
// function getData() {
//     return new Promise(function (resolve, reject) {
//         $.get('url주소/product/1', function (response) {
//             if (response) {
//                 resolve(response);
//             }
//             reject(new Error("Request is failed"));
//         });
//     });
// }

// getData().then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.error(err);
// })

const myArray = [1, 2, 3, 4];
console.log(myArray);
//[1, 2, 3, 4]

const myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
});
console.log(myArrayTimesTwo);
//[2, 4, 6, 8]

const songs = [
    { id: 1, name: "Curl of the Burl", artist: 'Mastodon' },
    { id: 1, name: "Oblivion", artist: 'Mastodon' },
    { id: 1, name: "Flying Whales", artist: 'Gojira' },
    { id: 1, name: "L'Enfant Sauvage", artist: 'Gojira' },
]

var allSongNames = songs.map(function (song) {
    return song.name.toLowerCase();
})

console.log(allSongNames);
//["curl of the burl", "oblivion", "flying whales", "l'enfant sauvage"]

const myArray2 = [1, 2, 3, 4];
console.log(myArray2);
//[1, 2, 3, 4]

const myEvenArray = myArray2.filter((value, index, array) => {
    return value % 2 === 0;
});
console.log(myEvenArray);
//[2, 4]

const myArray3 = [1, 2, 3, 4];

const sum = myArray3.reduce((acc, currValue, currIndex, array) => {
    return acc + currValue;
}, 0);

const avg = sum / myArray3.length;

console.log(avg);
//2.5


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
console.log(result1)
//WEB

var result2 = obj1.getName.call(obj2);
console.log(result2)
//FREE