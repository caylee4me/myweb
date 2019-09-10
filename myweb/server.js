var http=require('http');
var fs=require('fs');

var i=0;

function startServer(route,handle){
    var onRequest=function(request,response){
        console.log('Request received' + request.url);
        route(handle,request.url,response);
    };
    
    var server=http.createServer(onRequest);
    
    server.listen(3001,'localhost');
    
    console.log('Server started on localhost port 3001');
}

exports.startServer=startServer;