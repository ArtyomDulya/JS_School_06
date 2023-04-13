
function line() {
    console.log("=======================================================================");
}

// 1.Нарисуйте ромб

for (let i = 10; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
        process.stdout.write(" ");
    }
    for (let j = 1; j < 11 - i; j++) {
        if (j == 10) {
            process.stdout.write("0");
        } else {
            process.stdout.write(j.toString());
        }
    }
    for (let j = 9 - i; j > 0; j--) {
        process.stdout.write(j.toString());
    }
    console.log();
}
for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= 10 - i; j++) {
        process.stdout.write(j.toString());
    }
    for (let j = 9 - i; j > 0; j--) {
        process.stdout.write(j.toString());
    }
    console.log();
}

line();

// 2. Нарисуйте елочку

for (let i = 4; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
        process.stdout.write("  ");
    }
    for (let j = (4 - i) * 2; j >= 0; j--) {

        process.stdout.write("* ");
    }
    console.log();
}

line();

// 3. Нарисуйте треугольник

let array = [
    [1],
    [2, 6],
    [3, 7, 10],
    [4, 8, 11, 13],
    [5, 9, 12, 14, 15]];

array = array.join("\n");
array = array.replace(/,/g, " ");
console.log(array);

line();

// 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 

let snail = 0;
let day = 3;
let night = 2;
let end = 5;
let count = 0;

while (true) {
    snail = snail + day;
    count++;
    if (snail == end) {
        break;
    }
    snail = snail - night;
}
console.log(count);

line();

// 5. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и 
// последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в 
// правильной последовательности (открывающая и затем закрывающая). 
// Также, скобки могут быть вложенными, но тем не менее, если последовательность 
// соблюдена, то они считаются парными.

function compareBrackets(arrayBrackets) {
    let bracketBox = [];
    let openBracket = ["(", "{", "["];
    let closeBracket = [")", "}", "]"];
    let close;
    let open;

    for (let i = 0; i < arrayBrackets.length; i++) {
        open = openBracket.indexOf(arrayBrackets[i]);
        if (open !== -1) {
            bracketBox.push(open);
            continue;
        }
        close = closeBracket.indexOf(arrayBrackets[i]);
        if (close !== -1) {
            open = bracketBox.pop();
            if (close !== open) {
                return false;
            }
        }
    }
    if (bracketBox.length !== 0) {
        return false;
    } else {
        return true;
    }
}

let array1 = [")", "{", "(", "(", ")", ")", "}", "[", "]", "("];
let array2 = ["{", "(", "(", ")", ")", "}", "[", "]"];
let array3 = ["{", "(", "(", ")", ")", "}", "[", "[", ")"];

console.log(compareBrackets(array3));









