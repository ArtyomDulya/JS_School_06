// function multyply(a, b) {
//     return a * b;
// }

// function divine(a, b) {
//     return a / b;
// }

// function showResult(a, b, callback) {
//     if (typeof callback === "function") {
//         console.log(callback(a, b));
//     }
//     else return console.log("Your numbers are " + a + " and " + b)
// }

// showResult(3, 4, (a, b) => a * b);
// showResult(21, 3, multyply);
// showResult(21, 3);

// function outer(x, y) {
//     let tmp = 3;

//     function inner(y) {
//         console.log(x + y + (++tmp));
//     }
//     inner(y);
// }

// outer(2, 3);

// let Person = function (pName) {
//     let name = pName;

//     this.getName = function () {
//         return name;
//     }
// }

// let person = new Person("Natan");
// console.log(person.getName());

// function calc2(a, b, sign) {
//     if (sign == "*") {
//         return multyply(a, b);
//     }
//     else if (sign == "/") {
//         return divine(a, b);
//     }
// }
// console.log(calc2(7, 7, "*"));

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("everything is ok");
//     }, 3000);
// })

// promise1.then((value) => {
//     console.log(value);
// });

// function someFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello_1000");
//         }, 1000);
//     });
// }
// someFunction().then(console.log).catch(console.error);

// function someFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello");
//         }, 5000);
//     });
// }

// someFunction2()
// .then(response => {
//     console.log(response)
//     return response + "!"
// })
// .then(console.log)
// .catch(console.error)
// .finally(() => {console.error("this is an error")})

// const hello = async () => {
//     return "Hello";
// }

// const result = hello();
// console.log(result);

// async function asyncHi() {
//     return console.log("hi");
// }
// asyncHi();

// function resolveAfter2Second() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("resolved_2sec");
//         }, 2000);
//     })
// }

// async function asyncCall() {
//     console.log("calling");
//     const result = await resolveAfter2Second();
//     console.log(result);
// }

// asyncCall();

let str = "hello";
let ms = 100;

function delay(ms, str) {
    return new Promise(resolve => setTimeout(() => {
        resolve(str);
    }, ms))
}

let pr = delay(10, "hello");
console.log(pr);

async function message() {
    let a = await delay(100, "Игорь");
    let b = await delay(3000, "Егор");
    let c = await delay(5000, "Денис");

    console.log(a);
    console.log(b);
    console.log(c);
}

message();

async function getUser() {
    try {
        const response = await fetch(url);
        const data = await response.json();
    } catch(e) {
        console.error(e);
    }
}



