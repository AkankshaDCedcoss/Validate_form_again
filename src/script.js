function myfunction()
{
var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var dob=document.getElementById("dob").value;
var mail=document.getElementById("email").value;
var number=document.getElementById("number").value;
let text2;
checkName=/^[A-Za-z ]+$/;
let text3;
checkName2=/^[A-Za-z\s]+$/;
checkDob =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
let text1;
 checkEmail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 let text;


 if(fname=='')
 {
     let text5='**Name Can not be blank';
     document.getElementById("error6").innerHTML = text5;
 }





else if (!checkName.test(fname)) {
    document.getElementById("error6").style.display= 'none';
    text2='**Name is not valid';
    document.getElementById("error1").innerHTML = text2;
    
  }


  else if(lname=='')
  {
      let text6='**Name Can not be blank';
      document.getElementById("error7").innerHTML = text6;
  }

else if (!checkName.test(lname)) {
    document.getElementById("error7").style.display= 'none';
    text3='**Name is not valid';
    document.getElementById("error2").innerHTML = text3;
    
  }
  
  

 else if(dob=='')
  {
      let text7='**Dob Can not be blank';
      document.getElementById("error8").innerHTML = text7;
  }

  else if (!checkDob.test(dob)) {
    document.getElementById("error8").style.display= 'none';
    let text4='**Date of Birth is not valid';
    document.getElementById("error3").innerHTML = text4;
    
  }





  else if(mail=='')
  { 
      let text8='**Email Can not be blank';
      document.getElementById("error9").innerHTML = text8;
  }


 
else if (!checkEmail.test(mail)) {
    document.getElementById("error9").style.display= 'none';
    text1='**Email is not valid';
    console.log(text1);
    document.getElementById("error4").innerHTML = text1;
  }
 
  



  else if(number=='')
  { 
      let text9='**Number Can not be blank';
      document.getElementById("error10").innerHTML = text9;
  }







  else if (isNaN(number) || number.length < 10 || number.length > 10) {

    document.getElementById("error10").style.display= 'none';
    text = "**Mobile Number is not valid";
    document.getElementById("error5").innerHTML = text;
  } 


  else{
    document.getElementById("error10").style.display= 'none';
    document.getElementById("error9").style.display= 'none';
    document.getElementById("error8").style.display= 'none';
    document.getElementById("error7").style.display= 'none';
    document.getElementById("error6").style.display= 'none';
    document.getElementById("error5").style.display= 'none';
    document.getElementById("error4").style.display= 'none';
    document.getElementById("error3").style.display= 'none';
    document.getElementById("error2").style.display= 'none';
    document.getElementById("error1").style.display= 'none';
    let text10='Submit Successfully !!!';
    document.getElementById("success").innerHTML = text10;
  }
  





}