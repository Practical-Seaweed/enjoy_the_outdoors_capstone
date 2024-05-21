"use strict"

window.onload = () => {
    initLocationDropdown();
    initTypeDropdown();
    /*  MDN said to use .querySelectorAll to select all the radio buttons with the name searchType  */
    let radioButtons = document.querySelectorAll('input[name="searchType"]');
    radioButtons.forEach(radio => {
        radio.addEventListener("change", checkedLocationOrType);
    });

    let locationDropdown = document.querySelector("#parkLocation");
    locationDropdown.addEventListener("change", getLocationData);

    let typeDropdown = document.querySelector("#parkType");
    typeDropdown.addEventListener("change", getTypeData);
};

function checkedLocationOrType() {
    let locationDropdown = document.querySelector("#parkLocation");
    let typeDropdown = document.querySelector("#parkType");

    locationDropdown.style.display = "none";
    typeDropdown.style.display = "none";

    let radioChecks = document.querySelectorAll('input[name="searchType"]');
    let checked = Array.from(radioChecks).find(radio => radio.checked);

    if (checked) {
        if (checked.value === "location") {
            locationDropdown.style.display = "block";
            initLocationDropdown();
        } else if (checked.value === "type") {
            typeDropdown.style.display = "block";
            initTypeDropdown();
        }
    }
}

function initTypeDropdown() {
    let parkType = document.querySelector("#parkType");
    parkType.innerHTML = ''; // Clear existing options

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Choose a Park Type--";
    parkType.appendChild(defaultOption);

    parkTypesArray.forEach(type => {
        let newOption = document.createElement("option");
        newOption.value = type;
        newOption.textContent = type;
        parkType.appendChild(newOption);
    });
}

function initLocationDropdown() {
    let parkLocation = document.querySelector("#parkLocation");
    parkLocation.innerHTML = ''; // Clear existing options

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Choose a Park Location--";
    parkLocation.appendChild(defaultOption);

    locationsArray.forEach(location => {
        let newOption = document.createElement("option");
        newOption.value = location;
        newOption.textContent = location;
        parkLocation.appendChild(newOption);
    });
}

function getLocationData(event) {
    let selectedLocation = event.target.value;

    let matchingStates = nationalParksArray.filter((park) => {
        return park.State === selectedLocation;
    });

    let table = document.querySelector("#tableParkInfo");
    table.style.display = "block";

    let tableBody = document.querySelector("#dataBodyTable");
    tableBody.innerHTML = "";

    matchingStates.forEach((state) => {
        buildTableRow(tableBody, state);
    });
}

function getTypeData(event) {
    let selectedType = event.target.value;

    let matchingParks = nationalParksArray.filter((park) => {
        return park.LocationName.includes(selectedType);
    });

    let table = document.querySelector("#tableParkInfo");
    table.style.display = "block";

    let tableBody = document.querySelector("#dataBodyTable");
    tableBody.innerHTML = "";

    matchingParks.forEach((park) => {
        buildTableRow(tableBody, park);
    });
}

function buildTableRow(tableBody, data) {
    let newRow = tableBody.insertRow();

    for (let property in data) {

        if(property === "Location" || property === "Visit"){ // [ ||  <-- this means Or  ]
            continue
        }

        

        let newTd = newRow.insertCell();
        newTd.innerText = data[property];
    }
    let newTd = newRow.insertCell();
    newTd.innerText = (data.Visit) ? data.Visit: `N/A`
}