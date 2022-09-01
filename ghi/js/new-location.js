//This block of code gets the list of states from our our backend and
// allows access to that info on the front end 
//Add an event listenter for when the DOM loads
window.addEventListener("DOMContentLoaded", async () => {
    //Declare a variable that will hold the URL for the API that we 
    //just created
    const url = "http://localhost:8000/api/states/";
    // Fetch the URL. Don't forget the await keyword so that we get 
    //the response, not the Promise
    const response = await fetch(url);
    //if the response is ok
    if (response.ok) {
        //get the data using the .json method
        //don't forget to await that too
        const data = await response.json();
        // Get the select tag element by its id 'state'
        const selectTag = document.getElementById("state");
        // For each state in the states property of the data
        for (let state of data.states) {
            // Create an 'option' element
            let option = document.createElement("option");
            // Set the '.value' property of the option element to the
            // state's abbreviation
            option.value = state.abbreviation;

            // Set the '.innerHTML' property of the option element to
            // the state's name
            option.innerHTML = state.name;

            // Append the option element as a child of the select tag
            selectTag.appendChild(option);
        }
    }


    const formTag = document.getElementById("create-location-form");
    formTag.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));

        const locationUrl = 'http://localhost:8000/api/locations/';
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newLocation = await response.json();
            console.log(newLocation);
        }
    });
});
