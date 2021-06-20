let input = document.getElementById("getval");

if(localStorage.getItem("buttonbg") == null) {
	localStorage.setItem("buttonbg", "#323232");
	localStorage.setItem("algImgCol", "#dba204");
}

if (localStorage.getItem("bgimg") != null) document.getElementById("getval").value = localStorage.getItem("bgimg");
if (localStorage.buttonbg != null) document.body.style.setProperty("--buttonbg", localStorage.buttonbg);
if (localStorage.buttonbg != null) document.getElementById("colorPicker").value = localStorage.buttonbg;
if (localStorage.algImgCol != null) document.body.style.setProperty("--algImgCol", localStorage.algImgCol);
if (localStorage.algImgCol != null) document.getElementById("algImgCol").value = localStorage.algImgCol;

window.onload = () => {
	input.value = ""
};

document.querySelector(".bgimg button").addEventListener('click', () => {
	localStorage.setItem("bgimg", input.value);
	if (input.value == "" && confirm("Are you sure you want to Reset the Image Background?")) {
		localStorage.removeItem("bgimg");
	}
	document.querySelector(".bgimg button").innerHTML = 'Default';
	input.value = "";
}, true);

input.addEventListener('input', () => {
	document.querySelector(".bgimg button").innerHTML = 'Confirm';
	if (input.value == "") document.querySelector(".bgimg button").innerHTML = 'Default';
}, true);

let digitSize = document.getElementById("timerSize");
document.getElementById("timerSize").value = localStorage.digitSize != null ? parseInt(localStorage.digitSize) : 15;

digitSize.addEventListener("change", function () {
	localStorage.setItem("digitSize", document.getElementById("timerSize").value);
});

document.getElementById("colorPicker").addEventListener("input", () => {
	document.body.style.setProperty("--buttonbg", document.getElementById("colorPicker").value);
	localStorage.setItem("buttonbg", document.getElementById("colorPicker").value);
});

document.getElementById("algImgCol").addEventListener("input", function() {
	localStorage.setItem("algImgCol", document.getElementById("algImgCol").value);
	document.body.style.setProperty("--algImgCol", localStorage.algImgCol);
});

let clrAllSolves = document.getElementById("clrAllSolves");
clrAllSolves.addEventListener("click", function () {
	var danger = prompt("Are You Sure You Want to Delete all of Your Solves? Type 'confirm' to proceed.").toLowerCase();

	if (danger.toLowerCase() == "confirm") {
		localStorage.removeItem("speedtimer");
		document.location.href = "index.html";
	}
});

let clrAllSettings = document.getElementById("clrAllSettings");
clrAllSettings.addEventListener("click", function () {
	var danger = prompt("Are You Sure You Want to Reset all of Your Settings? Type 'confirm' to proceed.").toLowerCase();

	if (danger.toLowerCase() == "confirm") {
		localStorage.removeItem("buttonbg");
		localStorage.removeItem("timerSize");
		localStorage.removeItem("bgimg");
		localStorage.setItem("buttonbg", "#323232");
		localStorage.setItem("algImgCol", "#dba204");
		localStorage.removeItem("iconTop");
		document.location.href = "index.html"; 
	}
});

let clrAllAlgs = document.getElementById("clrAllAlgs");
clrAllAlgs.addEventListener("click", function () {
	var danger = prompt("Are You Sure You Want to Reset all of Your Algorithms to the Default Algs? Type 'confirm' to proceed.").toLowerCase();

	if (danger.toLowerCase() == "confirm") {
		restoreDefault();
		document.location.href = "index.html";
	}
});

let clrAll = document.getElementById("clrAll");
clrAll.addEventListener("click", function () {
	var danger = prompt("Are You Sure You Want to Delete all of Your Data? This Includes Your Algorithms, Settings, and Times. Type 'confirm' to proceed.").toLowerCase();

	if (danger.toLowerCase() == "confirm") {
		localStorage.clear();
		document.location.href = "index.html";
	}
});

if (localStorage.getItem("borderView") != null) {
	document.getElementById("borderView").checked = JSON.parse(localStorage.getItem("borderView"));
}
document.getElementById("borderView").addEventListener("change", function () {
	localStorage.setItem("borderView", JSON.stringify(document.getElementById("borderView").checked));
});

if (localStorage.getItem("iconTop") != null) {
	document.getElementById("iconsTop").checked = JSON.parse(localStorage.getItem("iconTop"));
}

document.getElementById("iconsTop").addEventListener("change", function () {
	localStorage.setItem("iconTop", JSON.stringify(document.getElementById("iconsTop").checked));
});