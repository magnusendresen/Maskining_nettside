function main() {
    // Create the container for the events
    const eventsContainer = document.createElement("div");
    eventsContainer.className = "container";
    document.body.appendChild(eventsContainer);

    fetch('text_contents/events.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            container.innerHTML = ''; // Clear the container

            for (const role in data) {
                data[role].forEach(event => {
                    const box = document.createElement('div');
                    box.className = 'box';

                    const img = document.createElement('img');
                    img.src = `img/events/${role}.png`;
                    img.alt = `${role}`;
                    box.appendChild(img);

                    const title = document.createElement('h2');
                    title.textContent = role.charAt(0).toUpperCase() + role.slice(1);
                    box.appendChild(title);

                    const what = document.createElement('p');
                    what.innerHTML = `<strong>Hva:</strong> ${event.what}`;
                    box.appendChild(what);

                    const location = document.createElement('p');
                    location.innerHTML = `<strong>Lokasjon:</strong> ${event.location}`;
                    box.appendChild(location);

                    const description = document.createElement('p');
                    description.innerHTML = `<strong>Beskrivelse:</strong> ${event.description}`;
                    box.appendChild(description);

                    const date = document.createElement('p');
                    date.innerHTML = `<strong>Dato:</strong> ${event.date}`;
                    box.appendChild(date);

                    container.appendChild(box);
                });
            }
        })
        .catch(error => console.error('Error loading event data:', error));
}

