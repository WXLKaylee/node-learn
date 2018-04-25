var fs = require("fs");

/* 堵塞代码 读文件同步进行
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束！");
*/
// 不堵塞代码 读文件利用回调函数实现异步执行
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");
