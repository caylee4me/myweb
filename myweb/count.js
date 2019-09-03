var counter=function(arr){
    return "There are " + arr.length + " elements in the array"
};

var adder=function(a,b){
    return 'this sum of the two numbers is ${a+b}';
}

var pi=3.14;

/*一种写法*/
// module.exports.counter=counter;  //暴露counter对象
// module.exports.adder=adder;      //暴露adder对象
// module.exports.pi=pi;            //暴露pi对象

/*另一种写法*/
module.exports={
    counter:counter,
    adder:adder,
    pi:pi
}

// /*再一种写法 (似乎有问题)*/
// export var counter=counter;
// export var adder=adder;
// export var pi=pi;
