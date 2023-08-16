// alert("SpeedTimer is moving to speedtimer01.netlify.app on 5/6/23. please export your data if you would like it to be saved, and if you have any thoughts, please email contactspeedtimer@gmail.com - sorry for any inconvenience and for the repeated showing of this message");

// Cubing.js Scrambles

import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";

// Visualiser

let n;
const createCube = (size, className) => {
	cube = [];
	n = size;
	const scale = 50;
	const xOff = 50;
	const yOff = 100;
	// document.querySelector(".scrambleShow").innerHTML = "";
	document.querySelector(".solveInfoPreview").innerHTML = "";
	document.querySelector("." + className + "").innerHTML = '<div class="up"></div><div class="middle"><div class="left"></div><div class="front"></div><div class="right"></div><div class="back"></div></div><div class="down"></div>';

	document.body.style.setProperty("--n", n);

	for (let i = 0; i < 6; i++) {
		let temp2 = [];
		for (let j = 0; j < n; j++) {
			let temp = [];
			for (let k = 0; k < n; k++) {
				if (i == 0) document.querySelector(".up").innerHTML += '<div class="piece"></div>';
				if (i == 1) document.querySelector(".left").innerHTML += '<div class="piece"></div>';
				if (i == 2) document.querySelector(".front").innerHTML += '<div class="piece"></div>';
				if (i == 3) document.querySelector(".right").innerHTML += '<div class="piece"></div>';
				if (i == 4) document.querySelector(".back").innerHTML += '<div class="piece"></div>';
				if (i == 5) document.querySelector(".down").innerHTML += '<div class="piece"></div>';

				if (i == 0) temp.push("U");
				if (i == 1) temp.push("L");
				if (i == 2) temp.push("F");
				if (i == 3) temp.push("R");
				if (i == 4) temp.push("B");
				if (i == 5) temp.push("D");
			}
			temp2.push(temp);
		}
		cube.push(temp2);
	}
	draw();
}

const resetCube = () => {
	cube = [];
	for (let i = 0; i < 6; i++) {
		let temp2 = [];
		for (let j = 0; j < n; j++) {
			let temp = [];
			for (let k = 0; k < n; k++) {
				if (i == 0) temp.push("U");
				if (i == 1) temp.push("L");
				if (i == 2) temp.push("F");
				if (i == 3) temp.push("R");
				if (i == 4) temp.push("B");
				if (i == 5) temp.push("D");
			}
			temp2.push(temp);
		}
		cube.push(temp2);
	}
}

let cube;
const colours = {
	"U": "white",
	"R": "red",
	"F": "green",
	"L": "#FD6A02",
	"D": "gold",
	"B": "blue"
}

const draw = () => {
	let l = 0;
	for (let i = 0; i < cube.length; i++) {
		for (let j = 0; j < cube[i].length; j++) {
			for (let k = 0; k < cube[i][j].length; k++) {
				document.querySelectorAll(".piece")[l++].style.background = colours[cube[i][j][k]];
			}
		}
	}
}

const rotate = arr => arr.map((e, i) => arr.map(e => e[i]).reverse());
const arotate = arr => rotate(rotate(rotate(arr)));

