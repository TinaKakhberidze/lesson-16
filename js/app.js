// function writeText() {
//   console.log(`write text function`);
// }

// writeText();

// function writeTextPar(text) {
//   if (typeof text === "string") console.log(text);
// }

// function writeUserInfo(name, age) {
//   console.log(`user info : user name - ${name} , user age - ${age} `);
// }
// let name1 = "gio";
// let age1 = 22;
// writeUserInfo(name1, 22);
// writeUserInfo("nini", 35);

// const writeUserInfoConst = function (name, age) {
//   console.log(`user info : user name - ${name} , user age - ${age} `);
// };

// let arrOfColors = ["blue", "yellow", "red", "black"];

// let color = "blue";

// console.log(arrOfColors.includes(color));

// const writeUserInfoArrow = (name, age) => {
//   console.log(`user info : user name - ${name} , user age - ${age} `);
//   let writeUserInfo = `user info : user name - ${name} , user age - ${age} `;
//   return writeUserInfo;
// };

// let returnedVal = writeUserInfoArrow(name1, age1);
// let returnedVal2 = writeUserInfoArrow(name1, 40);
// console.log(returnedVal, "===", returnedVal2);

// let Arr1 = [5, 9, 11, 15, 17];
// let Arr2 = [6, 7, 9, 12, 18];
// let Arr3 = [4, 8, 10, 16, 20];

// function arrSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   //   console.log(sum);
//   return sum;
// }

// let arr1Sum = arrSum(Arr1);
// let arr2Sum = arrSum(Arr2);
// console.log(arr1Sum, arr2Sum);
// arrSum(Arr3);

// array.forEach((element) => {});

//1.

function equalEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(equalEven(13), equalEven(8));

//2.
function rectangleSum(x, y) {
  return x * y;
}
console.log(rectangleSum(6, 12));

//3.
function squareArea(x) {
  return rectangleSum(x, x);
}
console.log(squareArea(9));

//4.
function randomNum() {
  return Math.floor(Math.random() * 100);
}
console.log(randomNum());

//5.
function getCrrencySymbolFromCode(code) {
  if (code === "USD") {
    return "$";
  }
  if (code === "EUR") {
    return "€";
  }
  if (code === "GEL") {
    return "ლ";
  } else {
    return "no code";
  }
}
console.log(
  getCrrencySymbolFromCode("lira"),
  getCrrencySymbolFromCode("USD"),
  getCrrencySymbolFromCode("GEL"),
  getCrrencySymbolFromCode("EUR")
);
//6.
let userInfoArr = [
  {
    name: "Tina",
    age: 25,
  },
  {
    name: "gio",
    age: 20,
  },
  {
    name: "nana",
    age: 18,
  },
  {
    name: "lia",
    age: 29,
  },
  {
    name: "tea",
    age: 32,
  },
];

function userAge(arr) {
  let userAge = userInfoArr.map((user) => {
    return userInfoArr.age;
  });
}
console.log(userInfoArr.age);
