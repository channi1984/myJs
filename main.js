// //배열 메소드
// var arr = [1,2,3,4];
// arr.pop();
// console.log(arr);

// var arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);

// var arr = [1,2,3,4];
// arr.unshift(0);
// console.log(arr);

// var arr = [1,2,3,4];
// arr.shift();
// console.log(arr);

// var arr = [1,2,3,4,5,6,7];
// arr.splice(3,2);
// console.log(arr);

// var arr = [1,2,3,4,5,6,7];
// arr.splice(2,1,"a","b");
// console.log(arr);

// var arr = [1,2,3,4,5,6,7];
// var newArr = arr.slice(3,6);
// console.log(newArr);

// var arr1 = [1,2,3];
// var arr2 = [4,5,6];
// var arr3 = arr2.concat(arr1);
// console.log(arr3);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var isEven = function (value) {
// 	return value % 2 === 0;
// };
// console.log(arr.every(isEven));

// var arr = [1,2,3];
// arr.forEach(function(value) {
// 	console.log(value);
// })

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var isEven = function (value) {
// 	return value % 2 === 0;
// }
// var newArr = arr.map(isEven);
// var newArr2 = arr.filter(isEven);
// console.log(newArr);
// console.log(newArr2);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var value = arr.reduce(function (previousValue, currentValue, index) {
// 	return previousValue + currentValue;
// });
// console.log(value);

// var arr = [1, 2, 3, 4];
// arr.reverse();
// console.log(arr);

// var arr = [13, 12, 11, 10, 5, 3, 2, 1];
// arr.sort();
// console.log(arr);

// var arr = [13, 12, 11, 10, 5, 3, 2, 1];
// arr.sort(function(a,b) {
// 	return a-b;
// })
// console.log(arr)

// var arr = [1, 2, 3, 4];
// console.log(arr.toString());

// var arr = [1,2,3,4];
// console.log(arr.valueOf());

// var arr = [1, 2, 3, 4];
// console.log(arr.join());
// console.log(arr.join('+'));


// //기존 ajax 통신코드
// function getDate(callbackFunc) {
//     $.get('url주소/products/1', function (response) {
//         callbackFunc(response);
//     });
// }

// getData(function (tableData) {
//     console.log(tableData);
// })

// //프로미스를 통한 ajax 통신
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

// const myArray = [1,2,3,4];

// const myArrayTimesTwo = myArray.map((value, index, array) => {
//     return value * 2;
// });

// console.log(myArray);
// console.log(myArrayTimesTwo);

// const songs = [
//     { id: 1, name: "Curl of the Burl", artist: 'Mastodon' },
//     { id: 1, name: "Oblivion", artist: 'Mastodon' },
//     { id: 1, name: "Flying Whales", artist: 'Gojira' },
//     { id: 1, name: "L'Enfant Sauvage", artist: 'Gojira' },
// ]

// var allSongNames = songs.map(function(song){
//     return song.name.toLowerCase();
// })

// console.log(allSongNames);

// const myArray = [1,2,3,4];

// const myEvenArray = myArray.filter((value, index, array) => {
//     return value % 2 === 0;
// });

// console.log(myArray);
// console.log(myEvenArray);

// const myArray = [1,2,3,4];

// const sum =myArray.reduce((acc, currValue, currIndex, array) => {
//     return acc + currValue;
// }, 0);

// const avg = sum / myArray.length;

// console.log(avg);


// //Apply , Call
// obj1 = {
//     name: 'WEB',
//     getName : function() {
//         return this.name;
//     }
// }

// obj2 = {
//     name: 'FREE',
//     getName: function() {
//         return this.name;
//     }
// }
// obj1.getName();
// obj1.getName.call(obj2)
