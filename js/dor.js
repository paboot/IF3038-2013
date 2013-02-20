var ck_name = /^[A-Za-z0-9 ]{1,25}$/;

function ShowBlack()
{
	document.getElementById("black").style.visibility = "visible";
}

function HideBlack()
{
	document.getElementById("black").style.visibility = "hidden";
}

function ValidateLogin()
{
	if (document.loginform.username.value=="admin" && document.loginform.password.value=="admin")
	{
		document.loginform.action="LoggedIn.html";
	}
	else
	{
		alert("Wrong username/password!");
		document.getElementById("black").style.visibility = "visible";
	}
}

function Validate(form)
{
	var name = form.name.value;
	
	if (!ck_name.test(name)) {
		errors[errors.length] = "Your input for name is invalid .";
	}
	
	if (errors.length>0) {
		ReportErrors(errors)
		return false;
	}
	
	return true;
}

function ReportErrors(errors)
{
	var msg = "Please enter valid data...\n";
	for (var i = 0; i < errors.length; i++) {
		var numError = i + 1;
		msg += "\n" + numError + ". " + errors[i];
	}
	alert(msg);
}

function Profile()
{

}