//封装注册函数进行对txt的注册表插入读取实现注册功能

	function fun(phonevalue,shoujiyanzhengma,passwordvalue,comfirpassword,next)
	{  
		next.onclick=function()
		{
		    var i;
		    var panduan=true;
		    //第一步
		    var xhr=new XMLHttpRequest();
		    xhr.onreadystatechange=function()
		    { 
		    	alert("baichi");
		    	//第二步
				if(xhr.readyState==4)
				{	
					
					if(xhr.status>=200&&xhr<300||xhr==304)
					{
					console.log("aaa");
						var obj=JSON.parse(xhr.responseText);
						for(i=0;i<obj.length;i++)
						{
							 if(phonevalue==obj.info[i].PhoneNumber)
					          {
					          	alert("手机号码已被注册");
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
						if(panduan==true&&comfirpassword==passwordvalue)
						{
							alert("注册成功");
						}
						else
						{
							alert("两次密码不一样");
						}
				    }
			   }
			}
		    //第三步
			xhr.open("GET","nameform.txt",true);
			//第四步
			xhr.send(null);
		}
	}
