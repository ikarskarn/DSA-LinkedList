function countInstances(str) {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        const currentStr = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === currentStr) {
                count += 1;
            }
        }
        console.log(currentStr + ": " + count);
    }
}

function main() {
    console.log(counting(3));
}

function counting(num) {
    //base case
    if (num === 0) {
        return "All Done!";
    } else {
        return `number is ${num} \n` + counting(num - 1);
    }
}

main();
