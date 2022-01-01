import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";

var typeBox = document.querySelector(".types");
var scramble = document.querySelector(".scrambleBox");

let scramCode, scramTemp, universalScramble;

typeBox.value = "3x3";

createScram();

var codes = {
    py: 'pyram',
    sk: 'skewb',
    cl: 'clock',
    me: 'minx',
    sq: 'sq1',
}

typeBox.onchange = function() { createScram() };

async function createScram() {  
    var type = typeBox.value.slice(0, 2);

    if(!isNaN(type.slice(0, 1))) {
        scramCode = type.slice(0, 1) + type.slice(0, 1) + type.slice(0, 1);
        scramTemp = await randomScrambleForEvent(scramCode);
    } else {
		scramCode = codes[type.toLowerCase()];
        scramTemp = await randomScrambleForEvent(scramCode);
    }

    universalScramble = scramTemp;

    let scramText = scramTemp.toString();
	let scramArray = scramText.split(" ");

    if(!isNaN(type.slice(0, 1))) {
        scramble.innerHTML = "";

        scramble.style.lineHeight = "0.9";

        var mobileSize = 66.5 - parseInt(type);

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

            span.innerHTML = span.innerHTML + " ";

            scramble.appendChild(span);
        }
    } else {
        scramble.style.lineHeight = "1";

        scramble.innerHTML = scramTemp;
    }
}

document.getElementById("generateLink").addEventListener("click", function() {
    let generatedScram = universalScramble;

    copyItem(generatedScram);
});

async function copyItem(text) {
	const success = await navigator.clipboard.writeText(text)
	
	document.querySelector(".copied").classList.add("show");

	var copyTimeout = window.setTimeout(function () {
		document.querySelector(".copied").classList.remove("show");
	}, 2000);
};