const perform = (movesVar) => {
	resetCube();
	if (movesVar.length == 0) {
		resetCube();
		draw();
		return;
	}

	if (!movesVar.match(/[a-zA-Z]/) || movesVar.match(/([^ 0-9'RUFLDBrufldbMESxyzw])/g) || movesVar.match(/([0-9][0-9RUFLDBrufldbMESxyz](?![w'2]{0,3} ))/g) ?.length > 1) {
		return;
	}

	movesVar = movesVar.replaceAll(",", "").split(" ");

	let axies = {
		"U": "y",
		"D": "y",
		"E": "y",
		"Y": "y",
		"R": "x",
		"L": "x",
		"M": "x",
		"X": "x",
		"F": "z",
		"B": "z",
		"S": "z",
		"Z": "z"
	};

	let idx = {
		"U": [0],
		"D": [n - 1],
		"R": [0],
		"L": [n - 1],
		"F": [0],
		"B": [n - 1],
		"M": [...Array(n - 1).keys()].slice(1),
		"E": [...Array(n - 1).keys()].slice(1),
		"S": [...Array(n - 1).keys()].slice(1),
		"x": [...Array(n).keys()],
		"y": [...Array(n).keys()],
		"z": [...Array(n).keys()],
		"u": n == 3 ? [0, 1] : [0],
		"d": n == 3 ? [2, 1] : [n - 1],
		"r": n == 3 ? [0, 1] : [0],
		"l": n == 3 ? [2, 1] : [n - 1],
		"f": n == 3 ? [0, 1] : [0],
		"b": n == 3 ? [2, 1] : [n - 1],
		"Uw": n == 3 ? [0, 1] : [0],
		"Dw": n == 3 ? [2, 1] : [n - 1],
		"Rw": n == 3 ? [0, 1] : [0],
		"Lw": n == 3 ? [2, 1] : [n - 1],
		"Fw": n == 3 ? [0, 1] : [0],
		"Bw": n == 3 ? [2, 1] : [n - 1]
	};
	for (let move of movesVar) {
		if (move == "") break;
		let layers = idx[move.replace(/[0-9']/g, "")];
		let slice = (n != 3 && move.replace(/[0-9']/g, "") == move.replace(/[0-9']/g, "").match(/^[udrlfb]$|^[UDRLFB]w$/g)) ? (((temp = move.match(/[0-9][A-Za-z]/g)) ? parseInt(move.replace(/[a-zA-Z]+[0-9]/g, "")) - 1 : 1) * (move.includes("d") || move.includes("l") || move.includes("b") ? -1 : 1)) : 0;
		if (move.match(/[RUF]w/g)) layers = [...Array(slice + 1).keys()];
		if (move.match(/[LDB]w/g)) layers = [...Array(n).keys()].slice(-slice - 1);
		let newCube = cube,
			i, j = 0;

		for (let layer of layers) {

			if (!move.match(/[RUFLDB]w/g)) slice = (n != 3 && move.replace(/[0-9']/g, "") == move.replace(/[0-9']/g, "").match(/^[udrlfb]$|^[UDRLFB]w$/g)) ? (((temp = move.match(/[0-9][A-Za-z]/g)) ? parseInt(move.replace(/[a-zA-Z]+[0-9]/g, "")) - 1 : 1) * (move.includes("d") || move.includes("l") || move.includes("b") ? -1 : 1)) : 0;
			if (!move.match(/[RUFLDB]w/g)) layer = layer + slice >= 0 ? layer + slice : n - layer - slice;
			let axis = axies[move.replace(/[0-9'w]/g, "").toUpperCase()];
			let double = (temp = move.match(/[A-Za-z][0-9]/g)) ? parseInt(temp[0].replace(/[a-zA-Z]/g, "")) : 1;
			let direction = move.toUpperCase().includes("L") || move.toUpperCase().includes("M") || move.toUpperCase().includes("U") || move.toUpperCase().includes("B") || move.toUpperCase().includes("Y") ? "ACW" : "CW";
			direction = move.includes("'") ? direction == "ACW" ? "CW" : "ACW" : direction;
			for (let d = 0; d < double; d++) {
				if (axis == "x") {
					let up = arotate(cube[0])[layer];
					let back = arotate(cube[4])[newCube[4].length - layer - 1];
					let down = arotate(cube[5])[layer];
					let front = arotate(cube[2])[layer];

					if (direction == "CW") {
						up.reverse();
						back.reverse();
						i = 0;
						newCube[0].forEach(e => e[newCube[0].length - layer - 1] = front[i++]);
						i = 0;
						newCube[4].forEach(e => e[layer] = up[i++]);
						i = 0;
						newCube[5].forEach(e => e[newCube[4].length - layer - 1] = back[i++]);
						i = 0;
						newCube[2].forEach(e => e[newCube[2].length - layer - 1] = down[i++]);

						if (layer == 0) cube[3] = rotate(cube[3]);
						if (layer == cube[0].length - 1) cube[1] = arotate(cube[1]);
					} else {
						down.reverse();
						back.reverse();
						i = 0;
						newCube[0].forEach(e => e[newCube[0].length - layer - 1] = back[i++]);
						i = 0;
						newCube[4].forEach(e => e[layer] = down[i++]);
						i = 0;
						newCube[5].forEach(e => e[newCube[4].length - layer - 1] = front[i++]);
						i = 0;
						newCube[2].forEach(e => e[newCube[2].length - layer - 1] = up[i++]);

						if (layer == 0) cube[3] = arotate(cube[3]);
						if (layer == cube[0].length - 1) cube[1] = rotate(cube[1]);
					}

				}
				if (axis == "y") {
					let right = cube[3][layer];
					let front = cube[2][layer];
					let left = cube[1][layer];
					let back = cube[4][layer];

					if (direction == "CW") {
						newCube[3][layer] = front;
						newCube[4][layer] = right;
						newCube[1][layer] = back;
						newCube[2][layer] = left;

						if (layer == 0) cube[0] = arotate(cube[0]);
						if (layer == cube[0].length - 1) cube[5] = rotate(cube[5]);
					} else {
						newCube[3][layer] = back;
						newCube[4][layer] = left;
						newCube[1][layer] = front;
						newCube[2][layer] = right;

						if (layer == 0) cube[0] = rotate(cube[0]);
						if (layer == cube[0].length - 1) cube[5] = arotate(cube[5]);
					}

				}
				if (axis == "z") {
					let up = cube[0][cube[1].length - layer - 1];
					let left = arotate(cube[1])[layer];
					let down = cube[5][layer];
					let right = arotate(cube[3])[cube[3].length - layer - 1];

					if (direction == "CW") {
						right.reverse();
						left.reverse();
						newCube[0][cube[0].length - layer - 1] = left;
						i = 0;
						newCube[3].forEach(e => e[layer] = up[i++]);
						newCube[5][layer] = right;
						i = 0;
						newCube[1].forEach(e => e[cube[1].length - layer - 1] = down[i++]);

						if (layer == 0) cube[2] = rotate(cube[2]);
						if (layer == cube[0].length - 1) cube[4] = arotate(cube[4]);
					} else {
						up.reverse();
						down.reverse();
						newCube[0][cube[0].length - layer - 1] = right;
						i = 0;
						newCube[3].forEach(e => e[layer] = down[i++]);
						newCube[5][layer] = left;
						i = 0;
						newCube[1].forEach(e => e[cube[1].length - layer - 1] = up[i++]);

						if (layer == 0) cube[2] = arotate(cube[2]);
						if (layer == cube[0].length - 1) cube[4] = rotate(cube[4]);
					}
				}
				cube = newCube;
				draw();
			}
		}
	}
}

// Main Vars

var advance;

let plus2col = 'orange';
let dnfcol = 'red';

if (localStorage.bgimg) document.querySelector(".rightT").style.backgroundImage = "url(" + localStorage.bgimg + ")";
if (localStorage.borderView) document.body.style.setProperty("--border", localStorage.borderView == "true" ? "1px" : "0px");
if (localStorage.buttonbg != null) document.body.style.setProperty("--buttonbg", localStorage.buttonbg);

var sType;

if (localStorage.getItem("speedtimer") == null) {
	localStorage.clear();
	var sessions = [];

	function createSession(type, nameStr) {
		let sessionTemp = {
			type: type,
			times: [],
			scrambles: [],
			name: nameStr
		}

		sessions.push(sessionTemp);
	}

	createSession("3x3", "Session 01");

	localStorage.setItem("speedtimer", JSON.stringify(sessions));
	localStorage.setItem("cur", JSON.stringify(0));
} else {
	var sessions = JSON.parse(localStorage.getItem("speedtimer"));

	currentSessionIdx = parseInt(JSON.parse(localStorage.getItem("cur")));

	if (currentSessionIdx >= sessions.length) {
		currentSessionIdx = 0;
	}

	document.querySelector(".scrambleDrop").value = sessions[currentSessionIdx].type;
}

if (sessions.length > 0) {
	currentSessionIdx = parseInt(JSON.parse(localStorage.getItem("cur")));
	generateTimes();
	generateStats();
}

var currentSessionIdx = parseInt(JSON.parse(localStorage.getItem("cur")));
var curType;

// Scramble

var scramble = document.querySelector(".scramble");

sType = sessions[currentSessionIdx].type.slice(0, 2);

document.querySelector(".scrambleDrop").addEventListener("change", function () {
	sType = document.querySelector(".scrambleDrop").value.slice(0, 2);
	generateScramble(sType);
});

async function generateScramble(type) {
	scramble.innerHTML = "";

	// document.querySelector(".scrambleShow").innerHTML = "No Visual";
	// document.querySelector(".scrambleShow").style.color = "white";
	// document.querySelector(".scrambleShow").style.fontSize = "200%";

	let scramText, scramArray, scramStuff;

	var codes = {
		py: 'pyraminx',
		sk: 'skewb',
		cl: 'clock',
		me: 'megaminx',
		sq: 'square1',
	}


	switch (type) {
		case "2x":
			scramStuff = await randomScrambleForEvent("222");
			break;
		case "3x":
			scramStuff = await randomScrambleForEvent("333");
			break;
		case "4x":
			scramStuff = await randomScrambleForEvent("444");
			break;
		case "5x":
			scramStuff = await randomScrambleForEvent("555");
			break;
		case "6x":
			scramStuff = await randomScrambleForEvent("666");
			break;
		case "7x":
			scramStuff = await randomScrambleForEvent("777");
			break;
		case "Py":
			scramStuff = await randomScrambleForEvent("pyram");

			if (JSON.parse(localStorage.getItem("d3vis")) == false) {
				scramText = scramStuff.toString();
				scramArray = scramText.split(" ");

				document.querySelector(".scrambleShow").innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 85%; width: 85%;" experimental-setup-alg="' + scramText + '"' + 'puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
			}
			break;
		case "Sk":
			scramStuff = await randomScrambleForEvent("skewb");

			if (JSON.parse(localStorage.getItem("d3vis")) == false) {
				scramText = scramStuff.toString();
				scramArray = scramText.split(" ");

				document.querySelector(".scrambleShow").innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 85%; width: 85%;" experimental-setup-alg="' + scramText + '"' + 'puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
			}

			break;
		case "Cl":
			scramStuff = await randomScrambleForEvent("clock");

			if (JSON.parse(localStorage.getItem("d3vis")) == false) {
				scramText = scramStuff.toString();
				scramArray = scramText.split(" ");

				document.querySelector(".scrambleShow").innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 85%; width: 85%;" experimental-setup-alg="' + scramText + '"' + 'puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
			}

			break;
		case "Me":
			scramStuff = await randomScrambleForEvent("minx");

			if (JSON.parse(localStorage.getItem("d3vis")) == false) {
				scramText = scramStuff.toString();
				scramArray = scramText.split(" ");

				document.querySelector(".scrambleShow").innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 95%; width: 95%;" experimental-setup-alg="' + scramText + '"' + 'puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
			}

			break;
		case "Sq":
			scramStuff = await randomScrambleForEvent("sq1");

			if (JSON.parse(localStorage.getItem("d3vis")) == false) {
				scramText = scramStuff.toString();
				scramArray = scramText.split(" ");

				document.querySelector(".scrambleShow").innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 85%; width: 85%;" experimental-setup-alg="' + scramText + '"' + 'puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
			}

			break;
		case "Ot":
			if (JSON.parse(localStorage.getItem("d3vis")) == false) {
				document.querySelector(".scrambleShow").innerHTML = "No Visual";
				document.querySelector(".scrambleShow").style.color = "white";
				document.querySelector(".scrambleShow").style.fontSize = "200%";
			}
			localStorage.setItem("scrambleTemp", "Other");
			break;
		default:
			break;
	}

	if (type != "Ot") {
		scramText = scramStuff.toString();
		scramArray = scramText.split(" ");

		if (!isNaN(type.slice(0, 1))) {
			var mobileSize = 66.5 - parseInt(type);

			scramble.innerHTML = "";

			for (let i = 0; i < scramArray.length; i++) {
				let sample = scramArray[i];

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				span.classList.add(sample);
				span.style.color = sample.includes("R") ? "rgb(255,77,77)" : sample.includes("F") ? "lightgreen" : sample.includes("U") ? "white" : sample.includes("L") ? "rgb(255,166,77)" : sample.includes("D") ? "rgb(255,255,128)" : "lightblue";
				if (innerWidth > 1000) {
					if (parseInt(type) == 7 || parseInt(type) == 6) {
						span.style.fontSize = (mobileSize - 57.5 + ((parseInt(type) - 6) * 0.75)).toString() + "vh";
					} else {
						if (parseInt(type) != 5) {
							span.style.fontSize = (mobileSize - 59.5).toString() + "vh";
						} else {
							span.style.fontSize = (mobileSize - 58).toString() + "vh";
						}
					}
				} else {
					span.style.fontSize = (mobileSize - 60).toString() + "vw";
				}

				scramble.appendChild(span);
			}

			if (innerWidth > 1000) {
				if (JSON.parse(localStorage.d3vis) == false) {
					createCube(parseInt(type), "scrambleShow");
					perform(scramText);
				} else {
					document.querySelector(".scrambleShow").innerHTML = '<twisty-player camera-distance = "7" background = "none" control-panel = "none" style = "height: 100%; width: 100%;" experimental-setup-alg="' + scramText + '"' + 'puzzle="' + type.slice(0, 1) + 'x' + type.slice(0, 1) + 'x' + type.slice(0, 1) + '"></twisty-player>';
				}
			}

			localStorage.setItem("scrambleTemp", JSON.stringify(scramText + "\n" + document.querySelector(".scrambleDrop").value));
		} else {
			for (let i = 0; i < scramArray.length; i++) {
				let sample = scramArray[i];

				var mobileSize = 63.5;

				if (type == "Me") {
					mobileSize = 62.5;
				}

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				if (innerWidth > 1000) {
					span.style.fontSize = (mobileSize - 59.5).toString() + "vh";
				} else {
					span.style.fontSize = (mobileSize - 60).toString() + "vw";
				}

				scramble.appendChild(span);
			}

			if (JSON.parse(localStorage.d3vis) == true) {
				document.querySelector(".scrambleShow").innerHTML = '<twisty-player camera-distance = "7" background = "none" control-panel = "none" style = "height: 100%; width: 100%;" experimental-setup-alg="' + scramText + '"' + 'puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
			}

			var codes2 = {
				pyraminx: "pyr",
				skewb: "skw",
				clock: "clc",
				megaminx: "meg",
				square1: "sq1",
			}

			localStorage.setItem("scrambleTemp", JSON.stringify(scramText + "\n" + codes2[document.querySelector(".scrambleDrop").value.toLowerCase()]));
		}
	}
}

generateScramble(sType);
currentSessionIdx = parseInt(JSON.parse(localStorage.getItem("cur")));

// Timer

var timer = document.querySelector(".digits");

var timing = false;
var time = 0;
var running = 0;

window.addEventListener('keydown', function (e) {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault();
	}
});

function reset() {
	running = 0;
	time = 0;
	timer.innerHTML = "00:00.00";
}

function increment(start) {
	advance = setInterval(function () {
		timer.style.color = "white";
		if (running == 1) {
			time = performance.now() - start;
			var mins = Math.floor(time / 1000 / 60);
			if (mins <= 9) {
				mins = "0" + mins;
			}
			var secs = Math.floor(time / 1000 % 60);
			if (secs <= 9) {
				secs = "0" + secs;
			}

			var hundredths = Math.round(time % 1000 / 10);
			if (hundredths <= 9) {
				hundredths = "0" + hundredths;
			}

			timer.innerHTML = mins + ":" + secs + "." + hundredths;
		} else clearInterval(advance);
	});
}

var plus2 = ['altKey', "2"];
var dnf = ['altKey', "d"];
var remove = ['altKey', "z"];
var clear = ['Escape'];

document.onkeydown = function (e) {
	if (e.altKey && e.key == plus2[1]) {
		e.preventDefault();
		if (sessions[currentSessionIdx].times[0].slice(-1) == "+") {
			sessions[currentSessionIdx].times[0] = sessions[currentSessionIdx].times[0].replace("+", "");
			sessions[currentSessionIdx].times[0] = ("000000" + (parseInt(sessions[currentSessionIdx].times[0]) - 200)).slice(-6);
		} else {
			sessions[currentSessionIdx].times[0] = sessions[currentSessionIdx].times[0].replace("DNF(", "").replace(")", "");
			sessions[currentSessionIdx].times[0] = ("000000" + (parseInt(sessions[currentSessionIdx].times[0]) + 200)).slice(-6) + "+";
		}
		localStorage.setItem("speedtimer", JSON.stringify(sessions));
		generateTimes();
		generateStats();
	}
	if (e.altKey && e.key == dnf[1]) {
		e.preventDefault();
		if (sessions[currentSessionIdx].times[0].slice(0, 3) == "DNF") {
			sessions[currentSessionIdx].times[0] = sessions[currentSessionIdx].times[0].replace("DNF(", "").replace(")", "");
		} else {
			if (sessions[currentSessionIdx].times[0].slice(-1) == "+") {
				sessions[currentSessionIdx].times[0] = ("000000" + (parseInt(sessions[currentSessionIdx].times[0]) - 200)).slice(-6);
				sessions[currentSessionIdx].times[0] = sessions[currentSessionIdx].times[0].replace("+", "");
			}
			sessions[currentSessionIdx].times[0] = `DNF(${sessions[currentSessionIdx].times[0]})`;
		}
		localStorage.setItem("speedtimer", JSON.stringify(sessions));
		generateTimes();
		generateStats();
	}
	if (e.altKey && e.key == remove[1]) {
		e.preventDefault();
		deleteSolve();
		generateTimes();
		generateStats();
	}
	if (localStorage.getItem("inputType") == "timer") {
		if (e.key == clear[0]) {
			timer.innerHTML = "00:00.00";
		}
	}
}

// timer.on

if (innerWidth < 1300) {
	document.querySelector(".digits").disabled = false;
} else {
	document.querySelector(".digits").disabled = true;
}

let timerValue = 0;
let interval;
let isTouchGood = false;

const mousePress = () => {
	if (running == 0) {
		if (innerWidth < 1300) {
			if (localStorage.getItem("inputType") == "timer") {
				if (timer.nodeName == "BUTTON") {
					interval = setInterval(() => {
						timerValue++;
						
						if(timerValue === 2) {
							timer.style.color = "orange";
						}
					
						if(timerValue === 5) {
							timer.style.color = "lightgreen";
							isTouchGood = true;
						}
					}, 100);
				}
			}
		}
	} else {
		running = 0;
		getTime();
		localStorage.setItem("speedtimer", JSON.stringify(sessions));
		generateScramble(sType);

		isTouchGood = false;

		timer.style.color = "white";
	}
}

const mouseRelease = () => {
	if(isTouchGood) {
		start();
	}

	clearInterval(interval);
	timerValue = 0;

	isTouchGood = false;
	
	timer.style.color = "white";
}

timer.addEventListener("touchstart", mousePress);
timer.addEventListener("touchend", mouseRelease);

var timerDoTime = 0;
var timerCheck;
var timerPressed = false;

var et = new Event('keydown');
et.keyCode = 32
et.which = et.keyCode;
document.dispatchEvent(et);

document.body.onkeydown = function (e) {
	if (e.keyCode == 32) {
		if (running == 0) {
			timerPressed = true;
			if (timerDoTime == 0) {
				timerDoTime = Math.floor(performance.now());
				timerCheck = window.setInterval(checkSecF, 100);
				timerCheck = window.setInterval(checkSec, 300);
			}
		}
	}
}

document.body.onkeyup = function (e) {
	if (localStorage.getItem("inputType") == "timer") {
		if (timer.nodeName == "BUTTON") {
			timer.style.color = "white";
			if (e.keyCode == 32 && running == 0) {
				timerPressed = false;
				var newTime = Math.floor(performance.now()) - timerDoTime;
				timerDoTime = 0;
				if (newTime > 400) {
					if (JSON.parse(localStorage.wcaInspec) == false) {
						start();
						clearInterval(timerCheck);
					}
				} else {
					timer.style.color = "white";
					timerDoTime = 0;
					timerPressed = false;
					newTime = 0;
					clearInterval(timerCheck);
				}
			} else if (running == 1) {
				running = 0;
				getTime();
				localStorage.setItem("speedtimer", JSON.stringify(sessions));
				generateScramble(sType);
				timer.style.color = "white";
			}
		}
	}
}

function checkSecF() {
	if (timerPressed) {
		if (timer.style.color == "white") {
			timer.style.color = "orange";
		}
	}
}

function checkSec() {
	if (timerPressed) {
		if (timer.style.color == "orange") {
			timer.style.color = "lightgreen";
		}
	}
}

function start() {
	reset();
	running = 1;
	increment(performance.now());
}

function enter() {
	let input = document.querySelector(".inputTime");
	input.value = input.value.replace(/[^0-9+DNFdnf]/g, '');
}

enter();

function setInputFilter(textbox, inputFilter) {
	["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
		textbox.addEventListener(event, function () {
			if (inputFilter(this.value)) {
				this.oldValue = this.value;
				this.oldSelectionStart = this.selectionStart;
				this.oldSelectionEnd = this.selectionEnd;
			} else if (this.hasOwnProperty("oldValue")) {
				this.value = this.oldValue;
				this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
			} else {
				this.value = "";
			}
		});
	});
}

setInputFilter(document.querySelector(".inputTime"), function (value) {
	return /^-?\d*$/.test(value);
});

document.querySelector(".inputTime").addEventListener("change", function () {
	if (localStorage.getItem("inputType") == 'manual') {
		let input = document.querySelector(".inputTime");
		let tempTime;
		if (input.value.length > 6 && input.value.slice(-1) != "+") {
			input.value = "";
		} else {
			if (input.value.slice(-1) == "+" && input.value.legnth < 8) {
				input.value = "";
			} else {
				var timeofSolve = manualFormat(input.value);

				sessions[currentSessionIdx].times.unshift(timeofSolve);
				if (localStorage.getItem("scrambleTemp") != "Other") {
					sessions[currentSessionIdx].scrambles.unshift(JSON.parse(localStorage.getItem("scrambleTemp")));
				} else {
					sessions[currentSessionIdx].scrambles.unshift(localStorage.getItem("scrambleTemp"));
				}
				localStorage.setItem("speedtimer", JSON.stringify(sessions));

				generateTimes();
				generateStats();
				input.value = "";

				generateScramble(sType);
			}
		}
	}
});

function format(time) {
	var temp = time.toString();
	var temp2;

	if (temp.length == 6) {
		temp2 = temp.slice(0, 2) + ":" + temp.slice(2, 4) + "." + temp.slice(4, 6);
		return temp2;
	} else if (temp.length == 5) {
		temp2 = "0" + temp.slice(0, 1) + ":" + temp.slice(1, 3) + "." + temp.slice(3, 5);
		return temp2;
	} else if (temp.length == 4) {
		temp2 = temp.slice(0, 2) + "." + temp.slice(2, 4);
		return temp2;
	} else if (temp.length == 3) {
		temp2 = temp.slice(0, 1) + "." + temp.slice(1, 3);
		return temp2;
	} else if (temp.length == 2) {
		temp2 = "0." + temp.slice(0, 2);
		return temp2;
	} else if (temp.length == 1) {
		temp2 = "0.0" + temp.slice(0, 1);
		return temp2;
	} else if (temp.includes == "DNF") {
		return "DNF";
	}

	// return time;
}

function manualFormat(time) {
	var temp = time;
	var temp2;

	if (temp == "DNF" || temp == "dnf") {
		return "DNF";
	} else if (temp.slice(-1) == "+") {
		temp = time.slice(0, time.length - 1)
		if (temp.length == 6) {
			temp2 = temp;
			return temp2.toString() + "+";
		} else if (temp.length == 5) {
			temp2 = "0" + temp.slice(0, 5);
			return temp2.toString() + "+";
		} else if (temp.length == 4) {
			temp2 = "00" + temp.slice(0, 4);
			return temp2.toString() + "+";
		} else if (temp.length == 3) {
			temp2 = "000" + temp.slice(0, 3);
			return temp2.toString() + "+";
		} else if (temp.length == 2) {
			temp2 = "0000" + temp.slice(0, 2);
			return temp2.toString() + "+";
		} else if (temp.length == 1) {
			temp2 = "00000" + temp.slice(0, 1);
			return temp2.toString() + "+";
		}
	} else if (temp.length == 6) {
		temp2 = temp;
		return temp2.toString();
	} else if (temp.length == 5) {
		temp2 = "0" + temp.slice(0, 5);
		return temp2.toString();
	} else if (temp.length == 4) {
		temp2 = "00" + temp.slice(0, 4);
		return temp2.toString();
	} else if (temp.length == 3) {
		temp2 = "000" + temp.slice(0, 3);
		return temp2.toString();
	} else if (temp.length == 2) {
		temp2 = "0000" + temp.slice(0, 2);
		return temp2.toString();
	} else if (temp.length == 1) {
		temp2 = "00000" + temp.slice(0, 1);
		return temp2.toString();
	}

	//return time;
}

if (localStorage.getItem("inputType") !== null) {
	let type = document.querySelector(".type");
	if (localStorage.getItem("inputType") == 'manual') {
		document.querySelector(".inputTime").style.display = "flex";
		document.querySelector(".digits").style.display = "none";
		type.innerHTML = '<i class="fas fa-stopwatch"></i>'
	} else {
		document.querySelector(".inputTime").style.display = "none";
		document.querySelector(".digits").style.display = "flex";
		type.innerHTML = '<i class="fas fa-keyboard"></i>'
	}
} else {
	localStorage.setItem("inputType", 'timer');
}

document.querySelector(".type").onclick = e => {
	let type = document.querySelector(".type");
	type.blur();
	if (type.innerHTML == '<i class="fas fa-keyboard"></i>') {
		document.querySelector(".inputTime").style.display = "flex";
		document.querySelector(".digits").style.display = "none";
		localStorage.setItem("inputType", 'manual');
	} else {
		document.querySelector(".inputTime").style.display = "none";
		document.querySelector(".digits").style.display = "flex";
		localStorage.setItem("inputType", 'timer');
	}
	type.innerHTML = type.innerHTML == '<i class="fas fa-keyboard"></i>' ? "<i class='fas fa-stopwatch'></i>" : "<i class='fas fa-keyboard'></i>";
}

if(JSON.parse(localStorage.stackmat)) {
	localStorage.setItem("inputType", "stackmat");
}

function getTime() {
	var timeFinish = timer.innerHTML.slice(0, 2) + timer.innerHTML.slice(3, 5);
	if (timer.innerHTML.slice(6, 7) == "0") {
		timeFinish = timeFinish + "0" + (parseInt(timer.innerHTML.slice(6, 8))).toString();
	} else {
		timeFinish = timeFinish + (parseInt(timer.innerHTML.slice(6, 8))).toString();
	}
	var timeofSolve = timeFinish.toString();

	sessions[currentSessionIdx].times.unshift(timeofSolve);
	if (localStorage.getItem("scrambleTemp") != "Other") {
		sessions[currentSessionIdx].scrambles.unshift(JSON.parse(localStorage.getItem("scrambleTemp")));
	} else {
		sessions[currentSessionIdx].scrambles.unshift(localStorage.getItem("scrambleTemp"));
	}
	localStorage.setItem("speedtimer", JSON.stringify(sessions));

	generateTimes();
	generateStats();
}

document.querySelector(".refreshScram").addEventListener("click", function () {
	generateScramble(sType);
});

document.querySelector(".copyScram").addEventListener("click", async function () {
	copyItem(JSON.stringify(localStorage.getItem("scrambleTemp")).replace(/[\\"]/g, '').replace(/n[0-9]x[0-9]/g, ''));
});

function generateTimes() {
	var container = document.querySelector(".solves");

	container.innerHTML = "";

	for (let i = 0; i < sessions[parseInt(currentSessionIdx)].times.length; i++) {
		var solveBar = document.createElement("div");
		solveBar.id = sessions[currentSessionIdx].times.length - i - 1;
		solveBar.classList.add("solveBar");

		var begin = document.createElement("div");
		begin.classList.add("begin");

		var index = document.createElement("div");
		index.classList.add("index");
		index.innerHTML = (sessions[currentSessionIdx].times.length - i).toString() + ".&nbsp;";

		let time = document.createElement("div");
		time.classList.add("time");
		if (sessions[currentSessionIdx].times[i].slice(-1) == "+") {
			time.style.color = plus2col;
			time.innerHTML = sessions[currentSessionIdx].times[i].slice(0, 2) + ":" + sessions[currentSessionIdx].times[i].slice(2, 4) + "." + sessions[currentSessionIdx].times[i].slice(4, 6) + "+";
		} else if (sessions[currentSessionIdx].times[i].slice(0, 3) == "DNF") {
			time.style.color = dnfcol;
			time.innerHTML = "DNF(" + sessions[currentSessionIdx].times[i].slice(4, 6) + ":" + sessions[currentSessionIdx].times[i].slice(6, 8) + "." + sessions[currentSessionIdx].times[i].slice(8, 10) + ")";
		} else {
			time.innerHTML = sessions[currentSessionIdx].times[i].slice(0, 2) + ":" + sessions[currentSessionIdx].times[i].slice(2, 4) + "." + sessions[currentSessionIdx].times[i].slice(4, 6);
		}

		begin.appendChild(index);
		begin.appendChild(time);

		var icons = document.createElement("div");
		icons.classList.add("icons");

		var del = document.createElement("div");
		del.classList.add("del");
		del.innerHTML = '<i class="fas fa-times"></i>';
		del.addEventListener("click", deleteSolve);

		var exInfo = document.createElement("div");
		exInfo.classList.add("exInfo");
		exInfo.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
		exInfo.addEventListener("click", showScram);
		if (innerWidth < 1000) {
			solveBar.addEventListener("click", showScram);
		}

		icons.appendChild(del);
		icons.appendChild(exInfo);

		solveBar.appendChild(begin);
		solveBar.appendChild(icons);

		container.appendChild(solveBar);
	}
}

function generateStats() {
	var best = document.querySelector(".bestTime");
	var avg = document.getElementById("avg");
	var worst = document.getElementById("worst");
	var ao5 = document.getElementById("ao5");
	var ao12 = document.getElementById("ao12");
	var ao100 = document.getElementById("ao100");
	var range = document.getElementById("range");

	Array.min = function (array) {
		return Math.min.apply(Math, array);
	};

	Array.max = function (array) {
		return Math.max.apply(Math, array);
	};

	let times = [];
	for (let time of sessions[currentSessionIdx].times) {
		if (time.includes("DNF")) times.push("DNF");
		else times.push(time.replace("+", ""));
	}

	//Default

	best.innerHTML = "-";
	avg.innerHTML = "-";
	worst.innerHTML = "-";
	ao5.innerHTML = "-";
	ao12.innerHTML = "-";
	ao100.innerHTML = "-";
	range.innerHTML = "-";
	if (sessions[currentSessionIdx].times != 0) {

		// Best

		best.innerHTML = format(Math.min(...times.filter(e => !isNaN(parseInt(e)))) == Infinity ? "DNF" : Math.min(...times.filter(e => !isNaN(parseInt(e)))));

		// Avg

		let average;

		var total = 0;
		var avgTemp = 0;
		var len = 0;
		for (let time of sessions[currentSessionIdx].times) {
			if (!isNaN(parseInt(time))) {
				total += parseInt(time);
				len++;
			}
		}
		if (!isNaN(Math.round(total / len))) avg.innerHTML = format(Math.round(total / len));

		// Worst

		// worst.innerHTML = format(Math.max.apply(Math, sessions[currentSessionIdx].times))
		worst.innerHTML = format(Math.max(...times.filter(e => !isNaN(parseInt(e)))) == -Infinity ? "DNF" : Math.max(...times.filter(e => !isNaN(parseInt(e)))));

		// Range
		if (sessions[currentSessionIdx].times.length > 1) {
			range.innerHTML = format((Math.max(...times.filter(e => !isNaN(parseInt(e)))) == -Infinity ? "DNF" : Math.max(...times.filter(e => !isNaN(parseInt(e))))) - (Math.min(...times.filter(e => !isNaN(parseInt(e)))) == Infinity ? "DNF" : Math.min(...times.filter(e => !isNaN(parseInt(e))))));
		};

		// ao5
		average = ao(5);
		if (average) ao5.innerHTML = format(average);

		// ao12
		average = ao(12);
		if (average) ao12.innerHTML = format(average);

		// ao100
		average = ao(100);
		if (average) ao100.innerHTML = format(average);
	}
}

function ao(number) {
	if (sessions[currentSessionIdx].times.length >= number) {
		var ignore = Math.ceil(number * 0.05);
		var times = sessions[currentSessionIdx].times.slice(0, number);
		times.sort((a, b) => {
			if (isNaN(parseInt(a))) return Infinity;
			if (isNaN(parseInt(b))) return -Infinity;
			return a - b;
		});
		times = times.slice(ignore, times.length - ignore);

		if (times.includes("DNF")) return "DNF";

		var total = 0;
		for (let time of times) {
			total += parseInt(time)
		}
		return Math.round(total / (number - 2 * ignore));
	}
	return false;
}


function deleteSolve() {
	if (confirm('Are You Sure You Want To Delete This Solve?')) {

		sessions[currentSessionIdx].times.splice(sessions[currentSessionIdx].times.length - parseInt(this.parentElement ?.parentElement.id ?? document.querySelector(".solves").childNodes[0].id) - 1, 1);
		sessions[currentSessionIdx].scrambles.splice(sessions[currentSessionIdx].scrambles.length - parseInt(this.parentElement ?.parentElement.id ?? document.querySelector(".solves").childNodes[0].id) - 1, 1);

		localStorage.setItem("speedtimer", JSON.stringify(sessions));

		generateStats();
		generateTimes();
	}
}

document.querySelector(".solveInfoClose").addEventListener("click", function () {
	document.querySelector("#overlay2").style.display = "none";
	document.querySelector(".solveInfo").style.display = "none";
});

function showScram() {
	var uppParent1 = this.parentElement;
	var uppParent2 = uppParent1.parentElement;

	var idx = parseInt(uppParent2.id) || this.id;

	//alert(format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]) + "\n" + sessions[currentSessionIdx].scrambles[sessions[currentSessionIdx].scrambles.length - idx - 1]);

	var scrambleText = sessions[currentSessionIdx].scrambles[sessions[currentSessionIdx].scrambles.length - idx - 1];

	document.getElementById("overlay2").style.display = "block";
	document.querySelector(".solveInfo").style.display = "block";

	if (!isNaN(parseInt(scrambleText.slice(scrambleText.length - 1, scrambleText.length)))) {
		document.querySelector(".solveInfoTime").innerHTML = format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]);
		document.querySelector(".solveInfoType").innerHTML = scrambleText.slice(scrambleText.length - 3, scrambleText.length);
		document.querySelector(".solveInfoScramble").innerHTML = (scrambleText).slice(0, scrambleText.length - 3);

		createCube(parseInt(scrambleText.slice(scrambleText.length - 1, scrambleText.length)), "solveInfoPreview");
		perform(scrambleText.slice(0, scrambleText.length - 4));
	} else if (scrambleText.slice(scrambleText.length - 5, scrambleText.length) == "Other") {
		document.querySelector(".solveInfoPreview").innerHTML = "No Visual";
		document.querySelector(".solveInfoPreview").style.color = "white";
		document.querySelector(".solveInfoPreview").style.fontSize = "200%";
	} else {
		var codes = {
			pyr: "Pyraminx",
			skw: "Skewb",
			clc: "Clock",
			meg: "Megaminx",
			sq1: "Square-1",
			her: "Other",
		}

		var codes2 = {
			pyr: "pyraminx",
			skw: "skewb",
			clc: "clock",
			meg: "megaminx",
			sq1: "square1",
		}

		var sideEventName = codes[scrambleText.slice(scrambleText.length - 3, scrambleText.length)];

		document.querySelector(".solveInfoTime").innerHTML = format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]);
		document.querySelector(".solveInfoType").innerHTML = sideEventName;
		document.querySelector(".solveInfoScramble").innerHTML = (scrambleText).slice(0, scrambleText.length - 3);

		document.querySelector(".solveInfoPreview").innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 82.5%; width: 82.5%;" experimental-setup-alg="' + (scrambleText).slice(0, scrambleText.length - 3) + '"' + 'puzzle="' + codes2[scrambleText.slice(scrambleText.length - 3, scrambleText.length)] + '"></twisty-player>';
	}

	document.querySelector(".solveInfoShare").addEventListener("click", async function () {
		var timeData = format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]);
		var scrambleData = (scrambleText).slice(0, scrambleText.length - 3);
		if (scrambleText.includes("Oth")) {
			var typeData = scrambleText;
		} else {
			var typeData = scrambleText.slice(scrambleText.length - 3, scrambleText.length);
		}
		timeData = window.btoa(timeData);
		scrambleData = window.btoa(scrambleData);
		typeData = window.btoa(typeData);

		var link = window.location.origin;

		var sharelink = link + '/time.html?time=' + timeData + '&scramble=' + scrambleData + '&type=' + typeData;

		copyItem(sharelink);
	});
}

