/**
 * 
 */

var URL_ALLBUSNIESS = 'http://localhost:8084/QueBusniess/AllBusniess';
var URL_ADDUSER = 'http://localhost:8084/QueBusniess/AddUser';

var shopStat = {
	STATE_CLOSE : 0,
	STATE_OPEN : 1,
	state : 0,
	online : false,
	name : "XXX",
	allBus : [],
};
/**
 * state
 * 
 * @param obj
 */
function flushShopState(obj) {
	var shoponoffbutton = document.getElementById("shoponOffbutten");
	var activeAcer = document.getElementById("openshop");

	switch (obj.state) {
	case shopStat.STATE_CLOSE:// closed;

		shoponoffbutton.value = "打开";
		activeAcer.style.display = "none";

		break;
	case shopStat.STATE_OPEN:// open

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

function flushBusniessList() {

	var obj = shopStat.allBus;

	var temp = '<li class="queList">'
			+ '	<div style="float: left;">'
			+ '		<img src="yingwenmoban/resources/images/icons/pencil.png"	class="chananlimg" />'
			+ '	</div>'
			+ '	<div style="float: left; padding: 3px 0px;">'
			+ '%name%    '
			+ '正在等待：%quelength%'
			+ '		<input style="float: left; width: 98px; height: 31px;" type="button" value="下一位" />'
			+ '	</div>'
			+ '	<div style="width: 100%; height: 50px; float: left;">'
			//+ '		<div class="queElement1"></div>' 
			+ '%que%' + '	</div>'
			+ '</li>';
	var tempqueElement = '<div class="queElement1">%userid%</div>';
	
	
	var result = "";
	var selectobj = document.getElementById('swbusniess');
	
	selectobj.options.length = 0;

	for (var i = 0; i < obj.length; i++) {
		result += temp.replace("%name%", obj[i].name);

		var optionobj = new Option(obj[i].name, obj[i].id);
		selectobj.add(optionobj);

		//
		var queelement = "";
		for (var j = 0; j < obj[i].allUser.length; j++) {
			queelement += tempqueElement.replace('%userid%', obj[i].allUser[j].id)+"\n";
		}
		result = result.replace('%que%', queelement);
		
		result = result.replace('%quelength%', obj[i].allUser.length);
	}
	document.getElementById("busniesslist").innerHTML = result;
}
// ----------------------------------------

function allBussniess(content) {
	console.log(content);
	if (content == -1) {
		return;
	}

	var obj = eval("(" + content + ")");

	shopStat.allBus.length = 0;

	shopStat.allBus = obj;

	flushBusniessList();
}

function addUser(content) {
	console.log(content);
	if (content == -1) {
		return;
	}

	var obj = eval("(" + content + ")");
	$("#parm2").text(obj.id);
	$("#dialog-recvMessage").dialog({
		modal : true,
		autoOpen : false,
		buttons : {
			"关闭" : function() {
				// document.getElementById("parm2").innerHTML = "";
				$(this).dialog("close");
				ajaxUrl(URL_ALLBUSNIESS , allBussniess);
			}
		}
	}).dialog("open");
}
