const buttonSwitch = document.getElementById('switch');
const wrapper = document.getElementById('wrapper');
const caption = document.getElementById('caption');

let darkModeActive = false;

const toggleDarkMode = function() {
    darkModeActive = !darkModeActive;
    wrapper.classList.toggle("dark-mode");
    buttonSwitch.innerText = darkModeActive 
                             ? 'Light Mode'
                             : 'Dark Mode';
    caption.innerText = darkModeActive
                        ? 'Dark Mode On'
                        : 'Light Mode On';
}

function initialize() {
    buttonSwitch.addEventListener("click", toggleDarkMode);
}

initialize();
