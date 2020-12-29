// Variables
const background = document.querySelector('.background');
const loadingText = document.querySelector('.loading-text');

// Loading Percentage
let loadValue = 0;

// Function: Blur Image
const blurring = () => {
    // Increase load value
    loadValue++;

    // Stop interval if loadvalue === 100
    if (loadValue > 99) {
        clearInterval(interval);
    }

    // Update load text
    loadingText.innerText = `${loadValue}%`;
    // Change load text opacity
    loadingText.style.opacity = scale(loadValue, 0, 100, 1, 0);
    // Change background image blur
    background.style.filter = `blur(${scale(loadValue, 0, 100, 30, 0)}px)`;
};

// Function: For calculating load numbers
const scale = (num, in_min, in_max, out_min, out_max) =>
    ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

// Set Interval for blur effect
let interval = setInterval(blurring, 50);
