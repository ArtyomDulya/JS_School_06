const arr = [2, 8, 3, 2, 6, 50, 200, 14];

for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        }
    }
}

console.log(arr);