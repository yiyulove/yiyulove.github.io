//封装4部曲
//第一个参数 userJSON 传入JSON格式，
//第二个参数 按钮
//第三哥参数 指定是为登录还是注册  登录为login 注册为register
function server(json,cb)
{
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function()
		{
			if(xhr.readyState==4)
			{
				if(xhr.status>=200&&xhr.status<300||status==304)
				{
					var obj=JSON.parse(xhr.responseText);
					cb(obj);
				}
			}
		}
		
		xhr.open(json.leixing,json.url,true);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		console.log(json.json);
	   	var jiehe="status="+json.status+"&"+zhuanhuan(json.json);
	   	xhr.send(jiehe);
}
//封装把json格式得转换成字符串
function zhuanhuan(usJSON){
	var str="";
	for(var k in usJSON)
	{
		str+=k+"="+usJSON[k]+"&";
	}
	str=str.substring(0,str.length-1);
	return str;
}
