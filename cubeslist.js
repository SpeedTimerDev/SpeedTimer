function filterNames() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("sesName");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".listStuff");
    li = document.querySelectorAll(".listBar");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "none";
        }
    }
}

var popup = document.querySelector(".popupMain");
var popupClose = document.querySelector(".popupCloseButton");
var popupHTML = document.querySelector(".popupInner");

var searchLable = document.querySelector(".searchLable");
searchLable.innerHTML = "3x3";

var list = document.querySelector(".listStuff");

var listArrayName = [];
var listArrayMagnets = [];
var listArrayStickerless = [];
var listArrayType = [];
var listArraySize = [];
var listArrayImage = [];
var listArrayWeight = [];
var listArrayPrice = [];
var listArrayRating = [];
listArrayLinks = [];

var number;

var two = document.getElementById("2x2");
two.addEventListener("click", function () {
    loadAllItems(2);
});

var three = document.getElementById("3x3");
three.addEventListener("click", function () {
    loadAllItems(3);
});

var four = document.getElementById("4x4");
four.addEventListener("click", function () {
    loadAllItems(4);
});

function changeLable(idx) {
    searchLable.innerHTML = idx.toString() + "x" + idx.toString();
}

loadAllItems(3);

function loadAllItems(type) {
    list.innerHTML = "";

    listArrayName = [];
    listArrayMagnets = [];
    listArrayStickerless = [];
    listArrayType = [];
    listArraySize = [];
    listArrayImage = [];
    listArrayWeight = [];
    listArrayPrice = [];
    listArrayRating = [];
    listArrayLinks = [];

    popupClose.addEventListener("click", hidePopup);
    document.getElementById("sesName").value = "";

    changeLable(type);

    var cubes;

   if (type == 3) {
       cubes = cubesThree;
   } else if (type == 2) {
       cubes = cubesTwo;
   } else if (type == 4) {
       cubes = cubesFour;
   }

    var listInfo = [];

    for (i = 0; i < cubes.length; i++) {
        listInfo.push(i);
    }

    cubes.sort(function (a, b) {
        val1 = a.Name.toUpperCase();
        val2 = b.Name.toUpperCase();
        return (val1 < val2) ? -1 : (val1 > val2) ? 1 : 0;
    });

    function loadBars() {
        for (i = 0; i < listInfo.length; i++) {
            var iteralName = parseInt(listInfo[i]);
            listArrayName.push(cubes[iteralName]['Name']);
            listArrayMagnets.push(cubes[iteralName]['Magnets']);
            listArrayType.push(cubes[iteralName]['Type']);
            listArrayStickerless.push(cubes[iteralName]['Stickerless']);
            listArraySize.push(cubes[iteralName]['Size']);
            listArrayImage.push(cubes[iteralName]['Img']);
            listArrayWeight.push(cubes[iteralName]['Weight']);
            listArrayPrice.push(cubes[iteralName]['Price']);
            listArrayRating.push(cubes[iteralName]['Rating']);
            listArrayLinks.push(cubes[iteralName]['Link']);
        }

        for (i = 0; i < listArrayName.length; i++) {
            var listItem = document.createElement("div");
            listItem.classList.add("listBar");

            var listItemName = document.createElement("span");
            listItemName.classList.add("listName");
            listItemName.innerHTML = listArrayName[i];

            var listItemButton = document.createElement("div");
            listItemButton.classList.add("listInfo");
            listItemButton.id = listArrayName[i];
            listItemButton.addEventListener("click", openPopup);
            listItemButton.innerHTML = '<i class = "fas fa-info"></i>';

            listItem.appendChild(listItemName);
            listItem.appendChild(listItemButton);

            list.appendChild(listItem);
        }
    }

    loadBars();

    function searchStringInArray(str, strArray) {
        for (var j = 0; j < strArray.length; j++) {
            if (strArray[j] == (str)) {
                return j;
            }
        }
        return -1;
    }

    function openPopup() {
        popup.style.display = "inline-block";
        popupClose.style.display = "flex";

        var popupTitle = document.createElement("h1");
        popupTitle.innerHTML = this.id;
        popupTitle.classList.add("popupTitle");

        var popupSubSize = document.createElement("h3");
        number = searchStringInArray(this.id, listArrayName);
        popupSubSize.innerHTML = "Size: " + listArraySize[number];
        popupSubSize.classList.add("popupSub");

        var popupSubWeight = document.createElement("h3");
        number = searchStringInArray(this.id, listArrayName);
        popupSubWeight.innerHTML = "Weight: " + listArrayWeight[number];
        popupSubWeight.classList.add("popupSub");

        var popupSubPrice = document.createElement("h3");
        number = searchStringInArray(this.id, listArrayName);
        popupSubPrice.innerHTML = "Price: " + listArrayPrice[number];
        popupSubPrice.classList.add("popupSub");

        var popupSubRating = document.createElement("h3");
        number = searchStringInArray(this.id, listArrayName);
        popupSubRating.innerHTML = "Rating: " + listArrayRating[number];
        popupSubRating.classList.add("popupSub");

        var popupSubTwo = document.createElement("h3");
        number = searchStringInArray(this.id, listArrayName);
        popupSubTwo.innerHTML = "Magnets: " + listArrayMagnets[number];
        popupSubTwo.classList.add("popupSub");

        var popupSubThree = document.createElement("h3");
        number = searchStringInArray(this.id, listArrayName);
        popupSubThree.innerHTML = "Stickerless Option: " + listArrayStickerless[number];
        popupSubThree.classList.add("popupSub");

        var popupImage = document.createElement("img");
        number = searchStringInArray(this.id, listArrayName);
        popupImage.src = listArrayImage[number];
        popupImage.classList.add("popupImage");

        var popupLeft = document.createElement("div");
        popupLeft.classList.add("popupLeft");

        popupLeft.appendChild(popupTitle);
        popupLeft.appendChild(popupSubTwo);
        popupLeft.appendChild(popupSubThree);
        popupLeft.appendChild(popupSubSize);
        popupLeft.appendChild(popupSubWeight);
        popupLeft.appendChild(popupSubPrice);
        popupLeft.appendChild(popupSubRating);

        // if (listArrayLinks[number] != "none") {
        //     var linkA = document.createElement("a");
        //     linkA.classList.add("popupLink");
        //     linkA.innerHTML = "Use This Link for 5% Off!";
        //     linkA.href = listArrayLinks[number];
        //     linkA.target = "_blank";

        //     popupLeft.appendChild(linkA);
        // } else {
        //     var linkOOF = document.createElement("div");
        //     linkOOF.classList.add("popupSub");
        //     linkOOF.style.color = "#005ac7";
        //     linkOOF.innerHTML = "No Link Available";

        //     popupLeft.appendChild(linkOOF);
        // }

        popupHTML.appendChild(popupLeft);
        popupHTML.appendChild(popupImage);
    }

    function hidePopup() {
        popup.style.display = "none";
        popupClose.style.display = "none";
        popupHTML.innerHTML = "";
    }

    hidePopup();
}