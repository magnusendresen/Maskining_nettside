function main() {
    // create a new div element
    const newDiv = document.createElement("div");
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
    const calendarContainer = document.getElementById("calendarContainer");
    calendar(calendarContainer);
}

// Create the container for the calendar
const calendarContainer = document.createElement("div");
calendarContainer.id = "calendarContainer";
calendarContainer.style.display = "none"; // Initially hidden
calendarContainer.style.justifyContent = "center";
calendarContainer.style.alignItems = "center";
calendarContainer.style.height = "600px"; // Adjusted to fit the iframe height
calendarContainer.style.width = "800px"; // Adjusted to fit the iframe width
calendarContainer.style.margin = "0 auto"; // Center horizontally
document.body.appendChild(calendarContainer);

// Function to toggle the visibility of the calendar container
function toggleCalendar() {
    const calendarContainer = document.getElementById("calendarContainer");
    if (calendarContainer.style.display === "none") {
        calendarContainer.style.display = "flex";
    } else {
        calendarContainer.style.display = "none";
    }
}

// Function to show the calendar container
function showCalendar() {
    const calendarContainer = document.getElementById("calendarContainer");
    calendarContainer.style.display = "flex";
}

// Function to hide the calendar container
function hideCalendar() {
    const calendarContainer = document.getElementById("calendarContainer");
    calendarContainer.style.display = "none";
}

// Example usage of the calendar function
calendar(calendarContainer);