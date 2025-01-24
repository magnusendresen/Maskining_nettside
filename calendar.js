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
