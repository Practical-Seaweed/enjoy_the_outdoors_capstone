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

    let mountainInfoDiv = document.querySelector("#mountainInfo");
    mountainInfoDiv.style.display = "block"; // Show the card

    mountainInfoDiv.innerHTML = ""; // Clear existing content

    // [ this will hide my h3 element in mountains.html when choosing something from a dropdown ]
    let selectMountainInfo = document.querySelector("#selectMountainInfo");

    if (event.target.value == 0) {
        selectMountainInfo.removeAttribute("style");
    } else {
        selectMountainInfo.style.display = "none";
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
        listItem1.classList.add("list-group-item", "list-group-item-dark", "fw-bold",);
        listItem1.textContent = `Elevation: ${matchingMountain.elevation} feet`;

        let listItem2 = document.createElement("li");
        listItem2.classList.add("list-group-item", "list-group-item-dark", "fw-bold");
        listItem2.textContent = `Effort: ${matchingMountain.effort}`;

        let listItem3 = document.createElement("li");
        listItem3.classList.add("list-group-item", "list-group-item-dark", "fw-bold");
        listItem3.textContent = `Lat: ${matchingMountain.coords.lat}   Lng: ${matchingMountain.coords.lng}`;




        listGroup.append(listItem1, listItem2, listItem3);


        //function that can "fetch" the sunset/sunrise times
        async function getSunsetForMountain(lat, lng) {
            let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
            let data = await response.json()
            return data
        }

        //Using the function to fetch the sunset/sunrise times for a specific mountain 
        getSunsetForMountain(matchingMountain.coords.lat, matchingMountain.coords.lng).then(sunsetData => {
            let listItem4 = document.createElement("li");
            listItem4.classList.add("list-group-item", "list-group-item-dark", "fw-bold");
            listItem4.textContent = `
            Sunrise: ${sunsetData.results.sunrise} 
            Sunset: ${sunsetData.results.sunset} CST
            `;
            
            listGroup.appendChild(listItem4); 
        });

        card.append(cardHeader, cardImg, cardBody, listGroup);
        mountainInfo.appendChild(card);
    }
}


