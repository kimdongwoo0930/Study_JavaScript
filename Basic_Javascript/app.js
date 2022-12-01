//  출력 문
console.log(54545454545);
console.log("javascript");
console.log("javascript");

// 상수 -> ( 바뀌지 않는 변수 )
const a = 5;
const b = "2";

// 바꿀수 있는 변수
let c = 5;
let d = "2";

c = 2;

// 옛날에는 const 와 let 대신 var을 썻다.
// var a = 2;

//===================== Data Type ==============================
// boolean
const First = true; // 1
const Zero = false; // 0

const next = null;
// null은 false와 다르다.
let something;

//======================= Arrays ===================================
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];
console.log(daysOfWeek[4]);

const nonsense = [1, 2, "hello", false, null, true, undefined, "niho"];
console.log(nonsense);

daysOfWeek.push("sun");
console.log(daysOfWeek);

//=========================== Objects =================================

const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
// const 안에 object를 변경하는건 가능
player.fat = false;
// 추가하는것도 가능
player.lastName = "Kim";
console.log(player);

// ============================= 함수 =========================================
function sayHello() {
  console.log("Hello");
}

sayHello();

function sayhello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayhello("nico", 10);

function plus(a, b) {
  console.log(a, b);
}
plus(8, 60);

const players = {
  name: "nico",
  sayHello: function () {
    console.log("helo");
  },
};

console.log(players.name);
players.sayHello();

// #2.8 END
