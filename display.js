// Visualiser

let n;
const createCube = (size) => {
	cube = [];
	n = size;
	const scale = 50;
	const xOff = 50;
	const yOff = 100;
	// document.querySelector(".scrambleShow").innerHTML = "";
	document.querySelector(".solveInfoPreview").innerHTML = "";
	document.querySelector(".solveInfoPreview").innerHTML = '<div class="up"></div><div class="middle"><div class="left"></div><div class="front"></div><div class="right"></div><div class="back"></div></div><div class="down"></div>';

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

window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const time = urlParams.get('time');
    const scramble = urlParams.get('scramble');
    const type = urlParams.get('type');

    let timeText = document.getElementById('time');
    timeText.innerText = window.atob(time);

    let scrambleText = document.getElementById('scramble');
    scrambleText.innerText = window.atob(scramble);

    let typeText = document.getElementById('type');
    typeText.innerText = window.atob(type);

	if(!isNaN(parseInt(window.atob(scramble).slice(window.atob(scramble).length - 1, window.atob(scramble).length)))) {
		document.querySelector(".solveInfoTime").innerHTML = format(sessions[currentSessionIdx].times[sessions[currentSessionIdx].times.length - idx - 1]);
		document.querySelector(".solveInfoType").innerHTML = scrambleText.slice(scrambleText.length - 3, scrambleText.length);
		document.querySelector(".solveInfoScramble").innerHTML = (scrambleText).slice(0, scrambleText.length - 3);

		createCube(parseInt(window.atob(type).slice(0, 1)));
		perform(window.atob(scramble).slice(0, window.atob(scramble).length - 4));
	} else if (window.atob(scramble).includes("Ot")) {
		document.querySelector(".solveInfoTime").innerHTML = window.atob(time);
		document.querySelector(".solveInfoType").innerHTML = "Other";
		document.querySelector(".solveInfoScramble").innerHTML = "";

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

		var sideEventName = codes[window.atob(type)];

		document.querySelector(".solveInfoTime").innerHTML = window.atob(time);
		document.querySelector(".solveInfoType").innerHTML = sideEventName;
		document.querySelector(".solveInfoScramble").innerHTML = window.atob(scramble);

		document.querySelector(".solveInfoPreview").innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 82.5%; width: 82.5%;" experimental-setup-alg="' + window.atob(scramble) + '"' + 'puzzle="' + codes2[window.atob(type)] + '"></twisty-player>';
	}
}