// 1. Задача про Палиндром. 
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково 
// читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, 
// а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, 
// если строка является палиндромом, и false — если нет. При этом нужно учитывать 
// пробелы и знаки препинания.

function findPallindrome(str) {
    let result = "";
    let backResult = "";
    str = str.replace(/[^a-za-яё]/gi, '').toLowerCase();

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    for (let i = str.length - 1; i >= 0; i--) {
        backResult += str[i];
    }

    return result == backResult;
}
console.log(findPallindrome(" Anna!!)"))

// 2. Если вы решали задачку со скобками без методов, то сейчас решите с методами.


// Задачи с Codewars:


function squareSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= numbers[i];
        sum += numbers[i];
    }
    return sum;
}

function sum(numbers) {
    let sum = 0;
    if (numbers == null) {
        return 0;
    }

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function threeInOne(arr) {

    let sum = 0;
    let array = [];

    for (let i = 0; i <= 3; i++) {
        array = arr.slice();
    }
    return array;
}
arr = [1, 2, 2, 5, 5, 5, 9, 9, 9];
console.log(threeInOne(arr));
