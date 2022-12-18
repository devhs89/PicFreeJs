let emailPassword = new Map();
$(document).ready(function () {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  let isFalse = false;
  $("#clientName").focus(); //Focus on Name

  $("#submit").click(function () {
    isFalse = false;

    //Name validations
    if ($("#clientName").val() === "") {
      alert("Enter the Name");
    }
    //Email validation
    if ($("#clientEmail").val() === "") {
      alert("Enter the Email");
    }
    if (!$("#clientEmail").val().match(emailPattern)) {
      alert("Must be a valid Email Id");
    }
    if ($("#clientPassword").val() === "") {
      alert("Enter the Password");
    }
    if ($("#clientRepeatPass").val() === "") {
      alert("ReEnter the Password");
    }
    if ($("#clientRepeatPass").val() === $("#clientPassword").val()) {
      emailPassword.set($("#clientEmail").val(), $("#clientPassword").val());
      alert("Registered Successfully");
    } else {
      alert("Password doesnt Match");
    }
  });
  $("login").click(function () {
    if (emailPassword.get($("#emailaddr").val) === $("#passWord").val()) {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  });
});
