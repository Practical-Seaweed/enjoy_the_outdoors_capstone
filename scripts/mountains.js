"use strict"


window.onload = () => {

    /*
    You can remove the following console.log() lines.
    They are here to verify that we have access to the data
    The data script files are located in the scripts/data directory
*/
    initMountainsDropdown();


    // [ log the mountainsArray to the console (scripts/data/mountainData.js) ]
    console.log(mountainsArray)

    let mountainsDropdown = document.querySelector("#mountainsDropdown");
    mountainsDropdown.addEventListener("change", inputMountainData);


}
// [ this function should display my mountains name in the dropdown ]
function initMountainsDropdown() {
    let mountainsData = document.querySelector("#mountainsDropdown");
    mountainsData.innerHTML = "";  // This will clear the existing options

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Select a Mountain--";
    mountainsData.appendChild(defaultOption);

    mountainsArray.forEach(mountain => {
        let newOption = document.createElement("option");
        newOption.value = mountain.name;
        newOption.textContent = mountain.name;
        mountainsData.appendChild(newOption);
    });
}




// [ save for later ]
// [ need to get the mountainData in a div Card from bootstrap ]
function inputMountainData(event) {
    let selectedMountain = event.target.value;

    let matchingMountain = mountainsArray.find(mountain => mountain.name === selectedMountain);

    let mountainInfo = document.querySelector("#mountainInfo");
    mountainInfo.innerHTML = ""; // Clear previous content

    let tableBody = document.querySelector("#mountainInfo");
    tableBody.style.display = "block"; // Show the card
    
    tableBody.innerHTML = ""; // Clear existing content
    
    // [ this will hide my h3 element in mountains.html when choosing something from a dropdown ]
    let nothing = document.querySelector("#nothingInfo");

    if(event.target.value == 0){
        nothing.removeAttribute("style");
    }else {
        nothing.setAttribute("style","display: none");
    }


    if (matchingMountain) {
        let card = document.createElement("div");
        card.classList.add("card", "bg-dark", "text-light", "mx-auto", "w-25");

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header", "fw-bold", "text-center");
        cardHeader.textContent = matchingMountain.name;

        let cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top", "card-img-fit");
        cardImg.src = `images/${matchingMountain.img}`;
        cardImg.alt = matchingMountain.name;

        // [ card styling? cool, this adds style to my img, like css ]
        cardImg.style.width = "100%";

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "text-center");
        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = matchingMountain.desc;
        cardBody.appendChild(cardText);

        let listGroup = document.createElement("ul");
        listGroup.classList.add("list-group", "list-group-flush");

        let listItem1 = document.createElement("li");
        listItem1.classList.add("list-group-item", "list-group-item-dark", "fw-bold");
        listItem1.textContent = `Elevation: ${matchingMountain.elevation} feet`;

        let listItem2 = document.createElement("li");
        listItem2.classList.add("list-group-item", "list-group-item-dark", "fw-bold");
        listItem2.textContent = `Effort: ${matchingMountain.effort}`;

        let listItem3 = document.createElement("li");
        listItem3.classList.add("list-group-item", "list-group-item-dark", "fw-bold");
        listItem3.textContent = `Lat: ${matchingMountain.coords.lat}   Lng: ${matchingMountain.coords.lng}`;
        

        listGroup.append(listItem1, listItem2, listItem3);

        card.append(cardHeader, cardImg, cardBody, listGroup);
        mountainInfo.appendChild(card);
    }
}


