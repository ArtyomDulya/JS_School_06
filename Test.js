function maxDiff(list) {

    for (let i = 0; i < list.length; i++) {
        if (list == [] || list.length == 1) {
            return 0;
        }
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }

    return list


}

arr = [1, 9, 5];

maxDiff(arr);