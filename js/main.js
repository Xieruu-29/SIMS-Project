// Main JavaScript file - Entry point for the SIMS application
// This file handles loading all other JavaScript modules

// Function to dynamically load JavaScript files
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Load all required JavaScript modules
async function loadModules() {
    try {
        // Load modules in the correct order
        // studentManager.js first (contains core functionality)
        await loadScript('js/studentManager.js');
        
        // domHandler.js second (depends on studentManager for the students array)
        await loadScript('js/domHandler.js');
        
        // validation.js last (currently empty but ready for future validation logic)
        await loadScript('js/validation.js');
        
        console.log('All modules loaded successfully');
        
        // Initialize the application after all modules are loaded
        initializeApp();
    } catch (error) {
        console.error('Error loading modules:', error);
    }
}

// Initialize the application
function initializeApp() {
    // Any initialization code can go here
    console.log('SIMS Application initialized');
    
    // Display initial state
    displayResults();
}

// Start loading modules when the DOM is ready
document.addEventListener('DOMContentLoaded', loadModules);