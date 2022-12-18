let emailPassword = new Map();
$(document).ready(function () {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	var trueorfalse = false;
	$("#clientName").focus(); //Focus on Name

	$("#submit").click(function () {
		trueorfalse = false;

		//Name validations
		if ($("#clientName").val() == "") {
			alert("Enter the Name");
		}
		//Email validation
		if ($("#clientEmail").val() == "") {
			alert("Enter the Email");
		}
		if (!$("#clientEmail").val().match(emailPattern)) {
			alert("Must be a valid Email Id");
		}
        if ($("#clientPassword").val() == "") {
			alert("Enter the Password");
		}
        if ($("#clientRepeatPass").val() == "") {
			alert("ReEnter the Password");
		}
        if($("#clientRepeatPass").val()===$("#clientPassword").val()){
            emailPassword.set($("#clientEmail").val(),$("#clientPassword").val());
            alert("Registred Succesfully")
        }
        else{
            alert("Password doesnt Match");
        }
	})
    $("login").click(function (){
        if(emailPassword.get($("#emailaddr").val)===$("#passWord").val()){
            alert("Login Sucessful");
        }
        else{
            alert("Invalid Email or Password");
        }
    })
});
