function format(time) {
	var temp = time.toString();
	var temp2;

	if (temp.length == 6) {
		temp2 = "Time: " + temp.slice(0, 2) + ":" + temp.slice(2, 4) + "." + temp.slice(4, 6);
		return temp2;
	} else if (temp.length == 5) {
		temp2 = "Time: " + "0" + temp.slice(0, 1) + ":" + temp.slice(1, 3) + "." + temp.slice(3, 5);
		return temp2;
	} else if (temp.length == 4) {
		temp2 = "Time: " + temp.slice(0, 2) + "." + temp.slice(2, 4);
		return temp2;
	} else if (temp.length == 3) {
		temp2 = "Time: " + temp.slice(0, 1) + "." + temp.slice(1, 3);
		return temp2;
	} else if (temp.length == 2) {
		temp2 = "Time: " + "0." + temp.slice(0, 2);
		return temp2;
	} else if (temp.length == 1) {
		temp2 = "Time: " + "0.0" + temp.slice(0, 1);
		return temp2;
	} else if (temp.includes == "DNF") {
		return "DNF";
	}
}

var exportBtn = document.getElementById("exportData");
exportBtn.addEventListener("click", function () {
	var ses = JSON.parse(localStorage.getItem("speedtimer"));
	var csv = [];

	ses.forEach(e => {
		csv.push(e.name + "\n");
		for (let i = 0; i < e.times.length; i++) {
			var timeTemp = format(e.times[i]).toString();
			var scramTemp = "Scramble: " + e.scrambles[i]
			csv.push(`${timeTemp}, ${scramTemp.split("\n")}\n`)
		}
	});

	let csvContent = "data:text/csv;charset=utf-8," + csv;

	var encodedUri = encodeURI(csvContent);
	exportBtn.setAttribute("href", encodedUri);

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;

	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var today = dd + '/' + mm + '/' + yyyy;

	exportBtn.setAttribute("download", "speedtimer_data " + today + ".csv");

	// exportBtn.click();
});