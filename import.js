function importTimes(input) {

	var fr = new FileReader();
	fr.onload = function () {
		console.log(fr.result);
	}

	fr.readAsText(input.files[0]);
}