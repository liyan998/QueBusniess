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
		}
		var statusCode = (xmlhttp.status / 100);
		
		console.log("Code:"+statusCode);
		switch(statusCode)
		{
		case 5:
			console.log("Server Error!");
			break;
		}
	};
	
	xmlhttp.open("GET", urlstr, true);
	
	xmlhttp.send();
	
}