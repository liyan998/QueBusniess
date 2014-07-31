/**
 * 
 */

var shopStat = {};

function flushShopState(obj) {
	var shoponoffbutton = document.getElementById("shoponOffbutten");
	var activeAcer = document.getElementById("openshop");

	switch (obj.state) {
	case 0:// closed;

		shoponoffbutton.value = "打开";
		activeAcer.style.display = "none";

		break;
	case 1:// open
		shoponoffbutton.value = "关闭";
		activeAcer.style.display = "inline";
		setOnline(obj);
		break;
	}

	setShopLabel(obj);
	setOnlineLabel(obj);
}

function setOnline(obj) {
	var onlinetime = document.getElementById("onlineTime");
	var onlinebutton = document.getElementById("shoponlinebutton");

	onlinebutton.value = obj.online ? "OffLine" : "Online";
	onlinetime.style.display = obj.online ? "block" : "none";
}

function setShopLabel(obj) {
	var shopLab = document.getElementById("shoplab");

	shopLab.innerHTML = obj.state == 0 ? "关闭" : "营业中";
}

function setOnlineLabel(obj) {
	// console.log(shopStat.online);
	var onlineLab = document.getElementById("onlinelab");

	onlineLab.innerHTML = obj.online ? "在线" : "离线";
}

// ----------------------------------------

function testajax(content)
{
	console.log(content);
	var obj = eval(content);
	console.log(obj.length);
	
	var temp = 	'<li class="queList">'
				+'	<div style="float: left;">'
				+'		<img src="yingwenmoban/resources/images/icons/pencil.png"	class="chananlimg" />'
				+'	</div>'
				+'	<div style="float: left; padding: 3px 0px;">'
				+		'%name%    ' + '正在等待：23'							
				+'		<input style="float: left; width: 98px; height: 31px;" type="button" value="下一位" />'
				+'	</div>'
				+'	<div style="width: 100%; height: 50px; float: left;">'
				+		'<div class="queElement1"></div>'						
				+'	</div>'
				+'</li>';
	var result = "";
	for(var i = 0 ;i < obj.length;i++)
	{
		result += temp.replace("%name%", obj[i].name);
	}
	
	document.getElementById("busniesslist").innerHTML = result;
	
	//console.log(result);
}

