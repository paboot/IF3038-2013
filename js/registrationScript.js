
function disable(form) {
	if ((validateUsername(form)&&validatePassword(form)&&confirmPassword(form)&&validateNama(form)))
		document.getElementById("submit").disabled=false;
	else
		document.getElementById("submit").disabled=true;
}

function validateUsername(form){
var validate=/\w{5}/ 
if (!validate.test(form.username.value))
	document.getElementById("errorMsgUsername").innerHTML = "*Username minimal 5 karakter";
else
	document.getElementById("errorMsgUsername").innerHTML = "";
	return true;
}

function validatePassword(form){
var validate2=/\w{8}/ 
if (!validate2.test(form.password.value))
	document.getElementById('errorMsgPassword').innerHTML = "*Password minimal 8 karakter";
else
if((form.password.value==form.username.value)||(form.password.value==form.email.value))
	document.getElementById('errorMsgPassword').innerHTML = "*Password tidak boleh sama dengan username atau email";
else
	document.getElementById('errorMsgPassword').innerHTML = "";
	return true;
}


function confirmPassword(form){
if (form.password.value!=form.cnfpassword.value)
	document.getElementById('errorMsgCnfPassword').innerHTML = "*Password tidak cocok";
else
	document.getElementById('errorMsgCnfPassword').innerHTML = "";
	return true;
}

function validateNama(form){
var validate3 = /^((\b[a-zA-Z]{1,40}\b)\s*){2,}$/;
if (!validate3.test(form.nama.value))
	document.getElementById("errorMsgNama").innerHTML = "*Nama minimal dua kata";
else
	document.getElementById("errorMsgNama").innerHTML = "";
	return true;
}