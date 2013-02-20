function disable(form) {
	if ((validateUsername(form)&&validatePassword(form)&&confirmPassword(form)&&validateNama(form)&&validateEmail(form)&&Checkfiles()))
		document.getElementById("submit").disabled=false;
	else
		document.getElementById("submit").disabled=true;
}

function validateUsername(form){
var validate=/\w{5}/ 
if (!validate.test(form.username.value)){
	document.getElementById("errorMsgUsername").innerHTML = "*Username minimal 5 karakter";
	return false;}
else
	document.getElementById("errorMsgUsername").innerHTML = "";
	return true;
}

function validatePassword(form){
var validate2=/\w{8}/ 
if (!validate2.test(form.password.value)){
	document.getElementById('errorMsgPassword').innerHTML = "*Password minimal 8 karakter";
	return false;}
else
if((form.password.value==form.username.value)||(form.password.value==form.email.value)){
	document.getElementById('errorMsgPassword').innerHTML = "*Password tidak boleh sama dengan username atau email";
	return false;}
else
	document.getElementById('errorMsgPassword').innerHTML = "";
	return true;
}


function confirmPassword(form){
if (form.password.value!=form.cnfpassword.value){
	document.getElementById('errorMsgCnfPassword').innerHTML = "*Password tidak cocok";
	return false;}
else
	document.getElementById('errorMsgCnfPassword').innerHTML = "";
	return true;
}

function validateNama(form){
var validate3=/^((\b[a-zA-Z]{1,40}\b)\s*){2,}$/
if (!validate3.test(form.nama.value)){
	document.getElementById("errorMsgNama").innerHTML = "*Nama minimal dua kata";
	return false;}
else
	document.getElementById("errorMsgNama").innerHTML = "";
	return true;
}

function validateEmail(form){
var validate4 = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/
if (!validate4.test(form.email.value)){ // format email salah
	document.getElementById('errorMsgEmail').innerHTML = "*Format Email salah";
	return false;}
else
if(form.email.value == form.password.value){
	document.getElementById('errorMsgEmail').innerHTML = "*Email tidak boleh sama dengan password";
	return false;}
else
	document.getElementById('errorMsgEmail').innerHTML = "";
	return true;
}

function validateTanggal(form){
var validate5= /((19|20)\\d\\d)-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])/
if (!validate5.test(form.tanggal.value)){
	document.getElementById("errorMsgTanggal").innerHTML = "*Tanggal tidak sesuai format";
	return false;}
else
	document.getElementById("errorMsgTanggal").innerHTML = "";
	return true;
}

function Checkfiles()
{
	var fup = document.getElementById("filename");
	var fileName = fup.value;
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
	if(ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG")
	{
	document.getElementById("errorMsgAvatar").innerHTML = "";
	return true;
	} 
	else
	{
	document.getElementById("errorMsgAvatar").innerHTML = "*Format harus .jpg atau .jpeg";
	return false;
	}
}

