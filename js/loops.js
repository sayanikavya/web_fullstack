var userRecords='';
for(var i=0;i<users.length;i++)
{
 console.log(users[i].name,users[i].phone);
 userRecords+= '<li>'+ users[i].name;
 userRecords+= '<p>'+ users[i].name + '</p></li>';
}
console.log(userRecords);
for (var i in users){
    console.log(users[i].name);
}
for (var i of users){
    console.log(i.name);
}
var i=0;
while(i<users.length){
    console.log(users[i].id);
    i++;
}

/*
for(var i=0;i<10;i++){
    if((users[i].address.zipcode==="75034")&&(users[i].address.city==='frisco')){
        console.log(users[i]);
    }else{
        console.log('users not in zipcode');
    }
}

 */