var timer = document.querySelector(".digits");

var timing = false;
var time = 0;
var running = 0;

window.addEventListener('keydown', function (e) {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault();
	}
});

// Stackmat Set

if(JSON.parse(localStorage.stackmat)) {
	document.getElementById("overlay3").style.display = "block";
	document.querySelector(".stackmatCheck").style.display = "block";

	document.querySelector(".btnYesStack").onclick = function() {
		stackmat.init();
		
		document.title = "Timer - Using Stackmat";

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

// Actual Normal Timer

if(localStorage.inputType == "digits") {
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
	
	var clear = ['Escape'];
	
	document.onkeydown = function (e) {
		if (e.key == clear[0]) {
			timer.innerHTML = "00:00.00";
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
	
	async function copyItem(text) {
		const success = await navigator.clipboard.writeText(text)
		
		document.querySelector(".copied").classList.add("show");
	
		var copyTimeout = window.setTimeout(function () {
			document.querySelector(".copied").classList.remove("show");
		}, 2000);
	};
	
	document.querySelector(".copyTime").onclick = function () {  
		copyItem(timer.innerHTML);
	};
}

// Stackmat

var stackmatRunning = false;
var on = false;

if(JSON.parse(localStorage.stackmat)) {
	runStackmat();
}

function runStackmat() {  
	stackmat.setCallBack(SMCallback);

    function SMCallback(state) {
			var tempMins = Math.floor(state.time_milli / 60000);

            var tempTime = (state.time_milli - (tempMins * 60000)).toString();
            timer.innerHTML = stackmatFormat(tempTime.slice(0, tempTime.length - 1), tempMins) + tempTime.slice(tempTime.length - 1, tempTime.length);

            stackmatRunning = true;

        if(state.time_milli == 0) {
            timer.innerHTML = "00:00.000";
        }

		if(!state.on) {
			timer.innerHTML = "---------";
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