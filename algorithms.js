var database = algData();

var testArray = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]

if (document.URL.includes("algs-3-oll")) {
    loadAlgsOLL(database.oll.names, database.oll.algs, database.oll.imgs, database.oll.rots);
} else if (document.URL.includes("algs-3-pll")) {
    loadAlgsPLL(database.pll.names, database.pll.algs, database.pll.imgs, database.pll.rots);
} else if (document.URL.includes("algs-3-2loll")) {
    loadAlgsLOLL(database.loll.names, database.loll.algs, database.loll.imgs, database.loll.rots);
} else if (document.URL.includes("algs-3-2lpll")) {
    loadAlgsLPLL(database.lpll.names, database.lpll.algs, database.lpll.imgs, database.lpll.rots);
}

function createLinks() {
    document.querySelector(".library").innerHTML = "";

    var links = ["algs-3-oll", "algs-3-pll", "algs-3-2loll", "algs-3-2lpll"];
    var names = ["OLL", "PLL", "2LOLL", "2LPLL"]

    for(i = 0; i < links.length; i++) {
        var libA = document.createElement("a");
        libA.classList.add("libraryA");
        libA.style.textDecoration = "none";
        libA.href = links[i] + ".html";
        libA.innerHTML = names[i];
        document.querySelector(".library").appendChild(libA);
    }
}

createLinks();

var algImgCol = localStorage.algImgCol;
document.body.style.setProperty("--algImgCol", algImgCol)

function loadAlgsPLL(names, algors, images, rotations) {
    var algs = document.querySelector(".algs");
    algs.innerHTML = "";

    for (i = 0; i < algors.length; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        var algImg = document.createElement("img");
        algImg.classList.add("img");
        algImg.classList.add("img" + i.toString());
        algImg.src = "pll/" + images[i];
        algImg.id = rotations[i];

        leftAlg.appendChild(algImg);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = names[i] + " Perm";

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.classList.add("pllALG");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }
}

function loadAlgsLPLL(names, algors, images, rotations) {
    var algs = document.querySelector(".algs");
    algs.innerHTML = "";

    var pieces = [0, 1, 1, 4];

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Right Corners";
    algs.appendChild(algSec);

    for (i = 0; i < pieces[1]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        var algImg = document.createElement("img");
        algImg.classList.add("img");
        algImg.classList.add("img" + i.toString());
        algImg.src = "pll/" + images[i];
        algImg.id = rotations[i];

        leftAlg.appendChild(algImg);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = names[i] + " Perm";

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.classList.add("pllALG");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Diagonal Corners";
    algs.appendChild(algSec);

    for (i = pieces[1]; i < pieces[1] + pieces[2]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        var algImg = document.createElement("img");
        algImg.classList.add("img");
        algImg.classList.add("img" + i.toString());
        algImg.src = "pll/" + images[i];
        algImg.id = rotations[i];

        leftAlg.appendChild(algImg);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = names[i] + " Perm";

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.classList.add("pllALG");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "EPLL";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2]; i < pieces[1] + pieces[2] + pieces[3]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        var algImg = document.createElement("img");
        algImg.classList.add("img");
        algImg.classList.add("img" + i.toString());
        algImg.src = "pll/" + images[i];
        algImg.id = rotations[i];

        leftAlg.appendChild(algImg);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = names[i] + " Perm";

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.classList.add("pllALG");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }
}

function loadAlgsOLL(names, algors, images, rotations) {
    var algs = document.querySelector(".algs");
    algs.innerHTML = "";

    var pieces = ["filler", 7, 8, 8, 2, 2, 2, 4, 6, 4, 4, 2, 2, 2, 4]

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Cross";
    algs.appendChild(algSec);

    for (i = 0; i < pieces[1]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Dot";
    algs.appendChild(algSec);

    for (i = pieces[1]; i < pieces[1] + pieces[2]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Square Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2]; i < pieces[1] + pieces[2] + pieces[3]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "T Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Fish Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "W Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Small Lightning Bolt";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Small L Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "I Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Knight Move Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Corners Oriented";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10] + pieces[11]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "C Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10] + pieces[11]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10] + pieces[11] + pieces[12]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Big Lightning Bolt";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10] + pieces[11] + pieces[12]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10] + pieces[11] + pieces[12] + pieces[13]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Awkward Shape";
    algs.appendChild(algSec);

    for (i = pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10] + pieces[11] + pieces[12] + pieces[13]; i < pieces[1] + pieces[2] + pieces[3] + pieces[4] + pieces[5] + pieces[6] + pieces[7] + pieces[8] + pieces[9] + pieces[10] + pieces[11] + pieces[12] + pieces[13] + pieces[14]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = "OLL " + names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }
}

