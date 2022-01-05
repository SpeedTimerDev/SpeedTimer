if (innerWidth > 1000) {
	document.querySelector(".digits").style.fontSize = localStorage.digitSize != null ? localStorage.digitSize + "vh" : "15vh";
} else {
	var temp = parseInt(localStorage.getItem("digitSize")) + 4;
	document.querySelector(".digits").style.fontSize = localStorage.digitSize != null ? temp.toString() + "vw" : "15vw";
}

if (localStorage.buttonbg == null) localStorage.setItem("buttonbg", "#323232");
if (localStorage.algImgCol == null) localStorage.setItem("algImgCol", "#dba204");
if (localStorage.buttonbg != null) document.body.style.setProperty("--buttonbg", localStorage.buttonbg);
if (localStorage.algImgCol != null) document.body.style.setProperty("--algImgCol", localStorage.algImgCol);
if (localStorage.wcaInspec == null) localStorage.setItem("wcaInspec", JSON.stringify(false));
if (localStorage.d3vis == null) localStorage.setItem("d3vis", JSON.stringify(false));
if (localStorage.stackmat == null) localStorage.setItem("stackmat", JSON.stringify(false));

if (localStorage.getItem("borderView") != null) {
	var ticked = JSON.parse(localStorage.getItem("borderView"));

	if (!ticked) {
		document.body.style.setProperty("--border", "0px");
	} else {
		document.body.style.setProperty("--border", "1px");
	}
} else {
	localStorage.setItem("borderView", true);
	document.body.style.setProperty("--border", "1px");
}

if (localStorage.getItem("iconTop") != null) {
	if (innerWidth > 1000) {
		var ticked = JSON.parse(localStorage.getItem("iconTop"));

		if (ticked) {
			document.querySelector(".iconWrapper").id = "iconRow";
		} else {
			document.querySelector(".iconWrapper").id = "iconColumn";
		}
	} else {
		document.querySelector(".iconWrapper").id = "iconMobile";
	}
} else {
	localStorage.setItem("iconTop", true);
	document.querySelector(".iconWrapper").id = "iconRow";
}

if(JSON.parse(localStorage.stackmat)) {
	document.getElementById("overlay3").style.display = "block";
	document.querySelector(".stackmatCheck").style.display = "block";

	document.querySelector(".btnYesStack").onclick = function() {
		stackmat.init();
		
		document.title = "SpeedTimer - Using Stackmat";

		document.getElementById("overlay3").style.display = "none";
		document.querySelector(".stackmatCheck").style.display = "none";
	}

	document.querySelector(".btnNoStack").onclick = function() {
		localStorage.setItem("stackmat", JSON.stringify(false));

		localStorage.setItem("inputType", "timer");

		document.getElementById("overlay3").style.display = "none";
		document.querySelector(".stackmatCheck").style.display = "none";
	}
} else {
	localStorage.setItem("inputType", "timer");
	localStorage.setItem("stackmat", JSON.stringify(false));
}