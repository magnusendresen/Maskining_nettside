function events() {
    fetch('text_contents/events.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            container.innerHTML = ''; // Clear the container

            for (const role in data) {
                data[role].forEach(person => {
                    const box = document.createElement('div');
                    box.className = 'box';

                    const img = document.createElement('img');
                    img.src = `img/leadership/${role}.png`;
                    img.alt = `${role}`;
                    box.appendChild(img);

                    const title = document.createElement('h2');
                    title.textContent = role.charAt(0).toUpperCase() + role.slice(1);
                    box.appendChild(title);
                    
                    const what = document.createElement('p');
                    what.innerHTML = `<strong>Hva:</strong> ${person.what}`;
                    box.appendChild(what);

                    const location = document.createElement('p');
                    location.innerHTML = `<strong>Lokasjon:</strong> ${person.location}`;
                    box.appendChild(location);

                    const description = document.createElement('p');
                    description.innerHTML = `<strong>Beskrivelse:</strong> ${person.description}`;
                    box.appendChild(description);

                    const date = document.createElement('p');
                    date.innerHTML = `<strong>Dato:</strong> ${person.date}`;
                    box.appendChild(date);

                    container.appendChild(box);
                });
            }
        })
        .catch(error => console.error('Error loading event data:', error));
}

document.querySelector('.load-event-button').addEventListener('click', events);
