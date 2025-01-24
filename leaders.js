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
}