"use strict"

window.onload = () => {
    initLocationDropdown();
    initTypeDropdown();

    let radioButtons = document.querySelectorAll('input[name="searchType"]');
    radioButtons.forEach(radio => {
        radio.addEventListener("change", checkedLocationOrType);
    });

    let showAllRadioButton = document.querySelector(`input[name="showAll"]`);
    // Update the event listener to use the correct function name
    showAllRadioButton.addEventListener("change", showAll);

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

    let showAll = document.querySelector('input[name="showAll"]');

    if (checked) {
        if (checked.value === "location") {
            locationDropdown.style.display = "block";
            initLocationDropdown();
            showAll.checked = false; // Uncheck Show All radio button
        } else if (checked.value === "type") {
            typeDropdown.style.display = "block";
            initTypeDropdown();
            showAll.checked = false; // Uncheck Show All radio button
            showAll();
        }
    }

    // Hide the table when selecting a different radio button after Show All
    let table = document.querySelector("#tableParkInfo");
    table.style.display = "none";
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
    let tableBody = document.querySelector("#dataBodyTable");
    tableBody.innerHTML = "";

    // [ this will hide my h3 element in national_parks.html when choosing something from a dropdown ]
    let nationalParkResults = document.querySelector("#nationalParkResults");

    if (event.target.value == 0) {
        nationalParkResults.removeAttribute("style");
    } else {
        nationalParkResults.style.display = "none";
    }

    if (matchingStates.length === 0) {
        table.style.display = "none";
        return;
    } else {
        table.style.display = "block";
        matchingStates.forEach((state) => {
            buildTableRow(tableBody, state);
        });
    }



}

function getTypeData(event) {
    let selectedType = event.target.value;

    // [ this will hide my h3 element in national_parks.html when choosing something from a dropdown ]
    let nationalParkResults = document.querySelector("#nationalParkResults");

    if (event.target.value == 0) {
        nationalParkResults.removeAttribute("style");
    } else {
        nationalParkResults.style.display = "none";
    }

    if (selectedType === "") {
        document.querySelector("#tableParkInfo").style.display = "none";
        return;
    }

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

        if (property === "Location" || property === "Visit") { // [ ||  <-- this means Or  ]
            continue
        }



        let newTd = newRow.insertCell();
        newTd.innerText = data[property];
    }
    let newTd = newRow.insertCell();
    newTd.innerText = (data.Visit) ? data.Visit : `N/A`
}


function showAll() {
    let table = document.querySelector("#tableParkInfo");
    let tableBody = document.querySelector("#dataBodyTable");
    tableBody.innerHTML = "";

    nationalParksArray.forEach((park) => {
        buildTableRow(tableBody, park);
    });

    table.style.display = "block";

    let nationalParkResults = document.querySelector("#nationalParkResults");
    nationalParkResults.style.display = "none";

    // this should hide the dropdowns of either Location/Type when they get chosen first
    let locationDropdown = document.querySelector("#parkLocation");
    let typeDropdown = document.querySelector("#parkType");
    locationDropdown.style.display = "none";
    typeDropdown.style.display = "none";

    let radioButtons = document.querySelectorAll('input[name="searchType"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}