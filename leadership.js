function leadership() {
    fetch('text contents/leadership.json')
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

                    const name = document.createElement('p');
                    name.innerHTML = `<strong>Navn:</strong> ${person.name}`;
                    box.appendChild(name);

                    const email = document.createElement('p');
                    email.innerHTML = `<strong>Email:</strong> ${person.email}`;
                    box.appendChild(email);

                    const age = document.createElement('p');
                    age.innerHTML = `<strong>Alder:</strong> ${person.age}`;
                    box.appendChild(age);

                    container.appendChild(box);
                });
            }
        })
        .catch(error => console.error('Error loading leadership data:', error));
}

document.querySelector('button').addEventListener('click', loadLeadership);
