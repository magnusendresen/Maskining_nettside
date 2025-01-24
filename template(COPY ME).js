/*
TEMPLATE SCRIPT FOR DYNAMIC CONTENT LOADING AND UI MANIPULATION

INSTRUCTIONS:
- CLASS NAME FOR THE CONTENT CONTAINER AND JSON FILE PATH ARE AUTOMATICALLY DERIVED FROM THE SCRIPT FILE NAME.
- NO NEED TO MANUALLY SET THESE VALUES.
*/

// AUTOMATICALLY DETERMINE THE SCRIPT FILE NAME WITHOUT EXTENSION
const scriptFileName = (() => {
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1].src;
    return currentScript.substring(currentScript.lastIndexOf('/') + 1, currentScript.lastIndexOf('.'));
})();

const CONTENT_CONTAINER_CLASS = `${scriptFileName}-container`; // CLASS NAME BASED ON SCRIPT FILE NAME
const JSON_FILE_PATH = `${scriptFileName}.json`; // JSON FILE PATH BASED ON SCRIPT FILE NAME

function main() {
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
    document.querySelector('a.your-trigger-class').addEventListener('click', function(event) {
        event.preventDefault();
        contentContainer.style.display = 'flex';
    });
}

// CALL THE MAIN FUNCTION
main();
