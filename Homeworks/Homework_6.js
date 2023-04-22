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
// console.log(findPallindrome(" Anna!!)"))

// 2. Если вы решали задачку со скобками без методов, то сейчас решите с методами.

function isValid(s) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const st = [];
    for (let i = 0; i < s.length; i++) {
        if (isClosedBracket(s[i])) {
            if (brackets[s[i]] !== st.pop()) return false;
        } else {
            st.push(s[i]);
        }
    }
    return st.length === 0;
}
function isClosedBracket(ch) {
    return [')', ']', '}'].indexOf(ch) > -1;
}


let bracket1 = [")", "{", "(", "(", ")", ")", "}", "[", "]", "("];
let bracket2 = ["{", "(", "(", ")", ")", "}", "[", "]"];
let bracket3 = ["{", "(", "(", ")", ")", "}", "[", "[", ")"];






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

    let result = [];
    for (let i = 0; i < arr.length; i += 3) {
        const sum = (arr[i] || 0) + (arr[i + 1] || 0) + (arr[i + 2] || 0);
        result.push(sum);
    }
    return result;
}

arr = [1, 2, 2, 5, 5, 5, 9, 9, 9];

function stringy(size) {
    let result = "";
    for (let i = 0; i < size.length; i++) {
        if (i % 2 == 0) {
            result += "1";
        } else {
            result += "0";
        }
    }
    return result;
}

console.log(stringy("hi"));


function nthFibo(n) {
    if (n <= 1) {
        return n;
      } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
    }
