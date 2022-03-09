//'use strict';

//console.log(abc);
abc=10;
var abc;
//console.log(abc);


//demo();
function demo(){
console.log('demo...!');
}


var demo1=function() {
  console.log('demo function...!');
};
//demo1();



var demo2=()=>{
    console.log('demo function2:');
};
//demo2();

var result= (function (){
    var obj ={};
 console.log('life');
 return obj;
})();

var global= '10';
function testfn() {
     var  local="12";
    console.log(local);
    console.log(global);
}
testfn();
//console.log(local);

function add(a=4,b=4) {
    console.log(a+b);
}
//add();
//add(2,3);

function returnval(a,b) {
  if(a*b==45){
      return {result:45};
    }
    else{
        return{result: 'not matched'};
    }
   // return a*b;
   
}

add(returnval(5,5),5);
console.log(returnval(5,5));
