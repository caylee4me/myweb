// import { EventEmitter } from 'events';
// import {util} from 'util';

var EventEmitter=require('events');
var util=require('util');

var myEmitter=new EventEmitter();

myEmitter.on('someEvent',function(message){
    console.log(message);
});

myEmitter.emit('someEvent','the event was emitted');  //触发事件