function loadAlgsLOLL(names, algors, images, rotations) {
    var algs = document.querySelector(".algs");
    algs.innerHTML = "";

    var pieces = ["filler", 3, 7]

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Yellow Cross";
    algs.appendChild(algSec);

    for (i = 0; i < pieces[1]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }

    var algSec = document.createElement("div");
    algSec.classList.add("algSec");
    algSec.innerHTML = "Cross";
    algs.appendChild(algSec);

    for (i = pieces[1]; i < pieces[1] + pieces[2]; i++) {
        var algDiv = document.createElement("div");
        algDiv.classList.add("alg");

        var leftAlg = document.createElement("div");
        leftAlg.classList.add("leftAlg");

        generateCubeImage(images[i], leftAlg, rotations[i], "imgIdxNo" + i);

        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnDiv");

        var rot = document.createElement("button");
        rot.classList.add("rot");
        rot.innerHTML = '<i class="fas fa-redo-alt"></i>';
        rot.addEventListener("click", rotateImageAlg);
        rot.id = i;

        btnDiv.appendChild(rot);

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = '<i class="fas fa-edit"></i>';
        edit.addEventListener("click", changeAlgInput);
        edit.id = i;

        btnDiv.appendChild(edit);

        leftAlg.appendChild(btnDiv);

        algDiv.appendChild(leftAlg);

        var rightAlg = document.createElement("div");
        rightAlg.classList.add("rightAlg");

        var titleAlg = document.createElement("div");
        titleAlg.classList.add("titleAlg");
        titleAlg.innerHTML = names[i];

        rightAlg.appendChild(titleAlg);
        var algText = document.createElement("div");
        algText.classList.add("algText");
        algText.innerHTML = algors[i];
        algText.id = "algNo" + (i).toString();
        rightAlg.appendChild(algText);

        var changeAlg = document.createElement("textarea");
        changeAlg.classList.add("changeAlg");
        changeAlg.setAttribute('type', 'text');
        changeAlg.style.display = "none";
        changeAlg.id = "changeNo" + i.toString();
        rightAlg.appendChild(changeAlg);


        algDiv.appendChild(rightAlg);

        algs.appendChild(algDiv);
    }
}

function rotateImageAlg() {
    var alg = document.getElementById("algNo" + this.id);
    rots = ["zerod", "ninetyd", "oneeightyd", "twoseventyd"];

    var img;

    if (document.URL.includes("algs-3-pll")) {
        img = document.querySelector(".img" + this.id);
    } else {
        img = document.querySelector(".imgIdxNo" + this.id);
    }

    var cur = rots.indexOf(img.id);
    if (cur < 4) {
        cur++;
        img.id = rots[cur];
    } else {
        cur = 0;
        img.id = rots[cur];
    }

    if (document.URL.includes("algs-3-pll")) {
        database.pll.rots[parseInt(this.id)] = rots[cur];
    } else {
        database.oll.rots[parseInt(this.id)] = rots[cur];
    }
    localStorage.setItem("algDatabase", JSON.stringify(database));
}

function changeAlgInput() {
    if (this.innerHTML == '<i class="fas fa-edit"></i>') {
        var inputObj = document.getElementById("changeNo" + this.id);
        var alg = document.getElementById("algNo" + this.id);

        inputObj.style.display = "block";
        inputObj.value = alg.innerHTML;
        alg.style.display = "none";

        this.innerHTML = '<i class="fas fa-check-square"></i>';
    } else {
        this.innerHTML = '<i class="fas fa-edit"></i>';
        var inputObj = document.getElementById("changeNo" + this.id);
        var alg = document.getElementById("algNo" + this.id);
        var newAlg = document.getElementById("changeNo" + this.id).value;

        var prevAlg = alg.innerHTML;

        alg.style.display = "flex";

        if (newAlg == "") {
            alg.innerHTML = prevAlg;
        } else {
            alg.innerHTML = newAlg;
        }

        inputObj.style.display = "none";
    }

    if (document.URL.includes("algs-3-pll")) {
        database.pll.algs[parseInt(this.id)] = alg.innerHTML;
    } else {
        database.oll.algs[parseInt(this.id)] = alg.innerHTML;
    }
    localStorage.setItem("algDatabase", JSON.stringify(database));
}

