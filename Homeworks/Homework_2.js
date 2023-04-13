// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. 
// Если месяц “July” или “August”, то программа должна показать - ‘approved’, 
// если другие месяцы, то - “denied”.
let month = "July"
if(month == "July" || month == "August") {
    console.log("approved");
} else {
    console.log("denied");
}
console.log();
// 1.2 Напишите простенький калькулятор (*, /, +, -). 
// Проверьте ваш код на охват исключений для арифметических операций.

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
console.log("===========================================================");

// 1.3 Решите задачу с помощью пройденных тем:
// «Улитка ползёт вверх по стене высотой 5 метров. 
// Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
// За сколько дней она доползёт до вершины стены.»

let snail = 0;
let day = 3;
let night = 2;
let end = 5;
let count = 0;

while(true) {
    snail = snail + day;
    count++;
    if(snail == end) {
        break;
    }
    snail = snail - night;
}
console.log(count);
console.log("===========================================================");