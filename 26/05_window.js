function add(num1, num2) {
    var sum = num1 + num2;
    function double(num) {
        return num * 2;
    }
    var total = double(sum)
    return total;
}
var result = add(13, 14);
console.log(result);


