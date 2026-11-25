
// Arrow function to update banner
const updateBanner = (message, color) => {
    const banner = document.getElementById("banner");

    banner.innerText = message;
    banner.style.backgroundColor = color;
};

// Promise to check system status
const checkStatus = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let online = Math.random() > 0.5;

            if (online) {
                resolve("System is Online");
            } else {
                reject("System is Offline");
            }

        }, 2000);
    });
};

// Function to check system status
function checkSystemStatus() {

    updateBanner("System is Checking...", "orange");

    checkStatus()
        .then((message) => {
            updateBanner(message, "green");
        })
        .catch((error) => {
            updateBanner(error, "red");
        });
}

// Welcome message when page loads
window.onload = () => {
    alert("Welcome to the System!");
    checkSystemStatus();
};
