var strpattern=/^[a-zA-Z]{4,}$/;
var numberpattern=/^[0-9]+$/;
var passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
var emailpattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

var username,password,email,contact,city,Male,Female,checkbox,sign;
username=document.getElementById('username');
password=document.getElementById('password');
email=document.getElementById('email');
contact=document.getElementById('contact');
city=document.querySelector('.city');
Male=document.querySelector('#Male');
Female=document.querySelector('#Female');
checkbox=document.querySelector('.checkbox');
sign=document.querySelector('.sign');
sign.addEventListener('click',function(){
  // alert(username.value);
   //console.log(strpattern.test(username.value));
   if(!strpattern.test(username.value)){
     alert("please enter value");
     document.querySelector('.fa-user').style.color="red";
     }else if(!passwordpattern.test(password.value)){
     document.querySelector('.fa-user').style.color="rgb(143, 143, 248)";
     document.querySelector('.fa-lock').style.color="red";
     }else if(!emailpattern.test(email.value)){
        document.querySelector('.fa-lock').style.color="rgb(143, 143, 248)";
        document.querySelector('.fa-envelope').style.color="red";
     }else if(!numberpattern.test(contact.value)){
        document.querySelector('.fa-envelope').style.color="rgb(143, 143, 248)";
        document.querySelector('.fa-address-book').style.color="red";
     }else if(city.value=='none'){
        document.querySelector('.fa-address-book').style.color="rgb(143, 143, 248)";
        //alert('please select a  city');
        document.querySelector('.fa-earth-asia').style.color="red";
        document.querySelector('.error').style.display='block';
     }else if(!Male.checked && !Female.checked){
      document.querySelector('.fa-earth-asia').style.color="rgb(143, 143, 248)";
      document.querySelector('.error').style.display='none';
      document.querySelector('.error1').style.display='block';
     }else if(!checkbox.checked){
      document.querySelector('.error1').style.display='none';
      alert('agree terms and conditions');
     // document.querySelector('.para').style.color="red";
     }else{
      //document.querySelector('.para').style.color="rgb(56, 56, 100)";
      const user = {
         name:username.value,
         password:password.value,
         email:email.value,
         contact:contact.value,
         city:city.value,
          gender:gender.value,
         agree:checkbox.checked,
      };
      console.log(user);
     }
});