function generateCubeImage(array, container, imgId, idxNo) {

    // Main Div

    var cubeImage = document.createElement("div");
    cubeImage.classList.add("cubeImage");

    // Top Row

    var topRow = document.createElement("div");
    topRow.classList.add("topRow");

    var smallPiece = document.createElement("div");
    smallPiece.classList.add("smallPiece");
    topRow.appendChild(smallPiece);

    var topPiece1 = document.createElement("div");
    topPiece1.classList.add("topPiece");
    topPiece1.id = array[1];
    topRow.appendChild(topPiece1);

    var topPiece2 = document.createElement("div");
    topPiece2.classList.add("topPiece");
    topPiece2.id = array[2];
    topRow.appendChild(topPiece2);

    var topPiece3 = document.createElement("div");
    topPiece3.classList.add("topPiece");
    topPiece3.id = array[3];
    topRow.appendChild(topPiece3);

    var smallPiece1 = document.createElement("div");
    smallPiece1.classList.add("smallPiece");
    topRow.appendChild(smallPiece1);

    cubeImage.appendChild(topRow);

    // Mid Row 1

    var midRow1 = document.createElement("div");
    midRow1.classList.add("midRow");

    var leftPiece1 = document.createElement("div");
    leftPiece1.classList.add("leftPiece");
    leftPiece1.id = array[4]
    midRow1.appendChild(leftPiece1);

    var midPiece1 = document.createElement("div");
    midPiece1.classList.add("midPiece");
    midPiece1.id = array[5];
    midRow1.appendChild(midPiece1);

    var midPiece2 = document.createElement("div");
    midPiece2.classList.add("midPiece");
    midPiece2.id = array[6];
    midRow1.appendChild(midPiece2);

    var midPiece3 = document.createElement("div");
    midPiece3.classList.add("midPiece");
    midPiece3.id = array[7];
    midRow1.appendChild(midPiece3);

    var rightPiece1 = document.createElement("div");
    rightPiece1.classList.add("rightPiece");
    rightPiece1.id = array[8]
    midRow1.appendChild(rightPiece1);

    cubeImage.appendChild(midRow1);

    // Mid Row 2

    var midRow2 = document.createElement("div");
    midRow2.classList.add("midRow");

    var leftPiece2 = document.createElement("div");
    leftPiece2.classList.add("leftPiece");
    leftPiece2.id = array[9]
    midRow2.appendChild(leftPiece2);

    var midPiece4 = document.createElement("div");
    midPiece4.classList.add("midPiece");
    midPiece4.id = array[10];
    midRow2.appendChild(midPiece4);

    var midPiece5 = document.createElement("div");
    midPiece5.classList.add("midPiece");
    midPiece5.id = array[11];
    midRow2.appendChild(midPiece5);

    var midPiece6 = document.createElement("div");
    midPiece6.classList.add("midPiece");
    midPiece6.id = array[12];
    midRow2.appendChild(midPiece6);

    var rightPiece2 = document.createElement("div");
    rightPiece2.classList.add("rightPiece");
    rightPiece2.id = array[13]
    midRow2.appendChild(rightPiece2);

    cubeImage.appendChild(midRow2);

    // Mid Row 3

    var midRow3 = document.createElement("div");
    midRow3.classList.add("midRow");

    var leftPiece3 = document.createElement("div");
    leftPiece3.classList.add("leftPiece");
    leftPiece3.id = array[14]
    midRow3.appendChild(leftPiece3);

    var midPiece7 = document.createElement("div");
    midPiece7.classList.add("midPiece");
    midPiece7.id = array[15];
    midRow3.appendChild(midPiece7);

    var midPiece8 = document.createElement("div");
    midPiece8.classList.add("midPiece");
    midPiece8.id = array[16];
    midRow3.appendChild(midPiece8);

    var midPiece7 = document.createElement("div");
    midPiece7.classList.add("midPiece");
    midPiece7.id = array[17];
    midRow3.appendChild(midPiece7);

    var rightPiece3 = document.createElement("div");
    rightPiece3.classList.add("rightPiece");
    rightPiece3.id = array[18]
    midRow3.appendChild(rightPiece3);

    cubeImage.appendChild(midRow3);

    // Bottom Row

    var bottomRow = document.createElement("div");
    bottomRow.classList.add("bottomRow");

    var smallPiece2 = document.createElement("div");
    smallPiece2.classList.add("smallPiece");
    bottomRow.appendChild(smallPiece2);

    var bottomPiece1 = document.createElement("div");
    bottomPiece1.classList.add("bottomPiece");
    bottomPiece1.id = array[19];
    bottomRow.appendChild(bottomPiece1);

    var bottomPiece2 = document.createElement("div");
    bottomPiece2.classList.add("bottomPiece");
    bottomPiece2.id = array[20];
    bottomRow.appendChild(bottomPiece2);

    var bottomPiece3 = document.createElement("div");
    bottomPiece3.classList.add("bottomPiece");
    bottomPiece3.id = array[21];
    bottomRow.appendChild(bottomPiece3);

    var smallPiece3 = document.createElement("div");
    smallPiece3.classList.add("smallPiece");
    bottomRow.appendChild(smallPiece3);

    cubeImage.appendChild(bottomRow);

    // Final Append

    cubeImage.id = imgId;
    cubeImage.classList.add(idxNo);

    container.appendChild(cubeImage);
}