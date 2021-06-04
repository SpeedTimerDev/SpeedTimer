let input = document.getElementById("getval");

if (localStorage.getItem("bgimg") != null) document.getElementById("getval").value = localStorage.getItem("bgimg");
if (localStorage.buttonbg != null) document.body.style.setProperty("--buttonbg", localStorage.buttonbg);
if (localStorage.buttonbg != null) document.querySelector("#colorPicker").value = localStorage.buttonbg;

window.onload = () => { input.value = "" };

document.querySelector(".bgimg button").addEventListener('click', () => {
	localStorage.setItem("bgimg", input.value);
	if (input.value == "" && confirm("Are you sure you want to Reset the Image Background?")) {
		localStorage.removeItem("bgimg");
	}
	input.value = "";
	document.querySelector(".bgimg button").innerHTML = 'Default';
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

document.querySelector("#colorPicker").addEventListener("input", () => {
	document.body.style.setProperty("--buttonbg", document.querySelector("#colorPicker").value);
	localStorage.setItem("buttonbg", document.querySelector("#colorPicker").value);
});

let clrAllSolves = document.getElementById("clrAllSolves");
clrAllSolves.addEventListener("click", function () {
	var danger = prompt("Are You Sure You Want to Delete all of Your Solves? Type 'confirm' to proceed.").toLowerCase();

	if (danger == "confirm") {
		localStorage.removeItem("buttonbg");
		localStorage.removeItem("timerSize");
		localStorage.removeItem("bgimg");
		document.location.href = "index.html";
	}
});

let clrAllSettings = document.getElementById("clrAllSettings");
clrAllSettings.addEventListener("click", function () {
	var danger = prompt("Are You Sure You Want to Delete all of Your Settings? Type 'confirm' to proceed.").toLowerCase();

	if (danger == "confirm") {
		localStorage.removeItem("speedtimer");
		document.location.href = "index.html";
	}
});

let clrAll = document.getElementById("clrAll");
clrAll.addEventListener("click", function () {
	var danger = prompt("Are You Sure You Want to Delete all of Your Data? This Includes Your Algorithms, Settings, and Times. Type 'confirm' to proceed.").toLowerCase();

	if (danger == "confirm") {
		localStorage.clear();
		document.location.href = "index.html";
	}
});