// const a = 5;
// const b = 2;
// let myName = "oreumi"; //string

// //let - const : const(Constant(상수)=값이 바뀔 수 없음.)
// //let으로 myName을 설정하면 후에 업데이트 가능,
// //const로 설정하면 업데이트 안되고 에러가 뜸.
// //always = const, sometimes = let, never = var

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "chaoreum";

// console.log("your new name is " + myName);

// Boolean //true or False
// const amIFat = null; //null means "NOTHING in there". exist has a value, but the value is "NOTHING"
// let something; // exist doesn't have any value.
// console.log(something, amIFat);

// array(배열)

// string->array
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Get Item from Array
// console.log(daysOfWeek);

// Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// const playerName = "oreumi";
// const playerPoints = 12312;
// const playerHandsome = true;
// const playerFat = "little";

// player[0]=blabluabluabla
// const player = ["oreumi", 12131, true, "little"];

// const player = {
//   name: "oreumi",
//   points: 123,
//   handsome: true,
//   fat: true,
// };
// // const = object

// console.log(player);
// console.log(player.name);
// // = console.log(player["name"]);

// player.fat = false;
// // player = false -> In this case, PLAYER is a boolean const -> error

// player.lastName = "potato";
// // If you want, you can do to add at anytime.
// console.log(player);

// player.points = player.points + 15;
// console.log(player.points);
// // 27m/7h 30m
// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + ", and I am ");
// }

// sayHello("oreumi", 21);
// sayHello("Akine", 19);
// function plus(firstNumber, SecondNumber) {
//   console.log(firstNumber, SecondNumber);
// }

// plus(8, 60);

// function divide(a, b) {
//   console.log(a / b);
// }
// plus(60, 5);
// divide(123, 124);
// function sayHello() {}

// const player = {
//   name: "oreumi",
//   sayHello: function (otherPersonsName) {
//     console.log("hello! " + otherPersonsName + ", Nice to meet you");
//   },
// };

// player.sayHello("Akine");
// // 1h 13m 20s/7h 30m

// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   div: function (a, b) {
//     console.log(a / b);
//   },
//   powerOf: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.add(2, 5);
// calculator.minus(3, 6);
// calculator.div(4, 2);
// calculator.powerOf(2, 5);
// // a+b, a-b, a/b, a**b
// // homework

/////////////////////////////////////////////////////////////////////////////

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   div: function (a, b) {
//     return a / b;
//   },
//   powerOf: function (a, b) {
//     return a ** b;
//   },
// };

// const plusResult = calculator.add(2, 5);
// const minusResult = calculator.minus(plusResult, 6);
// const divideResult = calculator.div(4, minusResult);
// const powerOfResult = calculator.powerOf(divideResult, plusResult);

// const age = 21;
// function calculateKRAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKRAge(age);

// console.log(krAge);

/////////////////////////////////////////////////////////////////////////////

// // // // // // 1h 29m /7h 30m // // // // // //

// 위의 내용에서 return -> console.log() 로 작성시 console 에서 'plusResult'를 했을때 호출이 안됨.

// const age = parseInt(prompt("How old are you?"));
// don't use anymore "prompt", the reason why can't use css

// console.log(isNaN(age));
// NaN = Not a Number, age is a Number, so the result is false
// boolean is "true" or "false"
// if (isNaN(age) || age < 0) {
//   console.log("Please write a REAL POSITIVE Number.");
//   /// condition === true
// } else if (age < 18) {
//   console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink.");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise first.");
// } else if (age > 80) {
//   console.log("Do something whatever you want.");
// } // condition === false
//   if (age > 20) {
//     console.log("What do you want for drink?");
//   } else {
//     console.log("How about grow up more babe? :)");
//   }
// }
// !== "is this not something?", === "is this something?"
// // // // // // 2h 17m 20s /7h 30m // // // // // //

// document.title = "Hi JS";

// const title = document.getElementById("title");

// title.innerText = "Got you";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("Hello");

// console.log(hellos);

// const title = document.querySelector(".Hello h1"); // #Hello h1 --------
// // const title = document.getElementsById("Hello");
// title.innerText = "Heelloo";
// // both are same, the difference is query use CSS selector (and don't know it's really exist),
// // getElementsById is I already know the Id is really exist
// //          Can use like ("div h1") (".Hello h1"); is CSS selector.
// // querySelector does searching element using CSS notation. ONLY FIRST ONE.
// // If you want to check all of things, Use querySelectorAll
// // document.getElementsByTagName()
// // tag means anchor, div, section, button
// console.log(title);

// // // // // // 2h 48m 40s /7h 30m // // // // // //

// const title = document.querySelector("div.Hello:first-child h1");

// function handleTitleClick() {
//   title.style.color = "blue";
// }
// console.dir(title);
// // if you want to look inside, use "console.dir"
// // property = 글자 앞에 "on"이라고 적혀있으면 listener가 작동 가능함
// // on--- 중 ---만 사용
// title.style.color = "red";

// function handleMouseEnter() {
//   title.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   title.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "pink";
// }

// function handleWindowCopy() {
//   alert("copier!");
// }

// function handleWindowOffline() {
//   alert("SOS no WiFi");
// }

// function handleWindowOnline() {
//   alert("ALL GOOD");
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// // // // // // // 3h 1m 18s /7h 30m // // // // // //

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// const h1 = document.querySelector("div.Hello:first-child h1");

// function handleTitleClick() {
//   h1.classList.toggle("clicked");
// }
// // toggle: find "clicked" in classList (in h1), if it already
// //         exist, switch clicked like a lock screen and unlock
// //         screen if it doesn't exist, add "clicked"

// h1.addEventListener("click", handleTitleClick);

///////////////////////////////////////////////

//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

///////////////////////////////////////////////
// {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// // // // // // // 3h 44m 18s /7h 30m // // // // // //
