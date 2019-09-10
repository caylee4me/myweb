var Server=require('./server');
var router=require('./router');
var handler=require('./handler');

var handle={};
handle["/"]=handler.home;
handle["/home"]=handler.home;
handle["/review"]=handler.review;

Server.startServer(router.route,handle);
