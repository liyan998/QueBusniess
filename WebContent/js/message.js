/**
 * @author yanlg
 */

//====================================================================
//MESSAGE 
//====================================================================
/** 监视登录ACK消息 */
var MSG_SERVER_MONLOGINACK = 0x10000003;

// ------------------------------------------------------------------

/** 监视系统登录 */
var MSG_MON_LOGIN = 0x20000001;
/** 删除客户端 */
var MSG_MON_DELETECLIENT = 0X20000002;

// --------------------------------------------------------------------

var msgLogin = MSG_MON_LOGIN + '#{"userid":"yanlg" , "pwd":"123456"}';

// ====================================================================
// SOCKET
// ====================================================================

var server = {
	STATE_CONNECED : 1,
	STATE_CLOSED : 2,
	state : 0,
	// ------------------------------------------------
	// ip :"127.0.0.1",
	ip : "192.168.3.36",
	port : 5444,
	// ------------------------------------------------
	ws : 0
}

var setState = function(s) {

	switch (s) {
	case this.STATE_CONNECED:
		setHtmlInfo("serverstate", "已连接");
		break;
	case this.STATE_CLOSED:
		setHtmlInfo("serverstate", "未连接");
		// setHtmlInfo("connNum", "");
		document.getElementById('online').style.display = "none";
		break;
	}
	this.state = s;
}

var connToServer = function() {
	window.WebSocket = window.WebSocket || window.MozWebSocket;
	if (!window.WebSocket) {
		alert("WebSocket not supported by this browser");
		return false;
	}

	this.ws = new WebSocket("ws://" + this.ip + ":" + this.port + "/montion");

	this.ws.onopen = function(evt) {
		// alert("connect sucessed!" + evt);
		server.setState(server.STATE_CONNECED);
		server.writeData(msgLogin);
	}

	this.ws.onmessage = onMessage;
	this.ws.onclose = onClosed;
	this.ws.onerror = onError;
}

function onError(evt) {
	console.log(evt);
}
var writeData = function(strdata) {
	if (server.state != server.STATE_CONNECED) {
		console.log(server.state + "只能在连接状态下才能发送数据");
		return;
	}
	this.ws.send(strdata);
}

function onMessage(evt) {
	// alert("Msg:" + evt.data);
	console.log(evt.data);
	messageCenter(evt.data);
	// ajaxUrl('http://127.0.0.1/blue/index.html', handler);
}

function onClosed(evt) {
	server.setState(server.STATE_CLOSED);
	// alert("Connection is closed...");
}

server.setState = setState;
server.connToServer = connToServer;
server.writeData = writeData;

server.connToServer();
// ====================================================================
// AJAX
// ====================================================================
function ajaxUrl(urlstr, handler) {
	var xmlhttp;
	if (urlstr == "") {
		alert("url_str 不能为空");
		return;
	}

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			handler(xmlhttp.responseText);
		} else {
			handler(-1);
		}
	}
	
	xmlhttp.open("GET", urlstr, true);
	try
	{		
		xmlhttp.send();
	}catch(e)
	{
		alert(e);
	}
}



// ===================================================================
function setHtmlInfo(id, content) {
	document.getElementById(id).innerHTML = content;
}

// ====================================================================
// MESSAGE CENTER
// ====================================================================

function messageCenter(msg) {
	var allmsg = msg.split("#");
	if (allmsg.length != 2) {
		return;
	}
	switch (parseInt(allmsg[0])) {
	case MSG_SERVER_MONLOGINACK:
		loginAck(allmsg[1]);
		break;
	}
}

function loginAck(par) {
	var obj = eval(par);
	setHtmlInfo("connNum", getConnectStr(obj));
}
