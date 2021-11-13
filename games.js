var algDb = {
	pll: {
		algs: ["x R' U R' D2 R U' R' D2 R2 x'",
			"x R2' D2 R U R' D2 R U' R x'",
			"x' R U' R' D R U R' D' R U R' D R U' R' D' x",
			"R' U R U' R2' F' U' F U R F R' F' R2",
			"R2 U R' U R' U' R U' R2 D U' R' U R D'",
			"R' d' F R2 u R' U R U' R u' R2'",
			"R2 u' R U' R U R' u R2 f R' f'",
			"R U R' U' D R2 U' R U' R' U R' U R2 D'",
			"M2' U' M2' U2' M2' U' M2'",
			"x R2' F R F' R U2' r' U r U2' x'",
			"R U R' F' R U R' U' R' F R2 U' R'",
			"R F U' R' U R U F' R2' F' R U R U' R' F",
			"r' D' F r U' r' F' D r2 U r' U' r' F r F'",
			"R U' R' U' R U R D R' U' R D' R' U2 R'",
			"R' U2 R' D' R U' R' D R U R U' R' U' R",
			"R U R' U' R' F R2 U' R' U' R U R' F'",
			"M2' U M U2' M' U M2'",
			"M2' U' M U2' M' U' M2'",
			"R' U R' U' R D' R' D R' U D' R2 U' R2' D R2",
			"F R' F R2 U' R' U' R U R' F' R U R' U' F'",
			"M2' U2' M U' M2' U' M2' U' M",
		],
	},
}

var gameScreen = document.querySelector(".gameScreen");
var gameInfo = document.querySelector(".gameInfo");
var closeBtn = document.querySelector(".gameScreenClose");

var pllRecogBtn = document.getElementById("pllRecog");

var perms = ["aa perm", "ab perm", "e perm", "f perm", "ga perm", "gb perm", "gc perm", "gd perm", "h perm", "ja perm", "jb perm", "na perm", "nb perm", "ra perm", "rb perm", "t perm", "ua perm", "ub perm", "v perm", "y perm", "z perm"];
var imgs = ["aaperm.jpg", "abperm.jpg", "eperm.jpg", "fperm.jpg", "gaperm.jpg", "gbperm.jpg", "gcperm.jpg", "gdperm.jpg", "hperm.jpg", "japerm.jpg", "jbperm.jpg", "naperm.jpg", "nbperm.jpg", "raperm.jpg", "rbperm.jpg", "tperm.jpg", "uaperm.jpg", "ubperm.jpg", "vperm.jpg", "yperm.jpg", "zperm.jpg"];

var timeTick;

var score = 0;
var progress = 1;
var max = 10;
var time = 0;
var correct = 0;

document.querySelector(".gameInfoClose").addEventListener("click", function () {
    gameInfo.style.display = "none";
    document.getElementById("overlay5").style.display = "none";
});

document.querySelector(".gameScoresClose").addEventListener("click", function () {
    document.querySelector(".gameScores").style.display = "none";
    document.getElementById("overlay6").style.display = "none";
});

document.querySelector(".gameItemInfo").addEventListener("click", function () {
    gameInfo.style.display = "flex";
    document.getElementById("overlay5").style.display = "block";

    if (this.id == "pllRecogInfo") {
        document.querySelector(".gameInfoTitle").innerHTML = "How to Play the PLL Recognition Game";

        document.querySelector(".gameInfoText").innerHTML = "This game is about selecting the correct PLL case based on the image. You will be presented with an image of a PLL case, and 4 options. You will have to select the correct of the 4 options. You face a 2 second penalty for each incorrect answer. There are 10 questions in total. Get the fastest time!";
    }
});

document.querySelector("#pllRecogScores").addEventListener("click", function () {
    document.querySelector(".gameScores").style.display = "flex";
    document.getElementById("overlay6").style.display = "block";

    if(localStorage.pllRecogCorrect == null) {
        document.getElementById("score2").innerHTML = "No Scores Yet";
        document.getElementById("time2").innerHTML = "No Times Yet";
    } else {
        document.getElementById("score2").innerHTML = "Score: " + JSON.parse(localStorage.pllRecogCorrect).toString() + "/" + max.toString() + " (" + Math.round(((JSON.parse(localStorage.pllRecogCorrect) / max)) * 100).toString() + "%)";
        document.getElementById("time2").innerHTML = "Time Taken: " + JSON.parse(localStorage.pllRecogTime).toString() + "s";
    }
});

closeBtn.addEventListener("click", function () {
    gameScreen.style.display = "none";
    document.getElementById("overlay4").style.display = "none";

    document.querySelector(".left").style.display = "none";
    document.querySelector(".right").style.display = "none";

    score = 0;
    progress = 1;
    max = 10;
    time = 0;
    correct = 0;

    window.clearInterval(timeTick);
});

pllRecogBtn.addEventListener("click", function () {
    gameScreen.style.display = "flex";
    document.getElementById("overlay4").style.display = "block";

    startPLLRecogGame();
});

function startPLLRecogGame() {
    document.querySelector(".left").style.display = "none";
    document.querySelector(".right").style.display = "none";
    document.querySelector("#finalScore").style.display = "none";

    var startBtn = document.createElement("button");
    startBtn.classList.add("startBtn");
    startBtn.innerHTML = '<span>Start</span><i class="fas fa-play"></i>';
    startBtn.addEventListener("click", PLLRecogGame);

    document.querySelector(".gamePLL").appendChild(startBtn);
};