async function copyItem(text) {
	const success = await navigator.clipboard.writeText(text)
	
	document.querySelector(".copied").classList.add("show");

	var copyTimeout = window.setTimeout(function () {
		document.querySelector(".copied").classList.remove("show");
	}, 2000);
};

// Stackmat

var stackmatRunning = false;
var on = false;

if(JSON.parse(localStorage.stackmat)) {
	runStackmat();
}

function runStackmat() {  
	stackmat.setCallBack(SMCallback);

    function SMCallback(state) {
        if(state.running) {
			var tempMins = Math.floor(state.time_milli / 60000);

            var tempTime = (state.time_milli - (tempMins * 60000)).toString();
            timer.innerHTML = stackmatFormat(tempTime.slice(0, tempTime.length - 1), tempMins); // + tempTime.slice(tempTime.length - 1, tempTime.length);

            stackmatRunning = true;
        } else {
            if(state.time_milli > 0 && stackmatRunning == true) {
				var tempMins = Math.floor(state.time_milli / 60000);

				var tempTime = (state.time_milli - (tempMins * 60000)).toString();
				var newTempTime = tempTime.slice(0, tempTime.length - 1);
				var tempSubmit = stackmatSubmitFormat(tempMins.toString() + newTempTime);
                stackmatRunning = false;

				sessions[currentSessionIdx].times.unshift(tempSubmit);
				if (localStorage.getItem("scrambleTemp") != "Other") {
					sessions[currentSessionIdx].scrambles.unshift(JSON.parse(localStorage.getItem("scrambleTemp")));
				} else {
					sessions[currentSessionIdx].scrambles.unshift(localStorage.getItem("scrambleTemp"));
				}
				localStorage.setItem("speedtimer", JSON.stringify(sessions));

				generateTimes();
				generateStats();

				generateScramble(sType);
			}
        }

        if(state.time_milli == 0) {
            timer.innerHTML = "00:00.00";
        }

		if(!state.on) {
			timer.innerHTML = "---------";
			on = false;
		} else {
			if(!state.running && !state.time_milli > 0 && !on) {
				on = true;
				timer.innerHTML = "00:00.00";
			}
		}
    }
}

