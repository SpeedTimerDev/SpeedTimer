//var ollBtn = document.getElementById("oll");
var pllBtn = document.getElementById("pll");

var version = "0.0.1";
localStorage.setItem("algVersion", version);

// if (localStorage.getItem("version") == null) {
//     localStorage.setItem("version", JSON.stringify(version));
// } else {
//     var version = JSON.parse(localStorage.getItem("version"));
// }

var database;

if (localStorage.getItem("algDatabase") == null) {
    createDatabase();

    localStorage.setItem("algDatabase", JSON.stringify(database));
} else {
    database = JSON.parse(localStorage.getItem("algDatabase"));

    if (version != "0.0.1") {
        createDatabase();
    }
}

function createDatabase() {
    database = {
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
            names: ["Aa", "Ab", "E", "F", "Ga", "Gb", "Gc", "Gd", "H", "Ja", "Jb", "Na", "Nb", "Ra", "Rb", "T", "Ua", "Ub", "V", "Y", "Z"],
            imgs: ["aaperm.jpg", "abperm.jpg", "eperm.jpg", "fperm.jpg", "gaperm.jpg", "gbperm.jpg", "gcperm.jpg", "gdperm.jpg", "hperm.jpg", "japerm.jpg", "jbperm.jpg", "naperm.jpg", "nbperm.jpg", "raperm.jpg", "rbperm.jpg", "tperm.jpg", "uaperm.jpg", "ubperm.jpg", "vperm.jpg", "yperm.jpg", "zperm.jpg"],
            rots: ["zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod"],
        },
        // oll: {
        //     algs: ["x R' U R' D2 R U' R' D2 R2 x'",
        //         "x R2' D2 R U R' D2 R U' R x'",
        //         "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
        //         "R' U R U' R2' F' U' F U R F R' F' R2",
        //         "R2 U R' U R' U' R U' R2 D U' R' U R D'",
        //         "R' d' F R2 u R' U R U' R u' R2'",
        //         "R2 u' R U' R U R' u R2 f R' f'",
        //         "R U R' U' D R2 U' R U' R' U R' U R2 D'",
        //         "M2' U' M2' U2' M2' U' M2'",
        //         "x R2' F R F' R U2' r' U r U2' x'",
        //         "R U R' F' R U R' U' R' F R2 U' R'",
        //         "R F U' R' U R U F' R2' F' R U R U' R' F",
        //         "r' D' F r U' r' F' D r2 U r' U' r' F r F'",
        //         "R U' R' U' R U R D R' U' R D' R' U2 R'",
        //         "R' U2 R' D' R U' R' D R U R U' R' U' R",
        //         "R U R' U' R' F R2 U' R' U' R U R' F'",
        //         "M2' U M U2' M' U M2'",
        //         "M2' U' M U2' M' U' M2'",
        //         "R' U R' U' R D' R' D R' U D' R2 U' R2' D R2",
        //         "F R' F R2 U' R' U' R U R' F' R U R' U' F'",
        //         "M2' U2' M U' M2' U' M2' U' M",
        //     ],
        //     names: ["Az", "Ab", "E", "F", "Ga", "Gb", "Gc", "Gd", "H", "Ja", "Jb", "Na", "Nb", "Ra", "Rb", "T", "Ua", "Ub", "V", "Y", "Z"],
        //     imgs: ["aaperm.jpg", "abperm.jpg", "eperm.jpg", "fperm.jpg", "gaperm.jpg", "gbperm.jpg", "gcperm.jpg", "gdperm.jpg", "hperm.jpg", "japerm.jpg", "jbperm.jpg", "naperm.jpg", "nbperm.jpg", "raperm.jpg", "rbperm.jpg", "tperm.jpg", "uaperm.jpg", "ubperm.jpg", "vperm.jpg", "yperm.jpg", "zperm.jpg"],
        //     rots: ["zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod", "zerod"],

        // },
    };
}

//pllBtn.addEventListener("click", loadAlgsPLL(database.pll.names, database.pll.algs, database.pll.imgs, database.pll.rots));
//ollBtn.addEventListener("click", loadAlgsPLL(database.oll.names, database.oll.algs, database.oll.imgs, database.oll.rots));

if (document.URL.includes("algs-3-pll")) {
    loadAlgsPLL(database.pll.names, database.pll.algs, database.pll.imgs, database.pll.rots);
}

