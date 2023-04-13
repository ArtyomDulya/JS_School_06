// Напишите функцию с калькулятором (используйте предыдущий код), в которую, в 
// качестве параметров, передаются три переменные, две - числовые и 
// третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.

function calculator(num1, num2, operator) {
    if(operator == "+") {
        return num1 + num2;
    }
    if(operator == "-") {
        return num1 - num2;
    }
    if(operator == "*") {
        return num1 * num2;
    }
    if(operator == "/") {
        if(num2 == 0) {
            return "error";
        }
        return num1 / num2;
    }  
}

console.log(calculator(5, 5, "+"));

// Напишите функцию, которая создает и выводит в 
// консоль кастомное приветствие с именем, которое вы передаете в функцию.

function toGreet(name) {
    console.log(`Приветствую тебя ${name}`);
}

toGreet("Артем");