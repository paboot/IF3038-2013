function CheckVideo()
{
	var fup = document.getElementById("attach");
	var fileName = fup.value;
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
	if(ext == "MP4" || ext == "mp4" || ext == "OGG" || ext == "ogg" || ext == "WebM")
		return true;
	else
		return false;
}

function CheckVideo()
{
	var fup = document.getElementById("attach");
	var fileName = fup.value;
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
	if(ext == "MP4" || ext == "mp4" || ext == "OGG" || ext == "ogg" || ext == "WebM")
		return true;
	else
		return false;
}

function CheckImage()
{
	var fup = document.getElementById("attach");
	var fileName = fup.value;
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
	if(ext == "JPG" || ext == "JPEG" || ext == "GIF" || ext == "PNG" || ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png")
		return true;
	else
		return false;
}

function Show()
{
	var fup = document.getElementById("attach");
	var fileName = fup.value;
	if (CheckImage())
	{
		document.getElementById('show').innerHTML = "<img src='"+fileName+"' width='320' height='240'></img>";
	}
	if (CheckVideo())
	{
		document.getElementById('show').innerHTML = "<video width='320' height='240' controls><source src='"+fileName+"' type='video/mp4'><source src='"+fileName+"' type='video/webm'><source src='"+fileName+"' type='video/ogg'></video>";
	}
}

function Edit()
{
	document.getElementById('deadline').innerHTML = "<input type='text' name='deadline1' id='deadline1'></input>";
	document.getElementById('asignee').innerHTML = "<input type='text' name='asignee1' id='asignee1' autocomplete='on'></input>";
	document.getElementById('tag').innerHTML = "<input type='text' name='tag1' id='tag1'></input>";
	document.getElementById('savechange').disabled=false;
	document.getElementById('taskbtn').disabled=true;
}

function Done()
{
	var deadline = document.getElementById('deadline1');
	var asignee = document.getElementById('asignee1');
	var tag = document.getElementById('tag1');
	document.getElementById('deadline').innerHTML = ""+deadline.value+"";
	document.getElementById('asignee').innerHTML = ""+asignee.value+"";
	document.getElementById('tag').innerHTML = ""+tag.value+"";
	document.getElementById('savechange').disabled=true;
	document.getElementById('taskbtn').disabled=false;
}