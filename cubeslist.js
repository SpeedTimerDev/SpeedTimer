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

var number;

var two = document.getElementById("2x2");
two.addEventListener("click", twobytwo);
two.addEventListener("click", changeLable(2));

var three = document.getElementById("3x3");
three.addEventListener("click", threebythree);
three.addEventListener("click", changeLable(3));

var four = document.getElementById("4x4");
four.addEventListener("click", fourbyfour);

function changeLable(idx) {
    searchLable.innerHTML = idx.toString() + "x" + idx.toString();
}

threebythree();
searchLable.innerHTML = "3x3";

function threebythree() {
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

    popupClose.addEventListener("click", hidePopup);
    document.getElementById("sesName").value = "";
    changeLable(3);

    var cubes = [
        {
            Name: "Dayan Guhong V3 Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "54mm",
            Weight: "77.3g",
            Img: "cubeslist/dayanguhv3.jpeg",
            Price: "$11.95",
            Rating: "6/10",
        },
        {
            Name: "Dayan Guhong V4 Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "66.5g",
            Img: "cubeslist/dayanguhv4.jpeg",
            Price: "$14.95",
            Rating: "9/10",
        },
        {
            Name: "Dayan Tengyun M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55mm",
            Weight: "77.3g",
            Img: "cubeslist/dayantengm.jpeg",
            Price: "$25.95",
            Rating: "8/10",
        },
        {
            Name: "Dayan Tengyun Magnetic V2 ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "83g",
            Img: "cubeslist/dayantengmv2.jpeg",
            Price: "$31.95",
            Rating: "8/10",
        },
        {
            Name: "Gan 11 M Pro ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "63g",
            Img: "cubeslist/gan11.jpeg",
            Price: "$64.95",
            Rating: "9/10",
        },
        {
            Name: "Gan 354 Magnetic V2 ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "54mm",
            Weight: "77g",
            Img: "cubeslist/gan354v2.jpeg",
            Price: "$34.95",
            Rating: "7/10",
        },
        {
            Name: "Gan 356 Air M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "68g",
            Img: "cubeslist/ganairm.jpeg",
            Price: "$33.95",
            Rating: "8/10",
        },
        {
            Name: "Gan 356 Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "74g",
            Img: "cubeslist/ganm.jpeg",
            Price: "$32.95",
            Rating: "8/10",
        },
        {
            Name: "Gan 356 Magnetic LITE ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "74g",
            Img: "cubeslist/ganmlite.jpeg",
            Price: "$27.95",
            Rating: "8/10",
        },
        {
            Name: "Gan 356 RS ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "72g",
            Img: "cubeslist/ganrs.jpeg",
            Price: "$16.95",
            Rating: "5/10",
        },
        {
            Name: "Gan 356 X Magnetic V2 ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "80g",
            Img: "cubeslist/ganxv2.jpeg",
            Price: "$39.95",
            Rating: "8/10",
        },
        {
            Name: "Gan 356 XS ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "68g",
            Img: "cubeslist/ganxs.jpeg",
            Price: "$49.95",
            Rating: "9/10",
        },
        {
            Name: "Gan Speed Cube (GSC) ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "57mm",
            Weight: "83g",
            Img: "cubeslist/gansc.jpeg",
            Price: "$20.95",
            Rating: "7/10",
        },
        {
            Name: "Guoguan Yuexiao EDM ",
            Magnets: "Yes",
            Stickerless: "No",
            Size: "55.5mm",
            Weight: "72g",
            Img: "cubeslist/ganedm.jpeg",
            Price: "$24.95",
            Rating: "6/10",
        },
        {
            Name: "Mofang Jiaoshi Meilong Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "71.8g",
            Img: "cubeslist/meilongmag.jpeg",
            Price: "$6.95",
            Rating: "7/10",
        },
        {
            Name: "Monster Go Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "85g",
            Img: "cubeslist/monsterm.jpeg",
            Price: "$19.95",
            Rating: "7/10",
        },
        {
            Name: "Monster Go Traditional ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "81g",
            Img: "cubeslist/monstergot.jpeg",
            Price: "$11.95",
            Rating: "6/10",
        },
        {
            Name: "Moyu RS3M 2020 ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "86g",
            Img: "cubeslist/moyurs3m.jpeg",
            Price: "$8.95",
            Rating: "6/10",
        },
        {
            Name: "Moyu Weilong GTS2 ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "80.2g",
            Img: "cubeslist/gts2.jpeg",
            Price: "$19.95",
            Rating: "7/10",
        },
        {
            Name: "Moyu Weilong GTS2 M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "92g",
            Img: "cubeslist/gts2m.jpeg",
            Price: "$25.95",
            Rating: "8/10",
        },
        {
            Name: "Moyu Weilong GTS3 ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "84g",
            Img: "cubeslist/gts3.jpeg",
            Price: "$29.95",
            Rating: "5/10",
        },
        {
            Name: "Moyu Weilong GTS3M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "92g",
            Img: "cubeslist/gts3m.jpeg",
            Price: "$34.95",
            Rating: "8/10",
        },
        {
            Name: "Moyu Weilong WR ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "80g",
            Img: "cubeslist/wr.jpeg",
            Price: "$29.95",
            Rating: "5/10",
        },
        {
            Name: "Moyu Weilong WR M 2020 ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55mm",
            Weight: "Unknown",
            Img: "cubeslist/wrm2020.jpeg",
            Price: "$34.95",
            Rating: "8/10",
        },
        {
            Name: "Moyu Weilong WR M Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "90g",
            Img: "cubeslist/wrmm.jpeg",
            Price: "$38.95",
            Rating: "7/10",
        },
        {
            Name: "MsCube MS3-V1 M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "79g",
            Img: "cubeslist/mscubes.jpeg",
            Price: "$29.95",
            Rating: "7/10",
        },
        {
            Name: "MsCube MS3-V1 M Enhanced ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "74g",
            Img: "cubeslist/mscubee.jpeg",
            Price: "$34.95",
            Rating: "8/10",
        },
        {
            Name: "Qiyi MS Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "57mm",
            Weight: "81.8g",
            Img: "cubeslist/qiyimsm.jpeg",
            Price: "$7.95",
            Rating: "7/10",
        },
        {
            Name: "Qiyi Thunderclap V3 M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "89g",
            Img: "cubeslist/thunderv3.jpeg",
            Price: "$9.95",
            Rating: "7/10",
        },
        {
            Name: "Qiyi Valk 3 ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "82.3g",
            Img: "cubeslist/valk3.jpeg",
            Price: "$19.95",
            Rating: "7/10",
        },
        {
            Name: "Qiyi Valk 3 Elite M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "76g",
            Img: "cubeslist/valkelite.jpeg",
            Price: "$44.95",
            Rating: "9/10",
        },
        {
            Name: "Qiyi Valk 3 M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "85g",
            Img: "cubeslist/valk3.jpeg",
            Price: "$24.95",
            Rating: "8/10",
        },
        {
            Name: "Qiyi Valk 3 Power ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "87.4g",
            Img: "cubeslist/valkpower.jpeg",
            Price: "$24.95",
            Rating: "5/10",
        },
        {
            Name: "Qiyi Valk 3 Power M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "94.4g",
            Img: "cubeslist/powerm.jpeg",
            Price: "$38.95",
            Rating: "6/10",
        },
        {
            Name: "Qiyi Wuwei M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55mm",
            Weight: "90g",
            Img: "cubeslist/wuweim.jpeg",
            Price: "$14.95",
            Rating: "8/10",
        },
        {
            Name: "YJ MGC Elite Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "87g",
            Img: "cubeslist/mgcem.jpeg",
            Price: "$22.95",
            Rating: "8/10",
        },
        {
            Name: "YJ MGC Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "85.8g",
            Img: "cubeslist/mgcm.jpeg",
            Price: "$14.95",
            Rating: "7/10",
        },
        {
            Name: "YJ Yulong V2 Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "88.9g",
            Img: "cubeslist/yulongv2.jpeg",
            Price: "$7.95",
            Rating: "7/10",
        },
        {
            Name: "YJ Zhilong Mini Magnetic ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "57.5g",
            Img: "cubeslist/zhilongmini.jpeg",
            Price: "$7.95",
            Rating: "8/10",
        },
        {
            Name: "Yuxin Kylin V2 M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "82.4g",
            Img: "cubeslist/kylinv2.jpeg",
            Price: "$9.95",
            Rating: "7/10",
        },
        {
            Name: "Yuxin Little Magic ",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "71.8g",
            Img: "cubeslist/lm.jpeg",
            Price: "$4.95",
            Rating: "6/10",
        },
        {
            Name: "Yuxin Little Magic M ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55.5mm",
            Weight: "78g",
            Img: "cubeslist/littlemagic.jpeg",
            Price: "$7.95",
            Rating: "8/10",
        },
        {
            Name: "Moyu RS3M 2021 Maglev ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "92g",
            Img: "cubeslist/rs3mlaglev.jpeg",
            Price: "$13.99",
            Rating: "7/10",
        },
        {
            Name: "Moyu Weilong WR M 2021 Maglev ",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "55mm",
            Weight: "84g",
            Img: "cubeslist/wrmmaglev.jpeg",
            Price: "$29.99",
            Rating: "8/10",
        },
        {
            Name: "Gan i3",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "88g",
            Img: "cubeslist/gani3.jpeg",
            Price: "$62.99",
            Rating: "9/10",
        },
        {
            Name: "Gan 12 Maglev",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "66g",
            Img: "cubeslist/ganmaglev.jpeg",
            Price: "$77.99",
            Rating: "9/10",
        },
        {
            Name: "Gan 12 M Leap",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "61g",
            Img: "cubeslist/ganmleap.jpeg",
            Price: "$66.99",
            Rating: "8/10",
        },
        {
            Name: "Gan Mini M Pro",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "53mm",
            Weight: "54g",
            Img: "cubeslist/ganminim.jpeg",
            Price: "$54.99",
            Rating: "7/10",
        },
        {
            Name: "Monster Go AI",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "81g",
            Img: "cubeslist/monsterai.jpeg",
            Price: "$27.99",
            Rating: "8/10",
        },
        {
            Name: "Gan 11 M Duo",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "60g",
            Img: "cubeslist/gan11duo.jpeg",
            Price: "$46.99",
            Rating: "7/10",
        },
        {
            Name: "Gan 11 M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "56g",
            Img: "cubeslist/gan11blank.jpeg",
            Price: "$34.99",
            Rating: "6/10",
        },
        {
            Name: "Gan 11 Air",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "50g",
            Img: "cubeslist/gan11air.jpeg",
            Price: "$23.99",
            Rating: "5/10",
        },
        {
            Name: "Dayan Zhanchi Pro M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "77g",
            Img: "cubeslist/zhanchipro.jpeg",
            Price: "$34.99",
            Rating: "8/10",
        },
        {
            Name: "Gan 356 i Carry",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "56mm",
            Weight: "77.5g",
            Img: "cubeslist/ganicarry.jpeg",
            Price: "$36.99",
            Rating: "8/10",
        },
    ];

    var listInfo = [];

    for (i = 0; i < cubes.length; i++) {
        listInfo.push(i);
    }

    cubes.sort(function (a, b) {
        val1 = a.Name.toUpperCase();
        val2 = b.Name.toUpperCase();
        return (val1 < val2) ? -1 : (val1 > val2) ? 1: 0;
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

function twobytwo() {
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

    popupClose.addEventListener("click", hidePopup);
    document.getElementById("sesName").value = "";
    changeLable(2);

    var cubes = [
        {
            Name: "DaYan Tengyun M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "62g",
            Price: "$18.99",
            Rating: "9/10",
            Img: "cubeslist/dayanm.jpeg"
        },
        {
            Name: "GAN 249 V2",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "49mm",
            Weight: "52g",
            Price: "$15.99",
            Rating: "6/10",
            Img: "cubeslist/gan249v2.jpeg"
        },
        {
            Name: "GAN 249 V2 M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "49mm",
            Weight: "55.9g",
            Price: "$22.99",
            Rating: "7/10",
            Img: "cubeslist/gan249v2m.jpeg"
        },
        {
            Name: "GAN 251 M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "50g",
            Price: "$21.99",
            Rating: "8/10",
            Img: "cubeslist/gan251m.jpeg"
        },
        {
            Name: "GAN 251 M Explorer",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "55.6g",
            Price: "$29.99",
            Rating: "9/10",
            Img: "cubeslist/gan251ex.jpeg"
        },
        {
            Name: "Qiyi MS",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "58.7g",
            Price: "$6.99",
            Rating: "7/10",
            Img: "cubeslist/qiyims2.jpeg"
        },
        {
            Name: "Qiyi Valk 2 LM",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "80.9g",
            Price: "$19.99",
            Rating: "8/10",
            Img: "cubeslist/valklm.jpeg"
        },
        {
            Name: "Qiyi Valk 2 M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "78.4g",
            Price: "$19.99",
            Rating: "9/10",
            Img: "cubeslist/valk2.jpeg"
        },
        {
            Name: "X-Man Flare M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "65.2g",
            Price: "$16.99",
            Rating: "8/10",
            Img: "cubeslist/xman2.jpeg"
        },
        {
            Name: "YJ MGC",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "66.7g",
            Price: "$9.99",
            Rating: "7/10",
            Img: "cubeslist/yjmgc.jpeg"
        },
        {
            Name: "YJ MGC Elite",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "Unknown",
            Price: "$19.99",
            Rating: "9/10",
            Img: "cubeslist/yjmgcel.jpeg"
        },
        {
            Name: "Yj YuPo V2 M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "65g",
            Price: "$6.99",
            Rating: "6/10",
            Img: "cubeslist/yupo2.jpeg"
        },
        {
            Name: "Yuxin Little Magic",
            Magnets: "No",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "70.2g",
            Price: "$4.99",
            Rating: "6/10",
            Img: "cubeslist/yuxinlm2.jpeg"
        },
        {
            Name: "Yuxin Little Magic M",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "74g",
            Price: "$6.99",
            Rating: "8/10",
            Img: "cubeslist/yuxinlmm.jpeg"
        },
        {
            Name: "Gan 251 M Leap",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "51g",
            Price: "$39.99",
            Rating: "9/10",
            Img: "cubeslist/251mleap.jpeg"
        },
        {
            Name: "Moyu Weipo WRS",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "62g",
            Price: "$14.99",
            Rating: "7/10",
            Img: "cubeslist/weipowrs.jpeg"
        },
        {
            Name: "Diansheng Solar S",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "50mm",
            Weight: "68g",
            Price: "$9.99",
            Rating: "7/10",
            Img: "cubeslist/solars.jpeg"
        },
        {
            Name: "GAN 251 M Pro",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "56g",
            Price: "$32.99",
            Rating: "9/10",
            Img: "cubeslist/251mpro.jpeg"
        },
        {
            Name: "GAN 251 M Air",
            Magnets: "Yes",
            Stickerless: "Yes",
            Size: "51mm",
            Weight: "49g",
            Price: "$23.99",
            Rating: "8/10",
            Img: "cubeslist/251mair.jpeg"
        },
    ];

    list.innerHTML = "";

    var listInfo = [];

    for (i = 0; i < cubes.length; i++) {
        listInfo.push(i);
    }

    cubes.sort(function (a, b) {
        val1 = a.Name.toUpperCase();
        val2 = b.Name.toUpperCase();
        return (val1 < val2) ? -1 : (val1 > val2) ? 1: 0;
    });

    popupClose.addEventListener("click", hidePopup);
    document.getElementById("sesName").value = "";

    function loadBars() {
        for (i = 0; i < listInfo.length; i++) {
            var iteralName = parseInt(listInfo[i]);
            listArrayName.push([cubes[iteralName]['Name']]);
            listArrayMagnets.push([cubes[iteralName]['Magnets']]);
            listArrayType.push([cubes[iteralName]['Type']]);
            listArrayStickerless.push([cubes[iteralName]['Stickerless']]);
            listArraySize.push(cubes[iteralName]['Size']);
            listArrayImage.push([cubes[iteralName]['Img']]);
            listArrayWeight.push([cubes[iteralName]['Weight']]);
            listArrayPrice.push([cubes[iteralName]['Price']]);
            listArrayRating.push([cubes[iteralName]['Rating']]);
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

function fourbyfour() {
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

    popupClose.addEventListener("click", hidePopup);
    document.getElementById("sesName").value = "";
    changeLable(4);

    var cubes = [
        {
            Name: "YJ MGC",
            Weight: "115g",
            Size: "60mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$19.99",
            Rating: "9/10",
            Img: "cubeslist/yjmgc4.jpeg"
        },
        {
            Name: "GAN 460",
            Weight: "139.5g",
            Size: "60mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$55.99",
            Rating: "6/10",
            Img: "cubeslist/gan460.jpeg"
        },
        {
            Name: "MoYu AoSu GTS2 M",
            Weight: "122g",
            Size: "61mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$29.99",
            Rating: "8/10",
            Img: "cubeslist/gts24.jpeg"
        },
        {
            Name: "MoYu Aosu WR M",
            Weight: "119.8g",
            Size: "59mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$42.99",
            Rating: "8/10",
            Img: "cubeslist/aosu.jpeg"
        },
        {
            Name: "MoYu RS4M",
            Weight: "180g",
            Size: "62mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$14.99",
            Rating: "5/10",
            Img: "cubeslist/rs4m.jpeg"
        },
        {
            Name: "Qiyi MS",
            Weight: "135.6g",
            Size: "62mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$11.99",
            Rating: "6/10",
            Img: "cubeslist/qiyims4"
        },
        {
            Name: "Qiyi Qiyuan",
            Weight: "148g",
            Size: "62mm",
            Stickerless: "Yes",
            Magnetic: "No",
            Price: "$7.99",
            Rating: "5/10",
            Img: "cubeslist/qiyuan.jpeg"
        },
        {
            Name: "Qiyi Qiyuan S",
            Weight: "132.6g",
            Size: "62mm",
            Stickerless: "Yes",
            Magnetic: "No",
            Price: "$7.99",
            Rating: "5/10",
            Img: "cubeslist/qiyuans.jpeg"
        },
        {
            Name: "Qiyi Qiyuan S V2",
            Weight: "119g",
            Size: "61.5mm",
            Stickerless: "Yes",
            Magnetic: "No",
            Price: "$6.99",
            Rating: "6/10",
            Img: "cubeslist/qiyuansv2.jpeg"
        },
        {
            Name: "Qiyi Valk",
            Weight: "142g",
            Size: "60mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$39.99",
            Rating: "7/10",
            Img: "cubeslist/valk4.jpeg"
        },
        {
            Name: "YJ YuSu",
            Weight: "159g",
            Size: "62.5mm",
            Stickerless: "Yes",
            Magnetic: "No",
            Price: "$8.99",
            Rating: "4/10",
            Img: "cubeslist/yusu.jpeg"
        },
        {
            Name: "YJ YuSu V2",
            Weight: "136g",
            Size: "61.5mm",
            Stickerless: "Yes",
            Magnetic: "No",
            Price: "$11.99",
            Rating: "7/10",
            Img: "cubeslist/yusuv2.jpeg"
        },
        {
            Name: "YJ Zhilong Mini",
            Weight: "96g",
            Size: "56mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$11.99",
            Rating: "8/10",
            Img: "cubeslist/zhilong4.jpeg"
        },
        {
            Name: "Yuxin Little Magic",
            Weight: "126.3g",
            Size: "60mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$9.99",
            Rating: "7/10",
            Img: "cubeslist/lm4.jpeg"
        },
        {
            Name: "X-Man Ambition M",
            Weight: "106g",
            Size: "60mm",
            Stickerless: "Yes",
            Magnetic: "Yes",
            Price: "$29.99",
            Rating: "9/10",
            Img: "cubeslist/xmanambition.jpeg"
        },
    ];

    list.innerHTML = "";

    var listInfo = [];

    for (i = 0; i < cubes.length; i++) {
        listInfo.push(i);
    }

    cubes.sort(function (a, b) {
        val1 = a.Name.toUpperCase();
        val2 = b.Name.toUpperCase();
        return (val1 < val2) ? -1 : (val1 > val2) ? 1: 0;
    });

    popupClose.addEventListener("click", hidePopup);
    document.getElementById("sesName").value = "";

    function loadBars() {
        for (i = 0; i < listInfo.length; i++) {
            var iteralName = parseInt(listInfo[i]);
            listArrayName.push([cubes[iteralName]['Name']]);
            listArrayMagnets.push([cubes[iteralName]['Magnets']]);
            listArrayType.push([cubes[iteralName]['Type']]);
            listArrayStickerless.push([cubes[iteralName]['Stickerless']]);
            listArraySize.push(cubes[iteralName]['Size']);
            listArrayImage.push([cubes[iteralName]['Img']]);
            listArrayWeight.push([cubes[iteralName]['Weight']]);
            listArrayPrice.push([cubes[iteralName]['Price']]);
            listArrayRating.push([cubes[iteralName]['Rating']]);
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