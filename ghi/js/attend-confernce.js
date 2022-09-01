window.addEventListener("DOMContentLoaded", async () => {
    
    const selectTag = document.getElementById("conference");
    let div = document.querySelector("#loading-conference-spinner");

    const url = "http://localhost:8000/api/conferences/";
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();

    for (let conference of data.conferences) {
        const option = document.createElement("option");
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
    }
    selectTag.classList.remove("d-none");
    div.classList.add("d-none");
    
    }
    const formTag = document.getElementById("create-attendee-form");
    formTag.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(formTag);
    const json = JSON.stringify(Object.fromEntries(formData));

    const attendeeURL = "http://localhost:8001/api/attendees/";
    const fetchConfig = {
        method: "post",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(attendeeURL, fetchConfig);
    if (response.ok) {
        formTag.reset();
        const newAttendee = await response.json();
        console.log(newAttendee)
        let form = document.getElementById("create-attendee-form")
        let success = document.getElementById("success-message")
        form.classList.add("d-none")
        success.classList.remove("d-none")
    }
  });
});
