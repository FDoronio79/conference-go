function createCard(name, description, pictureUrl) {
    return `
      <div class="card">
        <img src="{pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    `;
  }

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
          throw new Error ("No response");
      } else {
        const data = await response.json();
  
        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json(); 
            const nameTag = document.querySelector('.card-title')
            nameTag.innerHTML = details.conference.name;
            const descTag = document.querySelector('.card-text')
            descTag.innerHTML = details.conference.description;
            const imageTag = document.querySelector('.card-img-top')
            imageTag.src = details.conference.location.picture_url;
            console.log(details);
            
          }
        }
  
      }
    } catch (e) {
      console.error('error', e)
    }
  
  });