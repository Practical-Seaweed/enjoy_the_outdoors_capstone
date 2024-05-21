"use strict"


window.onload = () => {

    /*
    You can remove the following console.log() lines.
    They are here to verify that we have access to the data
    The data script files are located in the scripts/data directory
*/
    initMountainsDropdown();


    //log the mountainsArray to the console (scripts/data/mountainData.js)
    console.log(mountainsArray)

    let mountainsDropdown = document.querySelector("#mountainsDropdown");
    mountainsDropdown = document.addEventListener("change", inputMountainData);


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
// function inputMountainData(event){

//     let selectedMountain = event.target.value;

//     let matchingMountains = mountainsArray.filter( (mountain) => {
//         return mountain.name === selectedMountain;
//     } );

// }