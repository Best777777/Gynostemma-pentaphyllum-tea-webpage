var nameObj;
var wordObj;

var submitButton;

var nameInfo;
var wordInfo;

window.onload=function()
{	
	nameObj=document.getElementById("name");
	wordObj=document.getElementById("word");
	
	nameInfo=document.getElementById("name_info");
	wordInfo=document.getElementById("word_info");
	
	submitButton=document.getElementById("submit");
	
	function checkName()
	{		
		var msg="";
		if(!nameObj.value) msg="用户名必须填写";
		nameInfo.innerHTML=msg;
		
		return msg=="";
	}

	function checkWord()
	{
		var msg="";
		if(!wordObj.value) msg="密码必须填写";
		wordInfo.innerHTML=msg;
		
		return msg=="";
	}
	
	submitButton.onclick=function()
	{			
		var bName=checkName();
		var bWord=checkWord();
		
		return bName&&bWord;
	}
};