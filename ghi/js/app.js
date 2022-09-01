function createCard(name, description, pictureUrl, location, newStartDate, newEndDate) {
    return `
    <div class="col">
      <div class="card shadow-md p-0 mb-2 bg-body rounded">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
          <p class="card-text">${description}</p>
          <small class="text-muted">${newStartDate} ${"-"} ${newEndDate}</small>
        </div>
      </div>
    </div>
    `;
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("No response");
        } else {
            const data = await response.json();

            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    // const details = await detailResponse.json();
                    // const nameTag = document.querySelector('.card-title')
                    // nameTag.innerHTML = details.conference.name;
                    // const descTag = document.querySelector('.card-text')
                    // descTag.innerHTML = details.conference.description;
                    // const imageTag = document.querySelector('.card-img-top')
                    // imageTag.src = details.conference.location.picture_url;
                    // console.log(details);
                    const details = await detailResponse.json();
                    const name = details.conference.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    const location = details.conference.location.name;
                    let startDate = details.conference.starts;
                    let d1 = new Date(startDate)
                    let newStartDate = (d1.getMonth()+1) + "/" + d1.getDate() + "/" + d1.getFullYear()
                    let endDate = details.conference.ends;
                    let d2 = new Date(endDate);
                    let newEndDate = (d2.getMonth()+1) + "/" + d2.getDate() + "/" + d2.getFullYear()
                    const html = createCard(name, description, pictureUrl, location, newStartDate, newEndDate);
                    const column = document.querySelector('.row');
                    column.innerHTML += html;
                }
            }

        }
    } catch (e) {
        alert('BRUHHHHH')
    }

});

