var http=require('http');
var fs=require('fs');

var server=http.createServer(function(require,response){
    console.log('request received');
    response.writeHead(200,{'content-Type':'text/html'});
    var loginForm= fs.createReadStream('../myweb/view/login.html','utf8');
    loginForm.pipe(response);
});

server.listen(3001,'localhost');

console.log('Server started on localhost port 3001');