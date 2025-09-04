/* JavaScript Section */

console.log('JavaScript file loaded!');

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, running JavaScript...');
    
    // Modify the first "Hello World!" to say "GoodBye" with JS
    const redElement = document.getElementById('red');
    if (redElement) {
        redElement.textContent = 'GoodBye';
        console.log('Changed first header to "GoodBye"');
    } else {
        console.log('Error: Element with ID "red" not found');
    }
    
    // Change the font colour of a header to orange with JS
    const orangeElement = document.getElementById('first-hello');
    if (orangeElement) {
        orangeElement.style.color = 'orange';
        console.log('Changed header color to orange');
    } else {
        console.log('Error: Element with ID "first-hello" not found');
    }
    
    // Add a clickable header that changes the font colour to brown with JS
    const clickableHeader = document.getElementById('clickable-header');
    if (clickableHeader) {
        clickableHeader.addEventListener('click', function() {
            this.style.color = 'brown';
            console.log('Header clicked! Color changed to brown.');
        });
        console.log('Click listener added to clickable header');
    } else {
        console.log('Error: Element with ID "clickable-header" not found');
    }
    
});