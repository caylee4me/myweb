var http=require('http');

var server=http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'application/json'});
    var myobj={
        name:"hfpp2012",
        job:"programmer",
        age:27       
    };
    response.end(JSON.stringify(myobj));
})

server.listen(3000,'localhost');

console.log('Server started on localhost port 3000');