var num=10;
//console.log(typeof num);
//var num= '10.234343';
//num.toString(3);
//console.log(num.toString(3));
console.log(typeof num);
console.log(parseInt(num));
console.log(typeof parseInt(num));
console.log(parseFloat(num).toFixed(1));
console.log(typeof parseFloat(num));


//Math.round,Math.ceil,Math.random,Math.floor
console.log(Math.round(10.4));
console.log(Math.round(10.5));
console.log(Math.round(10.9));

console.log(Math.floor(10.99));//0-9
console.log(Math.ceil(10.990));//1-10
var round=Math.ceil(Math.random()*10);//number will come from 1- 10
console.log(round);

var round=Math.floor(Math.random()*10);//number will come from 0- 9
console.log(round);
