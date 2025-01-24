function main() {
    // Create the wrapper for centering
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);

    // Create the container for the leadership
    const leadershipContainer = document.createElement("div");
    leadershipContainer.className = "leadership-container";
    leadershipContainer.style.display = 'none'; // Initially hidden
    wrapper.appendChild(leadershipContainer);

    fetch('text_contents/leadership.json')
        .then(response => response.json())
        .then(data => {
            for (const role in data) {
                data[role].forEach(person => {
                    const box = document.createElement('div');
                    box.className = 'box';

                    const img = document.createElement('img');
                    img.src = `img/leadership/${role}.png`;
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
                    leadershipContainer.appendChild(box);
                });
            }
        })
        .catch(error => console.error('Error loading leadership data:', error));
}

function showLeaders() {
    const container = document.querySelector('.leadership-container');
    if (container) {
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.flexWrap = 'wrap';
    }
}

function hideLeaders() {
    const container = document.querySelector('.leadership-container');
    if (container) {
        container.style.display = 'none';
    }
}
