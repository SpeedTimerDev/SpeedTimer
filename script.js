// Main Vars
var plus2 = ['altKey', "2"];
var dnf = ['altKey', "d"];
var remove = ['altKey', "z"];
var clear = ['esc'];

let plus2col = 'orange';
let dnfcol = 'red';

if (localStorage.bgimg) document.querySelector(".right").style.backgroundImage = "url(" + localStorage.bgimg + ")";
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
var mods = ["2", "'", ""];
var scrambleTemp = [];

sType = sessions[currentSessionIdx].type.slice(0, 2);

document.querySelector(".scrambleDrop").addEventListener("change", function () {
	sType = document.querySelector(".scrambleDrop").value.slice(0, 2);
	generateScramble(sType);
});

function generateScramble(type) {
	scramble.innerHTML = "";
	var sample = "";
	var prevSample;

	switch (type) {
		case "2x":
			notation = ["R", "U", "F"];
			nxn(2, 8, 2.5);
			break;
		case "3x":
			notation = ["R", "U", "F", "L", "D", "B"];
			nxn(3, 17, 2.25);
			break;
		case "4x":
			notation = ["R", "U", "F", "L", "D", "B", "Rw", "Uw", "Fw"];
			nxn(4, 30, 2);
			break;
		case "5x":
			notation = ["R", "U", "F", "L", "D", "B", "Rw", "Uw", "Fw", "Lw", "Dw", "Bw"];
			nxn(5, 50, 1.75);
			break;
		case "6x":
			notation = ["R", "U", "F", "L", "D", "B", "Rw", "Uw", "Fw", "Lw", "Dw", "Bw", "3Rw", "3Uw", "3Fw"];
			nxn(6, 60, 1.5);
			break;
		case "7x":
			notation = ["R", "U", "F", "L", "D", "B", "Rw", "Uw", "Fw", "Lw", "Dw", "Bw", "3Rw", "3Uw", "3Fw", "3Lw", "3Dw", "3Bw"];
			nxn(7, 70, 1.25);
			break;
		case "Py":
			scrambleTemp = [];
			mods = ["", "'"]
			notation = ["L", "R", "B", "U"];
			for (i = 0; i < 11; i++) {
				sample = notation[Math.floor(Math.random() * notation.length)];
				if (prevSample) {
					while (sample == prevSample) {
						sample = notation[Math.floor(Math.random() * notation.length)]
					}
				}
				prevSample = sample;
				sample += mods[Math.floor(Math.random() * mods.length)];
				scrambleTemp.push(sample);

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				span.classList.add(sample);
				span.style.fontSize = "30px";
				scramble.appendChild(span);
			}
			notation = ["l", "r", "b", "u"].sort(() => 0.5 - Math.random());
			len = Math.random() * 4;
			for (i = 0; i < len; i++) {
				sample = notation[i];
				sample += mods[Math.floor(Math.random() * mods.length)];
				scrambleTemp.push(sample);

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				span.classList.add(sample);
				span.style.fontSize = "30px";
				scramble.appendChild(span);
			}
			localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp.join(" ") + "\n" + document.querySelector(".scrambleDrop").value));
			break;
		case "Sk":
			scrambleTemp = [];
			mods = ["", "'"]
			notation = ["L", "R", "B", "U"];
			for (i = 0; i < 11; i++) {
				sample = notation[Math.floor(Math.random() * notation.length)];
				while (sample == prevSample) {
					sample = notation[Math.floor(Math.random() * notation.length)]
				}
				prevSample = sample;
				sample += mods[Math.floor(Math.random() * mods.length)];
				scrambleTemp.push(sample);

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				span.classList.add(sample);
				span.style.fontSize = "30px";
				scramble.appendChild(span);
			}
			localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp.join(" ") + "\n" + document.querySelector(".scrambleDrop").value));
			break;
		case "Cl":
			scrambleTemp = [];
			notation = ["U", "R", "D", "L", "UR", "UL", "DL", "DR", "ALL"];
			sample = "";
			for (i = 0; i < 9; i++) {
				sample = notation[Math.floor(Math.random() * notation.length)];
				num = Math.floor(Math.random() * 7);
				sample += num;
				sample += Math.random() < 0.5 || num == 0 || num == 6 ? "+" : "-";
				scrambleTemp.push(sample);

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				span.classList.add(sample);
				span.style.fontSize = "25px";
				scramble.appendChild(span);
			}
			var span = document.createElement("span");
			span.innerHTML = `y2 `;
			span.classList.add("y2");
			span.style.fontSize = "25px";
			scramble.appendChild(span);
			for (i = 0; i < 5; i++) {
				sample = notation[Math.floor(Math.random() * notation.length)];
				num = Math.floor(Math.random() * 7);
				sample += num;
				sample += Math.random() < 0.5 || num == 0 || num == 6 ? "+" : "-";
				scrambleTemp.push(sample);

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				span.classList.add(sample);
				span.style.fontSize = "25px";
				scramble.appendChild(span);
			}
			notation = ["UL", "UR", "DL", "DR"].sort(() => 0.5 - Math.random());
			len = Math.random() * 4;
			for (i = 0; i < len; i++) {
				sample = notation[i];
				scrambleTemp.push(sample);

				var span = document.createElement("span");
				span.innerHTML = `${sample} `;
				span.classList.add(sample);
				span.style.fontSize = "25px";
				scramble.appendChild(span);
			}
			localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp.join(" ") + "\n" + document.querySelector(".scrambleDrop").value));
			break;
		case "Me":
			scrambleTemp = [];
			notation = ["R", "D"];
			sample = "";
			for (i = 0; i < 5; i++) {
				for (j = 0; j < 10; j++) {
					sample = notation[Math.floor(Math.random() * notation.length)];
					while (sample == prevSample) {
						sample = notation[Math.floor(Math.random() * notation.length)]
					}
					prevSample = sample;
					sample += Math.random() < 0.5 ? "++" : "--";
					scrambleTemp.push(sample);

					var span = document.createElement("span");
					span.innerHTML = `${sample} `;
					span.classList.add(sample);
					span.style.fontSize = "1.5vw";
					scramble.appendChild(span);
				}
				var span = document.createElement("span");
				span.innerHTML = `${Math.random() < 0.5 ? "U" : "U'"}<br>`;
				span.classList.add(sample);
				span.style.fontSize = "1.5vw";
				scramble.appendChild(span);
			}
			localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp.join(" ") + "\n" + document.querySelector(".scrambleDrop").value));
			break;
		case "Ot":
			localStorage.setItem("scrambleTemp", JSON.stringify("Other" + "\n" + document.querySelector(".scrambleDrop").value));
			break;
		default:
			break;
	}
}

