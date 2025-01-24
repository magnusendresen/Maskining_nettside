function main() {
    // Create the wrapper for centering
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);

    // Create the container for the leaders
    const leadersContainer = document.createElement("div");
    leadersContainer.className = "leaders-container";
    leadersContainer.style.display = 'none'; // Initially hidden
    wrapper.appendChild(leadersContainer);

    fetch('text_contents/leaders.json')
        .then(response => response.json())
        .then(data => {
            for (const role in data) {
                data[role].forEach(person => {
                    const box = document.createElement('div');
                    box.className = 'box';

                    const img = document.createElement('img');
                    img.src = `img/leaders/${role}.png`;
                    img.alt = `${role}`;
                    box.appendChild(img);

                    const infoContainer = document.createElement('div');
                    infoContainer.className = 'info-container';

                    const title = document.createElement('h2');
                    title.textContent = role.charAt(0).toUpperCase() + role.slice(1);
                    infoContainer.appendChild(title);

                    const name = document.createElement('p');
                    name.innerHTML = `<strong>Navn:</strong> ${person.name}`;
                    infoContainer.appendChild(name);

                    const email = document.createElement('p');
                    email.innerHTML = `<strong>Email:</strong> ${person.email}`;
                    infoContainer.appendChild(email);

                    const age = document.createElement('p');
                    age.innerHTML = `<strong>Alder:</strong> ${person.age}`;
                    infoContainer.appendChild(age);

                    box.appendChild(infoContainer);
                    leadersContainer.appendChild(box);
                });
            }
        })
        .catch(error => console.error('Error loading leaders data:', error));

    // Create the container for the calendar
    const calendarContainer = document.createElement("div");
    calendarContainer.id = "calendar-container";
    calendarContainer.className = "calendar-container"; // Add class name
    calendarContainer.style.display = "none"; // Initially hidden
    calendarContainer.style.justifyContent = "center";
    calendarContainer.style.alignItems = "center";
    calendarContainer.style.height = "600px"; // Adjusted to fit the iframe height
    calendarContainer.style.width = "800px"; // Adjusted to fit the iframe width
    calendarContainer.style.margin = "0 auto"; // Center horizontally
    wrapper.appendChild(calendarContainer);

    // Implement the calendar function
    function calendar(container) {
        try {
            if (!container) {
                throw new Error("Container not found!");
            }

            const iframe = document.createElement("iframe");
            iframe.src = "https://calendar.google.com/calendar/embed?src=ditt_kalender_id&ctz=Europe%2FOslo";
            iframe.style.border = "0";
            iframe.width = "800";
            iframe.height = "600";
            iframe.frameBorder = "0";
            iframe.scrolling = "no";

            container.innerHTML = ""; // Clear the container
            container.appendChild(iframe);
        } catch (error) {
            console.error("Error loading calendar:", error);
        }
    }

    // Example usage of the calendar function
    calendar(calendarContainer);
}

// Add event listener to the link
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.calendar-container').style.display = 'flex';
});

// Call the main function
main();