function loadAlgsPLL(names, algors, images, rotations) {
    var algs = document.querySelector(".algs");
    algs.innerHTML = "";

    for (i = 0; i < algors.length; i += 3) {
        // Number 1

        // var algDuo = document.createElement("div");
        // algDuo.classList.add("algDuo");

        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        var algImg = document.createElement("img");
        algImg.classList.add("img");
        algImg.src = "pll/" + images[i];
        algImg.id = rotations[i];

        leftAlg.appendChild(algImg);

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = "Rotate";
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        leftAlg.appendChild(rot);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = names[i] + " Perm";

        rightAlg.appendChild(titleAlg);

        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];

        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";

        rightAlg.appendChild(changeAlg);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = "Edit Algorithm";
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        rightAlg.appendChild(edit);

        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);

        // Number 2

        if (algors[i + 1] != null) {
            var algDiv = document.createElement("div");
            algDiv.classList.add("alg");

            var leftAlg = document.createElement("div");
            leftAlg.classList.add("leftAlg");

            var algImg = document.createElement("img");
            algImg.classList.add("img");
            algImg.src = "pll/" + images[i + 1];
            algImg.id = rotations[i + 1];

            leftAlg.appendChild(algImg);

            var rot = document.createElement("button");
            rot.classList.add("rot");
            rot.innerHTML = "Rotate";
            rot.addEventListener("click", rotateImageAlg);
            rot.id = i;

            leftAlg.appendChild(rot);

            algDiv.appendChild(leftAlg);

            var rightAlg = document.createElement("div");
            rightAlg.classList.add("rightAlg");

            var titleAlg = document.createElement("div");
            titleAlg.classList.add("titleAlg");
            titleAlg.innerHTML = names[i + 1] + " Perm";

            rightAlg.appendChild(titleAlg);

            var algText = document.createElement("div");
            algText.classList.add("algText");
            algText.innerHTML = algors[i + 1];

            rightAlg.appendChild(algText);

            var changeAlg = document.createElement("textarea");
            changeAlg.classList.add("changeAlg");
            changeAlg.setAttribute('type', 'text');
            changeAlg.style.display = "none";

            rightAlg.appendChild(changeAlg);

            var edit = document.createElement("button");
            edit.classList.add("edit");
            edit.innerHTML = "Edit Algorithm";
            edit.addEventListener("click", changeAlgInput);
            edit.id = i;

            rightAlg.appendChild(edit);

            algDiv.appendChild(rightAlg);

            algs.appendChild(algDiv);
        }

        // Number 3

        if (algors[i + 2] != null) {
            var algDiv = document.createElement("div");
            algDiv.classList.add("alg");

            var leftAlg = document.createElement("div");
            leftAlg.classList.add("leftAlg");

            var algImg = document.createElement("img");
            algImg.classList.add("img");
            algImg.src = "pll/" + images[i + 2];
            algImg.id = rotations[i + 2];

            leftAlg.appendChild(algImg);

            var rot = document.createElement("button");
            rot.classList.add("rot");
            rot.innerHTML = "Rotate";
            rot.addEventListener("click", rotateImageAlg);
            rot.id = i;

            leftAlg.appendChild(rot);

            algDiv.appendChild(leftAlg);

            var rightAlg = document.createElement("div");
            rightAlg.classList.add("rightAlg");

            var titleAlg = document.createElement("div");
            titleAlg.classList.add("titleAlg");
            titleAlg.innerHTML = names[i + 2] + " Perm";

            rightAlg.appendChild(titleAlg);

            var algText = document.createElement("div");
            algText.classList.add("algText");
            algText.innerHTML = algors[i + 2];

            rightAlg.appendChild(algText);

            var changeAlg = document.createElement("textarea");
            changeAlg.classList.add("changeAlg");
            changeAlg.setAttribute('type', 'text');
            changeAlg.style.display = "none";

            rightAlg.appendChild(changeAlg);

            var edit = document.createElement("button");
            edit.classList.add("edit");
            edit.innerHTML = "Edit Algorithm";
            edit.addEventListener("click", changeAlgInput);
            edit.id = i;

            rightAlg.appendChild(edit);

            algDiv.appendChild(rightAlg);

            algs.appendChild(algDiv);
        }

        // algs.appendChild(algDuo);
    }
}

function rotateImageAlg() {
    var img = this.previousElementSibling;
    rots = ["zerod", "ninetyd", "oneeightyd", "twoseventyd"];

    var cur = rots.indexOf(img.id);
    if (cur < 4) {
        cur++;
        img.id = rots[cur];
    } else {
        cur = 1;
        img.id = rots[cur];
    }

    database.pll.rots[parseInt(this.id)] = rots[cur];
    localStorage.setItem("algDatabase", JSON.stringify(database));
}

function changeAlgInput() {
    if (this.innerHTML == "Edit Algorithm") {
        var inputObj = this.previousElementSibling;
        var alg = inputObj.previousElementSibling;

        inputObj.style.display = "block";
        inputObj.value = alg.innerHTML;
        alg.style.display = "none";
        inputObj.id = "showInp";

        this.innerHTML = "confirm";
    } else {
        this.innerHTML = "Edit Algorithm";
        var inputObj = this.previousElementSibling;
        var newAlg = inputObj.value;
        var alg = inputObj.previousElementSibling;

        var prevAlg = alg.innerHTML;

        alg.style.display = "flex";

        if (newAlg == "") {
            alg.innerHTML = prevAlg;
        } else {
            alg.innerHTML = newAlg;
        }

        inputObj.style.display = "none";
        inputObj.id = "";
    }

    database.pll.algs[parseInt(this.id)] = alg.innerHTML;
    localStorage.setItem("algDatabase", JSON.stringify(database));
}

document.querySelector(".defaults").addEventListener("click", function restoreDefault() {
    var confr = confirm("Are You Sure you Want to Restore Defaults?")

    if (confr) {
        createDatabase();

        loadAlgsPLL(database.pll.names, database.pll.algs, database.pll.imgs, database.pll.rots)

        localStorage.setItem("algDatabase", JSON.stringify(database));
    }
});
