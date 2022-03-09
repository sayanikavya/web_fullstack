var dice=Math.ceil(Math.random()*6);

if(dice==1){
    console.log('num is 1');
}else if(dice==2){
    console.log('num is 2');
}else if(dice==3){
    console.log('num is 3');
}else if(dice==4){
    console.log('num 4 matches');

}else if(dice==5){
    console.log('num 5 matches');
}
else {
    console.log('num 6 matches');
}

var expect =prompt('any number from 1 to 6');
if(expect==dice){
    alert('matches');
    console.log('num matches');
}else{
    alert('not matched');
 console.log('not matches');
}

