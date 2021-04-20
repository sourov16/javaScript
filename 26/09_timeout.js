function doSomething() {
    console.log(3333);
}
console.log(1111);
console.log(2222);
setTimeout(doSomething, 1000);
// doSomething();
console.log(4444);

// setTimeout(function () {
//     console.log('hi!');
// }, 10000);


setInterval(() => {
    console.log("doing it again..");
}, 2000);



// ctrl+C stop running code



