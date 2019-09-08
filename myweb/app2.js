var http=require('http');

var onServer=function(require,response){
    console.log('Request received');
    response.writeHead(200,{'conten-Type':'text/plain'});
    response.write("Try to loading ../myweb/view/login.html");
    response.end();
}

// var server=http.createServer(onServer);

// server.listen(5001,'127.0.0.1');
// console.log('Server started on localhost port 5001');

var server=http.createServer(onServer);

server.listen(3000,'127.0.0.1');
console.log('Server started on localhost port 3000');