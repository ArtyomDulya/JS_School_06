// let string = "abcde";
// console.log(string[2]);
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr[2]);

// arr[2] = "M";
// console.log(arr);

let letters = ["a", "b", "c", "d", "e"];
console.log(letters);
letters.push("f", "s");
letters.push(1, 5);
letters.push(88);
letters.push("g");
console.log(letters);
letters.pop();
console.log(letters);
letters.unshift("Z");
console.log(letters);
let girls = ["maggi", "sasa"];
let newArray = letters.concat(girls);
console.log(newArray);