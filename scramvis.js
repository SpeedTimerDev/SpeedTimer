import { createCube } from "./visualiser.js";
import { perform } from "./visualiser.js";

var scramble = document.querySelector(".scramble");
var view = document.querySelector(".view");
var typeBox = document.querySelector(".types");

var viewBox = document.querySelector(".viewBox");

let scramText;

view.value = "2D";
typeBox.value = "3x3";

const queryString = window.location.search;

if(queryString.indexOf("?") > -1) {
    const urlParams = new URLSearchParams(queryString);
    var scramble2 = urlParams.get('scramble');
    var view2 = urlParams.get('view');
    var type2 = urlParams.get('type');

    var getScram = window.atob(scramble2);
    scramble.value = getScram;

    var getView = window.atob(view2);
    view.value = getView;

    var getType = window.atob(type2);
    typeBox.value = getType;

    tick();
} else {
    createCube(3, "viewBox");
    perform("");
}

var codes = {
    py: 'pyraminx',
    sk: 'skewb',
    cl: 'clock',
    me: 'megaminx',
    sq: 'square1',
}

typeBox.onchange = function () { tick(); }

view.onchange = function () { tick(); }

scramble.oninput = function () { tick(); }

function tick() {  
    var type = typeBox.value.slice(0, 2);

    scramText = scramble.value;

    if(!isNaN(type.slice(0, 1))) {
        if (view.value == "2D") {
            createCube(parseInt(type), "viewBox");
            perform(scramText);
        } else {
            viewBox.innerHTML = '<twisty-player camera-distance = "7" background = "none" control-panel = "none" style = "height: 100%; width: 100%;" experimental-setup-alg="' + scramText + '"' + '" puzzle="' + type.slice(0, 1) + 'x' + type.slice(0, 1) + 'x' + type.slice(0, 1) + '"></twisty-player>';
        }
    } else {
		if (view.value == "2D") {
			viewBox.innerHTML = '<twisty-player camera-distance = "7" visualization="2D" background = "none" control-panel = "none" style = "height: 85%; width: 85%;" experimental-setup-alg="' + scramText + '" puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
		} else {
			viewBox.innerHTML = '<twisty-player camera-distance = "7" background = "none" control-panel = "none" style = "height: 100%; width: 100%;" experimental-setup-alg="' + scramText + '" puzzle="' + codes[type.toLowerCase()] + '"></twisty-player>';
		}
    }
}

document.getElementById("generateLink").addEventListener("click", function() {
    let scrambleData, viewData, typeData;

    scrambleData = window.btoa(scramble.value);
    viewData = window.btoa(view.value);
    typeData = window.btoa(typeBox.value);

    var link = window.location;

	var shareLink = link + '?scramble=' + scrambleData + '&view=' + viewData + '&type=' + typeData;

    copyItem(shareLink);
});

async function copyItem(text) {
	const success = await navigator.clipboard.writeText(text)
	
	document.querySelector(".copied").classList.add("show");

	var copyTimeout = window.setTimeout(function () {
		document.querySelector(".copied").classList.remove("show");
	}, 2000);
};