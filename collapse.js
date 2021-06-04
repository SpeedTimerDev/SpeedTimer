if (localStorage.col == undefined) {
	localStorage.setItem("col", JSON.stringify(false));
	location.reload();
}
window.addEventListener('resize', collapse);
document.querySelector(".overlay").addEventListener("click", function () {
	document.querySelector(".overlay").style.display = "none";
	document.querySelector(".creditpopup").style.display = "none";
});

function collapse(manual = 0) {
	let collapsed = localStorage.getItem("col");
	if (manual != "First") document.querySelector("body").style.setProperty('--animDuration', '0.5s');
	if (collapsed == "false" && !manual) {
		close();
		localStorage.setItem("col", JSON.stringify(true));
	} else if (collapsed == "true" && !manual) {
		if (!manual) {
			open();
			localStorage.setItem("col", JSON.stringify(false));
		}
	} else if (collapsed == "false") {
		if (innerWidth < 1000) {
			close();
		} else {
			open();
		}
	}
};

if (JSON.parse(localStorage.getItem("col")) == true) { close(); }
collapse("First");

function open() {
	document.querySelector(".left").classList.remove("collapsed");
	[].slice.call(document.querySelector(".left").getElementsByTagName("*"), 0).forEach(e => e.classList.remove("collapsed"));
	document.querySelector(".collapse").innerHTML = `<i id="col" class="fas fa-angle-left"></i>`;
}

function close() {
	document.querySelector(".left").classList.add("collapsed");
	[].slice.call(document.querySelector(".left").getElementsByTagName("*"), 0).forEach(e => e.classList.add("collapsed"));
	document.querySelector(".collapse").innerHTML = `<i id="col" class="fas fa-angle-right"></i>`;
}

function credits() {
	document.querySelector(".overlay").style.display = "block";
	document.querySelector(".creditpopup").style.display = "block";
}

if(localStorage.getItem("speedtimer") == null && document.location.href != "index.html")
{
	document.location.href = "index.html";
}