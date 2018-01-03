function fun4(phoneNumber,passwords,comfirpassword,Next)
{ 
  
    Next.onclick=function()
    {  
    	var username=phoneNumber.value;
        var pw=passwords.value; 
        var comfirpasswords=comfirpassword.value;
        console.log("usrename:"+username); 
        console.log("pssword:"+pw);
        
	  	var xhr=new XMLHttpRequest();
	  	xhr.onreadystatechange=function()
	  	{
	  		if(xhr.readyState==4)
	  		{
	  			if(xhr.status>=200&&xhr.status<300||xhr.status==403)
	  			{
	  				var obj=JSON.parse(xhr.responseText);
	  				if(passwords==comfirpasswords)
	  				{
		  				if(obj.code==0)
		  				{
		  					alert("注册成功");
		  				}
	  				}
	  				else
	  				{
	  				  alert("前后密码不一致");
	  
	  				}
	  			}
	  	    }	
	  	}  
	  	xhr.open("POST","http://h6.duchengjiu.top/shop/api_user.php",true);
	  	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  	  	xhr.send("username="+username+"&password="+pw+"&status=register");
			
			
  	}
}
