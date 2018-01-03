function funs(phonenumber,passwords,denglu)
{
	var phonenumber=phoneNumber.value;
	var passwords=passwords.value;
	denglu.onclick=function()
	{
		//第一步
		var xhr =new XMLHttpRequest();
		var panduan=true;
		xhr.onreadystatechange=function()
		{
			if(xhr.readyState==4)
			{
				if(xhr.status>=200&&xhr.status<=300||xhr.status==304)
				{
					var obj=JSON.parse(xhr.responseText);
					if(obj.code==0)
				    {
				    	alert("登录成功");
				    }
				    else
				    {
				    	alert("登录失败");	
				    }
				}
			}
		}
		xhr.open("GET"," http://h6.duchengjiu.top/shop/api_user.php",true);
		xhr.send("username="+phonenumber+"&password="+passwords+"");
	}
}
