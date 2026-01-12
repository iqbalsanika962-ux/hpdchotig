/**
 * global.js - Shared logic for all phases
 */

// 1. REUSABLE TYPEWRITER EFFECT
// Used to write instructions character by character
function runTypewriter(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let i = 0;
    element.innerHTML = ""; // Clear previous text

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 2. SMOOTH NAVIGATION
// Can be used if you want to add fade-out effects before leaving a page
function navigateTo(url) {
    // Add a quick fade-out class to body if you wish
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

// 3. SOUND EFFECT HELPER
// Call this when buttons are clicked for extra "pop"
function playClickSound() {
    // You can add a small click.mp3 in assets later if you want sound
    // const audio = new Audio('../assets/click.mp3');
    // audio.play();
}

// 4. PREVENT ZOOM ON MOBILE (For better UI)
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

console.log("Global JS initialized successfully.");