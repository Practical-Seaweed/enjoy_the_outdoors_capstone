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
    locationDropdown.addEventListener("change", handleLocationChange);

    let typeDropdown = document.querySelector("#parkType");
    typeDropdown.addEventListener("change", handleTypeChange);
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

function handleLocationChange(event) {
    console.log(`Location changed to: ${event.target.value}`);
    // Add additional handling for location change here if needed
}

function handleTypeChange(event) {
    console.log(`Type changed to: ${event.target.value}`);
    // Add additional handling for type change here if needed
}
