$(document).ready(function(){
  jQuery.validator.addMethod("emailExt", function(value, element, param) {
  return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
},'Your E-mail is wrong');
$(function() {
  $("form[name='registration']").validate({
      
      rules:{
      firstname: "required",
      email:{ 
          required: true,
          emailExt: true
      },
      password:{
        required:true,
        minlength:5
      },
      mobile:{
        required:true,
        maxlength:10,
        minlength:10,
        digits:true
      },
      country:{
          required:true,
      },
      password1:{
          required:true,
          equalTo:"#password"
      },
      textarea:{
          required:true,
      },
    },

    // Specify validation error messages

    messages:{
      firstname:"Please enter your name",
      password:{
        required:"Please enter your password",
        minlength:"Your password must be at least 5 characters long"
      },
      password1:{
        required:"Please enter your confirm   password",
        equalTo:"Password & confirm password doesn't match."
      },
      mobile:{
        required:"Please enter your mobile number",
        maxlength:"Please enter your valid mobile number",
      },  
      email:{
        required:"Please enter your email address",
        emailExt:"Please enter your valid email address",
      },
      country:"Please select your country",
      textarea:"Please fill your description"
    },
    
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form){
      document.getElementById('genderError').innerHTML = '';
      let fullname = document.getElementById("firstname").value;
      let email = document.getElementById("email").value;
      let mobile = document.getElementById("mobile").value;
      let country = document.getElementById("country").value;
      let comment = document.getElementById("comment").value;
      let File = document.getElementById("File").value;

  
      document.getElementById("outputname").innerText = fullname;
      console.log(outputname);
      document.getElementById("outputemail").innerText = email;
      console.log(outputemail);
      document.getElementById("outputmnumber").innerText = mobile;
      console.log(outputmnumber);
      document.getElementById("outputcountry").innerText = country;
      console.log(output1);
      console.log(outputcountry);
      document.getElementById("outputdescription").innerText = comment;
      console.log(outputdescription);
      document.getElementById("outputfile").innerText = File;
      console.log(outputfile);
      var form = document.getElementById("myForm");
      function handleForm(event){ event.preventDefault();} 
      form.addEventListener('submit',handleForm); 
      form.submit();
    }
  });
});
});
var loadFile = function(event) {
var output = document.getElementById('output');
output.src = URL.createObjectURL(event.target.files[0]);
output.onload = function() {
  URL.revokeObjectURL(output.src) // free memory
}
};
$(document).ready(function(){
  $('#txtInput').on("cut copy paste",function(e) {
     e.preventDefault();
  });
});

function changeText() {
  var userInputgender = document.getElementsByName('gender');
  for (var i = 0, length = userInputgender.length; i < length; i++) {
    if (userInputgender[i].checked) {
        document.getElementById('output1').innerHTML = userInputgender[i].value;
        break;
    }else{
        document.getElementById('genderError').innerHTML = 'Please select your gender'
    }
  }
  return false;
}




document.querySelector(".xyx").addEventListener("keypress", function (evt) {
if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
{
    evt.preventDefault();
}
});

function emptyGenderError(){
  document.getElementById('genderError').innerHTML = '';
}