var fs =require('fs');;

var readme=fs.readFileSync("readme.txt","utf8",function(err,data){
    console.log(date);
});

fs.writeFileSync("writeme.txt",readme);
fs.writeFileSync("writeme.txt","test again",function(err,data){
    console.log(data);
});

console.log(readme);
console.log(fs.readFileSync("writeme.txt","utf8"));
console.log("我擦");
