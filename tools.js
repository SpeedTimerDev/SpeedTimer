var tools = ["Scramble Viewer", "Alg Viewer", "Timer", "Scramble Generator"];
var toolLinks = ["scrambleviewer", "algviewer", "timer", "scramblegenerator"];
var toolDescs = ["A lightweight online tool where you can enter your scramble and have it displayed in 2D or 3D. Works with all WCA puzzles.", "A lightweight online tool where you can enter your algorithm and have it display the case it solves in 2D or 3D. Works with all WCA puzzles.", "A webpage where you can simply time a single solve without having any data recorded. Like a stopwatch.", "Need a scramble? Choose your puzzle and have a WCA correct puzzle generated for you. Easily copyable."];

var toolInfoDiv = document.querySelector(".toolInfo");

document.querySelector(".toolInfoClose").addEventListener("click", function () {
    toolInfoDiv.style.display = "none";
    document.getElementById("overlay5").style.display = "none";
});

function generateTools() {
    var listContainer = document.querySelector(".toolsList");

    listContainer.innerHTML = "";

    for(i = 0; i < tools.length; i++) {
        var toolListItem = document.createElement("div");
        toolListItem.classList.add("toolItem");

        var toolName = document.createElement("span");
        toolName.innerHTML = tools[i];

        toolListItem.appendChild(toolName);

        var toolDiv = document.createElement("div");
        toolDiv.style.display = "flex";

        var toolInfo = document.createElement("button");
        toolInfo.classList.add("toolItemInfo");
        toolInfo.id = toolLinks[i] + i;
        toolInfo.addEventListener("click", function() {
            toolInfoDiv.style.display = "block";
            document.getElementById("overlay5").style.display = "block";

            document.querySelector(".toolInfoTitle").innerHTML = tools[parseInt(this.id.slice(this.id.length - 1, this.id.length))];
            document.querySelector(".toolInfoText").innerHTML = toolDescs[parseInt(this.id.slice(this.id.length - 1, this.id.length))];
        });
        toolInfo.innerHTML = '<i class="fas fa-info"></i>';

        toolDiv.appendChild(toolInfo);
        
        var toolStart = document.createElement("a");
        toolStart.classList.add("toolItemStart");
        toolStart.id = toolLinks[i] + i.toString();
        toolStart.target = "_blank";
        toolStart.href = window.location.origin + "/" + toolLinks[parseInt(i)] + ".html";
        toolStart.innerHTML = '<i class="fas fa-external-link-square-alt"></i>';

        toolDiv.appendChild(toolStart);

        toolListItem.appendChild(toolDiv);

        listContainer.appendChild(toolListItem);
    }
}

generateTools();