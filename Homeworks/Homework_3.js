let num1 = 5;
let num2 = 5;
let operator = "+";
switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 == 0) {
            console.log("error");
        }
        console.log(num1 / num2);
        break;
}

console.log("=======================================================================");

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("=======================================================================");

// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).



let arr = ["(", ")", "(", ")", ")"];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") {
        count++;
    }
    if (arr[i] == ")") {
        count--;
    }
}
if (count == 0) {
    console.log("true");
} else {
    console.log("false");
}

console.log("=======================================================================");

// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

let string = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
console.log(string.replace(/br/g, ""));

console.log("=======================================================================");

// Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая 
//  будет шифровать и затем дешифровщик к нему

function crypt(text) {
    text = text.split("");

    for (let i = 0; i < text.length; i++) {
        text[i] += "wzzz";
    }

    let crypt = text.join("");

    return crypt;
}

function decription(crypt) {
    let decrypt = crypt.replace(/wzzz/g, "");
    return decrypt;
}

let message = "Hi bro, learn JS, don't be lazy";
let secretMessage = crypt(message);
console.log(secretMessage);

console.log(decription(secretMessage));

console.log("=======================================================================");

// Домашнее задание от Татьяны Волк

for (let i = 4; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
        process.stdout.write("  ");
    }
    for (let j = (4 - i) * 2; j >= 0; j--) {

        process.stdout.write("* ");
    }
    console.log();
}

console.log("=======================================================================");
count = 0;
for (let i = 12; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
        process.stdout.write("  ");
    }
    for (let j = (12 - i) * 2; j >= 0; j--) {

        process.stdout.write("* ")
    }
    console.log();
}
let con = 0;
for (let i = 11; i >= 0; i--) {
    for (let j = 12 - i; j >= 0; j--) {
        process.stdout.write("  ");
    }
    for(let j = i * 2; j >=0 ; j--) {
        process.stdout.write("* ");
    }
    console.log();
}


