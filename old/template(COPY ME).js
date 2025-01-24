// AUTOMATICALLY DETERMINE THE SCRIPT FILE NAME WITHOUT EXTENSION
const scriptFileName = (() => {
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1].src;
    return currentScript.substring(currentScript.lastIndexOf('/') + 1, currentScript.lastIndexOf('.'));
})();

const CONTENT_CONTAINER_CLASS = `${scriptFileName}-container`; // CLASS NAME BASED ON SCRIPT FILE NAME
const JSON_FILE_PATH = `${scriptFileName}.json`; // JSON FILE PATH BASED ON SCRIPT FILE NAME

// DEBUGGING OUTPUT
console.debug("DEBUG INFO:", {
    scriptFileName,
    CONTENT_CONTAINER_CLASS,
    JSON_FILE_PATH
});

// CREATE THE WRAPPER
const wrapper = document.createElement("div");
wrapper.className = "wrapper";
document.body.appendChild(wrapper);

// CREATE THE MAIN CONTENT CONTAINER
const contentContainer = document.createElement("div");
contentContainer.className = CONTENT_CONTAINER_CLASS; // USE DYNAMIC CLASS NAME
contentContainer.style.display = "none";
wrapper.appendChild(contentContainer);

// IMPORT DATA FROM JSON
fetch(JSON_FILE_PATH)
    .then(response => {
        if (!response.ok) throw new Error(`HTTP ERROR: ${response.status}`);
        return response.json();
    })
    .then(data => {
        console.debug("LOADED DATA:", data); // DEBUG LOADED DATA
        for (const category in data) {
            data[category].forEach(item => {
                const box = document.createElement('div');
                box.className = 'box';

                const title = document.createElement('h2');
                title.textContent = item.title || 'UNTITLED';
                box.appendChild(title);

                const description = document.createElement('p');
                description.textContent = item.description || 'NO DESCRIPTION';
                box.appendChild(description);

                contentContainer.appendChild(box);
            });
        }
    })
    .catch(error => console.error('ERROR LOADING DATA:', error));

// EVENT LISTENER FOR TRIGGER
document.addEventListener('DOMContentLoaded', () => {
    const triggerElement = document.querySelector(`a.${CONTENT_CONTAINER_CLASS}`);
    if (triggerElement) {
        triggerElement.addEventListener('click', function(event) {
            event.preventDefault();
            contentContainer.style.display = 'flex';
        });
    } else {
        console.warn(`Trigger element with class '${CONTENT_CONTAINER_CLASS}' not found.`);
    }
});
