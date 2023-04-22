const reverseSeq = n => {
    array = [];
    for (let i = n; i > 0; i--) {
        array.push(i);
    }
    return array;
}



function calculate(num1, operation, num2) {
    if (operation != "+" || operation != "-" || operation != "*" || operation != "/") {
        if (operation == "+") {
            return num1 + num2;
        }
        if (operation == "-") {
            return num1 - num2;
        }
        if (operation == "*") {
            return num1 * num2;
        }
        if (operation == "/") {
            if (num2 == 0) {
                return null;
            }
            return num1 / num2;
        }
        return null;
    }
}



function factorial(n) {
    array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }

    return array;
}



function drawStairs(n) {

}

function createPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3).join('');
    let firstPart = numbers.slice(3, 6).join('');
    let secondPart = numbers.slice(6).join('');

    return `(${areaCode}) ${firstPart}-${secondPart}`
}



function generateRange(min, max, step) {
    array = [];
    for (let i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
            count++;
        }
    }
    return count;
}

array = [true, true, true, false];


function how_many_dalmatians(number) {
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    if (number <= 10) {
        return dogs[0];
    } else if (number <= 50) {
        return dogs[1];
    } else if (number == 101) {
        return dogs[3];
    } else {
        return dogs[2];
    }
}



reverse = function (array) {
    let result = [];
    for (let i = array.length; i > 0; i--) {
        result[i] = array[i];
    }
    return result;
}

function createPhoneNumber(numbers) {
    number <= 10 ?
        dogs[0] :
        (number <= 50 ?
            dogs[1] :
            (number == 101 ? dogs[3] :
                dogs[2]));
}

function createPhoneNumber(numbers) {
    let str = ``;
    for (let i = 0; i < numbers.length; i++) {
        str += numbers[i];
    }
    return str;
}
array = [1, 2, 3];
console.log(createPhoneNumber(array));

function countLanguages(list) {

}

function countLanguages(list) {
    let objCount = {};
    let temp = 0;
    for (let i = 0; i < list.length; i++) {
        temp = list[i].length;
        if (objCount[temp] == true) {
            objCount[temp]++
        } else {
            objCount[temp] = 1
        }
    }
    return objCount;
}

function min(arr, toReturn) {
    let value = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (value > arr[i]) {
            value = arr[i];
            index = i;
        }
    }

    if (toReturn == 'value') {
        return value;
    } else {
        return index;
    }
}
function maxDiff(list) {

    if (list.length == 0 || list.length == 1) return 0;

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }

    return list[list.length - 1] - list[0];
}

arr = [];

console.log(maxDiff(arr));

function giveMeFive(obj) {
    let arr = [];
    for (let key in obj) {
        if (key.length == 5) { arr.push(key); }
        if (obj[key].length == 5) { arr.push(obj[key]); }
    }
    return arr;
}

function numObj(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let obj = {}
        obj[s[i].toString()] = String.fromCharCode(s[i]);
        arr.push(obj);
    }
    return arr;
}

var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

function dev(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].language == "Ruby") {
            return true;
        }
    }
    return false;
}

var list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function greetDevelopers(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
    }
    return list;
}

function redarr(arr) {
    let newSet = new Set(arr);
    let newArr = Array.from(newSet);
    newArr.sort();
    let obj = {};
    for (let i = 0; i < newArr.length; i++) {
        obj[i] = newArr[i];
    }
    return obj;
}

function testResult(array) {
    let mediumSum = 0;
    for (let i = 0; i < array.length; i++) {
        mediumSum += array[i];
    }
    mediumSum = mediumSum / array.length;
    mediumSum = +mediumSum.toFixed(3);
    let grade = {
        h: 0,
        a: 0,
        l: 0
    };
    let scholl = [];
    scholl.push(mediumSum);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 9 || array[i] == 10) {
            grade.h += 1;
        }
        if (array[i] == 7 || array[i] == 8) {
            grade.a += 1;
        }
        if (array[i] < 7 && array[i] > 0) {
            grade.l += 1;
        }
    }
    scholl.push(grade);
    if (grade.a == 0 && grade.l == 0) {
        scholl.push('They did well');
    }
    return scholl;
}

function boredom(staff) {
    let count = 0;

    for (let key in staff) {
        if (staff[key] == "accounts") count += 1;
        if (staff[key] == "finance") count += 2;
        if (staff[key] == "canteen") count += 10;
        if (staff[key] == "regulation") count += 3;
        if (staff[key] == "trading") count += 6;
        if (staff[key] == "change") count += 6;
        if (staff[key] == "IS") count += 8;
        if (staff[key] == "retail") count += 5;
        if (staff[key] == "cleaning") count += 4;
        if (staff[key] == "pissing about") count += 25;
    }

    if (count <= 80) return 'kill me now';
    if (count < 100 && count > 80) return 'i can handle this';
    if (count >= 100) return 'party time!!';
}
