// Exercise 1 - output "Hello World"
// console.log("HELLO WORLD")


// Exercise 2

var result = 0;
for (i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}

console.log(result);