function PLLRecogGame() {
    document.querySelector(".startBtn").style.justifyContent = "center";

    var countdown = 2;

    document.querySelector(".startBtn").innerHTML = "3";

    var startCountDown = setInterval(function () {
        if (countdown > 0) {
            document.querySelector(".startBtn").innerHTML = countdown;
        } else {
            clearInterval(startCountDown);

            clearInterval(timeTick);

            timeTick = window.setInterval(function tick() {
                time++;

                document.querySelector(".time").innerHTML = "Time Elasped: " + time.toString() + "s";
            }, 1000);

            document.querySelector(".progress").innerHTML = "Progress: " + progress.toString() + "/" + max.toString();
            if (progress == 1) {
                document.querySelector(".score").innerHTML = "Score: 100%";
            } else {
                document.querySelector(".score").innerHTML = "Score: " + (correct / (progress - 1)) + "%";
            }
            document.querySelector(".time").innerHTML = "Time Elasped: " + time.toString() + "s";

            document.querySelector(".startBtn").style.display = "none";

            document.querySelector(".gamePLL").removeChild(document.querySelector(".startBtn"));

            countinuePLLRecogGame();
        }

        countdown--;
    }, 1000);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function countinuePLLRecogGame() {
    var options = document.querySelectorAll(".pllOption");
    for (i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "var(--blue)";
    }

    if (progress < max) {
        document.querySelector(".left").style.display = "flex";
        document.querySelector(".right").style.display = "block";

        var idx = randomNumber(0, perms.length);
        idx = Math.floor(idx);

        // document.getElementById("pllImg").src = "pll/" + imgs[idx];
		document.getElementById("pllView").alg = algDb.pll.algs[idx] + " x2";

        var options = ["pllO1", "pllO2", "pllO3", "pllO4"];

        for (i = 0; i < options.length; i++) {
            document.querySelector("." + options[i]).id = "";
        }

        var newPerms = [...perms];

        var correctAns = randomNumber(0, 4);
        correctAns = Math.floor(correctAns);

        document.querySelector("." + options[correctAns]).innerHTML = toTitleCase(perms[idx]);
        document.querySelector("." + options[correctAns]).id = "correct";

        options.splice(correctAns, 1);

        newPerms.splice(idx, 1);

        for (i = 0; i < options.length; i++) {
            var randomIdx = Math.floor(randomNumber(0, newPerms.length));
            var text = toTitleCase(newPerms[randomIdx]);

            newPerms.splice(randomIdx, 1);

            document.querySelector("." + options[i]).innerHTML = text;
        }

        options = ["pllO1", "pllO2", "pllO3", "pllO4"];

        for (i = 0; i < options.length; i++) {
            document.querySelector("." + options[i]).onclick = function () {
                if (this.id == "correct") {
                    pllRecogCorrect();
                } else {
                    this.style.backgroundColor = "darkred";

                    pllRecogIncorrect();
                }
            };
        }
    } else {
        pllRecogGameOver()
    }
}

function pllRecogCorrect() {
    progress += 1;
    correct += 1;

    document.querySelector(".progress").innerHTML = "Progress: " + progress.toString() + "/" + max.toString();
    if (progress == 1) {
        document.querySelector(".score").innerHTML = "Score: 100%";
    } else {
        document.querySelector(".score").innerHTML = "Score: " + Math.round(((correct / (progress - 1))) * 100).toString() + "%";
    }
    document.querySelector(".time").innerHTML = "Time Elasped: " + time.toString() + "s";

    countinuePLLRecogGame();
}

function pllRecogIncorrect() {
    progress += 1;

    options = ["pllO1", "pllO2", "pllO3", "pllO4"];

    for (i = 0; i < options.length; i++) {
        document.querySelector("." + options[i]).onclick = function () {};
    }

    document.querySelector(".time").innerHTML = "Time Elasped: " + time.toString() + "s";

    document.getElementById("correct").style.backgroundColor = "green";

    var pause = window.setTimeout(function () {
        document.getElementById("correct").style.backgroundColor = "var(--blue)";

        document.querySelector(".progress").innerHTML = "Progress: " + progress.toString() + "/" + max.toString();
        if (progress == 1) {
            document.querySelector(".score").innerHTML = "Score: 100%";
        } else {
            document.querySelector(".score").innerHTML = "Score: " + Math.round(((correct / (progress - 1))) * 100).toString() + "%";
        }

        countinuePLLRecogGame();        
    }, 2000);
}

function pllRecogGameOver() {
    window.clearInterval(timeTick);

    correct++;

    document.querySelector(".left").style.display = "none";
    document.querySelector(".right").style.display = "none";

    document.querySelector("#finalScore").style.display = "flex";

    document.getElementById("score").innerHTML = "You got " + correct.toString() + "/" + max.toString() + " (" + Math.round(((correct / max)) * 100).toString() + "%)";
    document.getElementById("time").innerHTML = "Time Taken: " + time.toString() + "s";

    if(localStorage.pllRecogCorrect == null) {
        localStorage.setItem("pllRecogCorrect", JSON.stringify(correct));
        localStorage.setItem("pllRecogTime", JSON.stringify(time));
    } else if (correct > JSON.parse(localStorage.pllRecogCorrect)) {
        localStorage.setItem("pllRecogCorrect", JSON.stringify(correct));
        localStorage.setItem("pllRecogTime", JSON.stringify(time));
    }
    
    if (JSON.parse(localStorage.pllRecogTime) > time && correct >= JSON.parse(localStorage.pllRecogCorrect)) {
        localStorage.setItem("pllRecogCorrect", JSON.stringify(correct));
        localStorage.setItem("pllRecogTime", JSON.stringify(time));
    }
}