//   注意：
//运行NODE后端：在node中输入 node js文件路径
//查看当前目录 ls
//记得每次修改完ctrl +s 保存，否则运行时还是修改前的代码。

//立即输出，定时结束
// console.log('hello word');
// setTimeout(function () {
//     console.log('3 sec have passed')
// }, 3000);

// //定时输出，判断条件结束
// var time = 0;
// var timer = setInterval(() => {
//     time += 2;
//     console.log(time + 'sec passed')
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);

// //显示当前文件目录
// //console.log(__dirname);
// console.log(__filename);

// //函数
// function sayhi(say) {
//     console.log('hi');
//     say();
// };

// //回调函数：用函数调用函数
// //示例
// var say = function () {
//     console.log('hi');
// };

// //执行
// sayhi(say);

var stuff = require('./count');
// console.log(stuff.counter('123'));
// console.log(stuff.adder(1,2));
// console.log(stuff.pi);

console.log(stuff.adder);

console.log(__filename);