function calc(num1, num2, callback) {
  return callback(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

console.log(calc(2, 9, sum));

setTimeout(() => {
  console.log("hola JS");
}, 2000);

function gretting(name) {
  console.log(`hola ${name}`);
}

setTimeout(gretting, 300, "oscar");
