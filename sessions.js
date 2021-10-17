// Visualiser

let n;
const createCube = (size, className) => {
	cube = [];
	n = size;
	const scale = 50;
	const xOff = 50;
	const yOff = 100;
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

const perform = moves => {
	resetCube();
	if (moves.length == 0) {
		resetCube();
		draw();
		return;
	}

	if (!moves.match(/[a-zA-Z]/) || moves.match(/([^ 0-9'RUFLDBrufldbMESxyzw])/g) || moves.match(/([0-9][0-9RUFLDBrufldbMESxyz](?![w'2]{0,3} ))/g)?.length > 1) {
		return;
	}

	moves = moves.replaceAll(",", "").split(" ");

	axies = {
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

	idx = {
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
	for (move of moves) {
		if (move == "") break;
		let layers = idx[move.replace(/[0-9']/g, "")];
		let slice = (n != 3 && move.replace(/[0-9']/g, "") == move.replace(/[0-9']/g, "").match(/^[udrlfb]$|^[UDRLFB]w$/g)) ? (((temp = move.match(/[0-9][A-Za-z]/g)) ? parseInt(move.replace(/[a-zA-Z]+[0-9]/g, "")) - 1 : 1) * (move.includes("d") || move.includes("l") || move.includes("b") ? -1 : 1)) : 0;
		if (move.match(/[RUF]w/g)) layers = [...Array(slice + 1).keys()];
		if (move.match(/[LDB]w/g)) layers = [...Array(n).keys()].slice(-slice - 1);
		let newCube = cube,
			i, j = 0;

		for (layer of layers) {

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

var sessions = JSON.parse(localStorage.getItem("speedtimer"));

if (localStorage.borderView) document.body.style.setProperty("--border", localStorage.borderView == "true" ? "1px" : "0px");

let plus2col = 'orange';
let dnfcol = 'red';

currentSessionIdx = parseInt(JSON.parse(localStorage.getItem("cur")));

if (currentSessionIdx > sessions.length) {
	currentSessionIdx = 0;
	localStorage.setItem("cur", JSON.stringify(currentSessionIdx));

	loadInfo();
}

document.querySelector(".scrambleDrop").value = sessions[currentSessionIdx].type;

function generateTimes() {
	var container = document.querySelector(".solves");

	container.innerHTML = "";

	for (i = 0; i < sessions[parseInt(currentSessionIdx)].times.length; i++) {
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
		del.innerHTML = "X";
		del.addEventListener("click", deleteSolve);

		var exInfo = document.createElement("div");
		exInfo.classList.add("exInfo");
		exInfo.innerHTML = "...";
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

	times = [];
	for (time of sessions[currentSessionIdx].times) {
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

		if (sessions[currentSessionIdx].times.length > 1) range.innerHTML = format(Math.round(parseFloat(worst.innerHTML) * 100 - parseFloat(best.innerHTML) * 100));

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

function deleteSolve() {
	if (confirm('Are You Sure You Want To Delete This Solve?')) {
		var uppParent1 = this.parentElement;
		var uppParent2 = uppParent1.parentElement;

		var idx = parseInt(uppParent2.id);
		idx = sessions[currentSessionIdx].times.length - idx - 1;
		sessions[currentSessionIdx].times.splice(idx, 1);

		localStorage.setItem("speedtimer", JSON.stringify(sessions));

		// uppParent2.style.display = "none";

		generateStats();
		generateTimes();
	}

	loadInfo();
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

	document.querySelector(".solveInfoTime").innerHTML = format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]);
	document.querySelector(".solveInfoType").innerHTML = scrambleText.slice(scrambleText.length - 3, scrambleText.length);
	document.querySelector(".solveInfoScramble").innerHTML = (scrambleText).slice(0, scrambleText.length - 3);
	createCube(parseInt(scrambleText.slice(scrambleText.length - 1, scrambleText.length)), "solveInfoPreview");
	perform(scrambleText.slice(0, scrambleText.length - 4));
}

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

function generateSessions() {
	var holder = document.querySelector(".leftSes");

	holder.innerHTML = "";

	for (i = 0; i < sessions.length; i++) {
		var sesBar = document.createElement("div");
		sesBar.classList.add("sesBar");
		sesBar.id = i;
		sesBar.addEventListener("click", loadAgain);

		var sesBarName = document.createElement("div");
		sesBarName.classList.add("sesBarName");
		sesBarName.innerHTML = sessions[i].name;

		sesBar.appendChild(sesBarName);

		var sesBarBtn = document.createElement("button");
		sesBarBtn.classList.add("sesBarBtn");
		sesBarBtn.id = i;
		if (i == currentSessionIdx) {
			sesBarBtn.classList.add("highlight");
		}
		sesBarBtn.innerHTML = "Cur";
		sesBarBtn.addEventListener("click", setCur);

		sesBar.appendChild(sesBarBtn);

		holder.appendChild(sesBar);
	}

	loadInfo();
}

function loadAgain() {
	currentSessionIdx = parseInt(this.id);

	generateTimes();
	generateStats();
	loadInfo();
}

function loadInfo() {
	var sessionName = document.getElementById("sesName");
	sessionName.value = sessions[currentSessionIdx].name;

	if (document.getElementById("sesName").value === sessions[parseInt(JSON.parse(localStorage.getItem("cur")))].name) {
		document.getElementById("delSes").style.display = "none";
	} else {
		document.getElementById("delSes").style.display = "flex";
	}

	if (sessions.length <= 1) {
		document.getElementById("delSes").style.display = "none";
	} else {
		document.getElementById("delSes").style.display = "flex";
	}

	var sessionTypeDrop = document.querySelector(".scrambleDrop");
	sessionTypeDrop.value = sessions[currentSessionIdx].type;
}

document.querySelector(".scrambleDrop").addEventListener("change", function () {
	sessions[currentSessionIdx].type = document.querySelector(".scrambleDrop").value;
	localStorage.setItem("speedtimer", JSON.stringify(sessions));
	sessions = JSON.parse(localStorage.getItem("speedtimer"));
});

document.getElementById("sesName").addEventListener("change", function () {
	sessions[currentSessionIdx].name = document.getElementById("sesName").value;
	localStorage.setItem("speedtimer", JSON.stringify(sessions));
	sessions = JSON.parse(localStorage.getItem("speedtimer"));

	generateSessions();
	loadInfo();
});

document.getElementById("delSes").addEventListener("click", function () {
	if (confirm("Are You Sure You Want to Delete This Session?")) {
		sessions.splice(currentSessionIdx, 1);

		localStorage.setItem("speedtimer", JSON.stringify(sessions));
		sessions = JSON.parse(localStorage.getItem("speedtimer"));

		if (currentSessionIdx > sessions.length - 1) {
			currentSessionIdx = 0;
		}

		localStorage.setItem("cur", JSON.stringify(currentSessionIdx));

		generateSessions();
		generateTimes();
		generateStats();
		loadInfo();
	}
});

function createSession(nameStr) {
	let sessionTemp = {
		type: "3x3",
		times: [],
		scrambles: [],
		name: nameStr
	}

	sessions.push(sessionTemp);
}

generateSessions();
generateTimes();
generateStats();
loadInfo();

document.querySelector(".newSes").addEventListener("click", function () {
	var tempName = prompt("Enter Session Name:");
	if (tempName !== null) {
		createSession(tempName);
		localStorage.setItem("speedtimer", JSON.stringify(sessions));
		sessions = JSON.parse(localStorage.getItem("speedtimer"));

		generateSessions();
		loadInfo();
	}
});

function setCur() {
	currentSessionIdx = parseInt(this.id);
	localStorage.setItem("cur", JSON.stringify(currentSessionIdx));

	generateSessions();
	loadInfo();
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