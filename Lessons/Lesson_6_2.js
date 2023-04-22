let count = 0;

function recursion() {

    count++;
    console.log(count);
    if (count > 50) return;
    recursion();
}

recursion();