function nxn(type, len, size) {
	scrambleTemp = [];
	var prevSample;
	scramble.innerHTML = "";
	//in this example 8 is the scramble length
	for (i = 0; i < len; i++) {
		sample = notation[Math.floor(Math.random() * notation.length)];
		while (sample == prevSample) {
			sample = notation[Math.floor(Math.random() * notation.length)]
		}

		if (prevSample && prev2Sample) {
			while (prevSample.includes("R") && prev2Sample.includes("L") && sample.includes("L") ||
				prevSample.includes("L") && prev2Sample.includes("R") && sample.includes("R") ||
				prevSample.includes("U") && prev2Sample.includes("D") && sample.includes("D") ||
				prevSample.includes("D") && prev2Sample.includes("U") && sample.includes("U") ||
				prevSample.includes("F") && prev2Sample.includes("B") && sample.includes("B") ||
				prevSample.includes("B") && prev2Sample.includes("F") && sample.includes("F")) {
				sample = notation[Math.floor(Math.random() * notation.length)];
			}
		}
		prevSample = sample;
		prev2Sample = prevSample;
		sample += mods[Math.floor(Math.random() * mods.length)];
		scrambleTemp.push(sample);

		var span = document.createElement("span");
		span.innerHTML = `${sample} `;
		span.classList.add(sample);
		span.style.color = sample.includes("R") ? "rgb(255,77,77)" : sample.includes("F") ? "lightgreen" : sample.includes("U") ? "white" : sample.includes("L") ? "rgb(255,166,77)" : sample.includes("D") ? "rgb(255,255,128)" : "lightblue";

		//A good font size depending on the length of scram
		span.style.fontSize = size.toString() + "vw";

		scramble.appendChild(span);
	}

	localStorage.setItem("scrambleTemp", JSON.stringify(scrambleTemp.join(" ") + "\n" + document.querySelector(".scrambleDrop").value));
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
			time = Date.now() - start;
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

document.body.onkeydown = function (e) {
	if (e[plus2[0]] && e.key == plus2[1]) {
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
	if (e[dnf[0]] && e.key == dnf[1]) {
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
	if (e[remove[0]] && e.key == remove[1]) {
		e.preventDefault();
		deleteSolve();
		generateTimes();
		generateStats();
	}
	if (localStorage.getItem("inputType") == "timer") {
		if (e.keyCode == 32 && timer.nodeName == "BUTTON") {
			timer.style.color = "lightgreen";
		}
		if (e.key == "Escape") {
			document.querySelector(".digits").innerHTML = "00:00.00";
		}
	}
}

document.body.onkeyup = function (e) {
	if (localStorage.getItem("inputType") == "timer") {
		if (timer.nodeName == "BUTTON") {
			timer.style.color = "white";
			if (e.keyCode == 32 && running == 0) {
				start();
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

function start() {
	reset();
	running = 1;
	increment(Date.now());
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
				sessions[currentSessionIdx].scrambles.unshift(JSON.parse(localStorage.getItem("scrambleTemp")));
				localStorage.setItem("speedtimer", JSON.stringify(sessions));

				generateTimes();
				generateStats();

				input.value = "";
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
	}
	else if (temp.includes == "DNF") {
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
		type.innerHTML = "⏱"
	} else {
		document.querySelector(".inputTime").style.display = "none";
		document.querySelector(".digits").style.display = "flex";
		type.innerHTML = "⌨️"
	}
} else {
	localStorage.setItem("inputType", 'timer');
}

document.querySelector(".type").onclick = e => {
	let type = document.querySelector(".type");
	type.blur();
	if (type.innerHTML == "⌨️") {
		document.querySelector(".inputTime").style.display = "flex";
		document.querySelector(".digits").style.display = "none";
		localStorage.setItem("inputType", 'manual');
	} else {
		document.querySelector(".inputTime").style.display = "none";
		document.querySelector(".digits").style.display = "flex";
		localStorage.setItem("inputType", 'timer');
	}
	type.innerHTML = type.textContent == "⌨️" ? "⏱" : "⌨️";
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
	sessions[currentSessionIdx].scrambles.unshift(JSON.parse(localStorage.getItem("scrambleTemp")));
	localStorage.setItem("speedtimer", JSON.stringify(sessions));

	generateTimes();
	generateStats();
}

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
		if (sessions[currentSessionIdx].times.length > 1) 
		{ range.innerHTML = format(Math.round(parseFloat(worst.innerHTML) - parseFloat(best.innerHTML))) };

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
		for (let time of times) { total += parseInt(time) }
		return Math.round(total / (number - 2 * ignore));
	}
	return false;
}

function deleteSolve() {
	if (confirm('Are You Sure You Want To Delete This Solve?')) {

		sessions[currentSessionIdx].times.splice(sessions[currentSessionIdx].times.length - parseInt(this.parentElement ?.parentElement.id ?? document.querySelector(".solves").childNodes[0].id) - 1, 1);
		sessions[currentSessionIdx].scrambles.splice(sessions[currentSessionIdx].scrambles.length - parseInt(this.parentElement ?.parentElement.id ?? document.querySelector(".solves").childNodes[0].id) - 1, 1);

		localStorage.setItem("speedtimer", JSON.stringify(sessions));

		// uppParent2.style.display = "none";

		generateStats();
		generateTimes();
	}
}

function showScram() {
	var uppParent1 = this.parentElement;
	var uppParent2 = uppParent1.parentElement;

	var idx = parseInt(uppParent2.id);

	alert(format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]) + "\n" + sessions[currentSessionIdx].scrambles[sessions[currentSessionIdx].scrambles.length - idx - 1]);
}
