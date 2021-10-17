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
}

var exportBtn = document.getElementById("exportData");
exportBtn.addEventListener("click", function () {
	var ses = JSON.parse(localStorage.getItem("speedtimer"));

	var sessions = [];

	for (i = 0; i < ses.length; i++) {
		sessions.push(ses[i].name)
	}

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

	var wb = XLSX.utils.book_new();

	wb.Props = {
		Title: "speedtimer_data " + today + ".xlsx",
		Subject: "speedtimer solve data",
		Author: "speedtimer",
		CreatedDate: Date.now(),
	};

	for (i = 0; i < sessions.length; i++) {
		var texts = [];
		var text = [];

		wb.SheetNames.push(sessions[i]);

		text.push("Solve No.");
		text.push("Time");
		text.push("Scramble");
		text.push("Type");

		texts.push(text)

		for (x = ses[i].times.length - 1; x >= 0; x--) {
			text = [];

			text.push((ses[i].times.length - x).toString());
			text.push(format(ses[i].times[x]));
			text.push((ses[i].scrambles[x]).slice(0, ses[i].scrambles[x].length - 3));
			text.push(ses[i].type);

			texts.push(text);
		}

		var ws_data = texts;

		var ws = XLSX.utils.aoa_to_sheet(ws_data);

		wb.Sheets[sessions[i]] = ws;
	}

	var wbout = XLSX.write(wb, {
		bookType: 'xlsx',
		type: 'binary'
	});

	function s2ab(s) {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i = 0; i < s.length; i++) {
			view[i] = s.charCodeAt(i) & 0xFF;
		}
		return buf;
	}

	saveAs(new Blob([s2ab(wbout)], {
		type: "application/octet-stream"
	}), "speedtimer_data " + today + '.xlsx');
});

// 	ses.forEach(e => {
// 		csv.push(e.name + "\n");
// 		for (let i = 0; i < e.times.length; i++) {
// 			var timeTemp = format(e.times[i]).toString();
// 			var scramTemp = "Scramble: " + e.scrambles[i]
// 			csv.push(`${timeTemp}, ${scramTemp.split("\n")}\n`)
// 		}
// 	});

// 	let csvContent = "data:text/csv;charset=utf-8," + csv;

// 	var encodedUri = encodeURI(csvContent);
// 	exportBtn.setAttribute("href", encodedUri);

// 	var today = new Date();
// 	var dd = today.getDate();
// 	var mm = today.getMonth() + 1;

// 	var yyyy = today.getFullYear();
// 	if (dd < 10) {
// 		dd = '0' + dd;
// 	}
// 	if (mm < 10) {
// 		mm = '0' + mm;
// 	}
// 	var today = dd + '/' + mm + '/' + yyyy;

// 	exportBtn.setAttribute("download", "speedtimer_data " + today + ".csv");