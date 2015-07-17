// Exercise 1 - output "Hello World"
// console.log("HELLO WORLD")


// Exercise 2

// var result = 0;
// for (i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }

// console.log(result);

// Exercise 3 - My First I/O
// var fs = require('fs')

// var buf = fs.readFile(process.argv[2])

// var str = buf.toString()

// console.log(str.split('\n').length - 1);

// Exercise 4

// var fs = require('fs')

// fs.readFile(process.argv[2], function callback (err, buf){
//   var str = buf.toString()

//   console.log(str.split('\n').length -1)
// });



// Exercise 5


var fs = require('fs');
var path = require('path')

var file = process.argv[2];
var extention = '.' + process.argv[3];

fs.readdir(file, function (err, list) {
 for (i = 0; i < process.argv.length; i++) {
    if (path.extname(list[i]) == extention) {
        console.log(list[i]);
    };
  };
});
