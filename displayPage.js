var timer = document.querySelector(".digits");

var timing = false;
var time = 0;
var running = 0;

window.addEventListener('keydown', function (e) {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault();
	}
});

localStorage.setItem("stackmat", JSON.stringify(true));

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

		window.location.href = "tools.html";

		localStorage.setItem("inputType", "timer");

		document.getElementById("overlay3").style.display = "none";
		document.querySelector(".stackmatCheck").style.display = "none";
	}
} else {
	localStorage.setItem("inputType", "timer");
	localStorage.setItem("stackmat", JSON.stringify(false));
}

var clear = ['Escape'];
	
document.onkeydown = function (e) {
    if (e.key == clear[0]) {
        timer.innerHTML = "00:00.00";
    }
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