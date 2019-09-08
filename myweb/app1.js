var http=require('http');    //引用http模块

/*创建服务 */
var server=http.createServer(function(request,response){
    console.log('Reguest received');
    response.writeHead(200,{'content-Type':'text/plain'})
    response.write('This is a test!')
    response.end();
})

/*监听本机3000端口 */
server.listen(5500,'127.0.0.1');

console.log('Server started on localhost port 5500');