function stackmatFormat(time, mins) {  
    var temp = time.toString();
	var temp2;

	if (temp.length == 4) {
		temp2 = temp.slice(0, 2) + "." + temp.slice(2, 4);
	} else if (temp.length == 3) {
		temp2 = "0" + temp.slice(0, 1) + "." + temp.slice(1, 3);
	} else if (temp.length == 2) {
		temp2 = "00." + temp.slice(0, 2);
	} else if (temp.length == 1) {
		temp2 = "00.0" + temp.slice(0, 1);
	}

	var temp3 = mins.toString();
	var temp4;
	if(mins < 10) {
		temp4 = "0" + temp3 + ":" + temp2;
	} else {
		temp4 = temp3 + ":" + temp2;
	}

	return temp4;
}

function stackmatSubmitFormat(time) {
	var temp, temp2;
	temp = time.toString();
	if (temp.length == 6) {
		temp2 = temp;
		return temp2.toString();
	} else if (temp.length == 5) {
		temp2 = "0" + temp.slice(0, 5);
		return temp2.toString();
	} else if (temp.length == 4) {
		temp2 = "00" + temp.slice(0, 4);
		return temp2.toString();
	} else if (temp.length == 3) {
		temp2 = "000" + temp.slice(0, 3);
		return temp2.toString();
	} else if (temp.length == 2) {
		temp2 = "0000" + temp.slice(0, 2);
		return temp2.toString();
	} else if (temp.length == 1) {
		temp2 = "00000" + temp.slice(0, 1);
		return temp2.toString();
	}
}
