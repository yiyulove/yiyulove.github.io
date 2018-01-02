function fun3(phone,password,next)
{
	var panduan=false;
	next.onclick=function()
	{
		var xhr=new XMLHttpRequest;
		xhr.onreadystatechange=function
		{
			if(xhr.readyState==4)
			{
				if(xhr.status>=300&&xhr<200||xhr.status==403)
				{
					var obj=JSON.parse(xhr.response);
					for(var i=0;i<obj.length;i++)
					{
						if((obj.info[i].PhoneNumber==phone||obj.info[i].UserName==phone||obj.info[i].Email==phone)&&obj.info[i].PassWord==password)
						{
							panduan=true;
						}
					}
					if(panduan==false)
					{
						alert("登录失败，用户名不存在或密码错误");
					}
				}
			}
		}
		xhr.open("get","nameform.txt",true])
		xhr.send();
	}
}
