function sum(num1, num2) {
    const result = num1 + num2;
    if (result > 20) {
        console.log("Happy :)");
    } else {
        console.log("Sad ):");
    }
    return result;
}
const output = sum(10, 11);
console.log(output);