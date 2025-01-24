function main() {
    // Create the container for the events
    const eventsWrapper = document.createElement("div");
    eventsWrapper.className = "events-wrapper";
    eventsWrapper.style.display = "none"; // Initially hide the container
    document.body.appendChild(eventsWrapper);

    fetch('text_contents/events.json')
        .then(response => response.json())
        .then(data => {
            eventsWrapper.innerHTML = ''; // Clear the container

            for (const role in data) {
                data[role].forEach(event => {
                    const box = document.createElement('div');
                    box.className = 'box';

                    const title = document.createElement('h2');
                    title.textContent = role.charAt(0).toUpperCase() + role.slice(1);
                    box.appendChild(title);

                    const what = document.createElement('p');
                    what.textContent = `Hva: ${event.what}`;
                    box.appendChild(what);

                    const location = document.createElement('p');
                    location.textContent = `Lokasjon: ${event.location}`;
                    box.appendChild(location);

                    const description = document.createElement('p');
                    description.textContent = `Beskrivelse: ${event.description}`;
                    box.appendChild(description);

                    const date = document.createElement('p');
                    date.textContent = `Dato: ${event.date}`;
                    box.appendChild(date);

                    eventsWrapper.appendChild(box);
                });
            }
        })
        .catch(error => console.error('Error loading event data:', error));
}

// Function to show the events container
function showEvents() {
    const eventsWrapper = document.querySelector(".events-wrapper");
    eventsWrapper.style.display = "flex";
}

// Function to hide the events container
function hideEvents() {
    const eventsWrapper = document.querySelector(".events-wrapper");
    eventsWrapper.style.display = "none";
}
