function funs(phonenumber,password,denglu)
{
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
					for(var i=0;i<obj.length;i++)
					{
						if(obj.info[i].PhoneNumber!=phonenumber||obj.info[i].PassWord!=password)
						{
							alert("此手机号已被注册");
							panduan=false;
							return;
						}
						 if(phonevalue.length!=11)
						     {
						       alert("请输入11位手机号码");
						       panduan=false;
						       return;
						      }
						      var phone="/^[1][3,4,5,6,7,8][0-9]{9}$/"
						 if(phone.test(phonevalue))
						    {
						    alert("手机号码中不能有数字以外的其它字符");
						     panduan=false;
						     return;
						    }
					}
					if(panduan==true)
					{
						alert("登录成功");
					}
				}
			}
		}
		xhr.open("GET","nameform.txt",true);
		xhr.send();
	}
}
